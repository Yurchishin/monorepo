import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { computed, reaction, toJS } from 'mobx';
import { View, Text, TouchableOpacity } from 'react-native';
import R from 'ramda';
import { setBet } from 'services/setBet';
import { placeBet, fixedOddsTransfer } from 'services/placeBet';
import regexp from 'constants/regexp';
import { getValidPrice } from 'utils/price';
import CloseIcon from 'components/CloseIcon';
import AddAmount from 'components/AddAmount';
import Button from 'components/Button';
import { COLOR_WHITE } from 'styles/variables';
import shared from 'styles/shared';
import { CURRENCY_TYPES_SYMBOLS } from 'core/constants/currency';
import { setBetStatuses } from 'constants/statuses';
import { userStorePropTypes, routerStorePropTypes, accountBalanceStorePropTypes, betSlipStorePropTypes, accountBetsStorePropTypes } from 'types/propTypes';
import { SET_BET_AREA_AMOUNT_INPUT_PLACEHOLDER } from 'constants/dictionaries/text';
import { setAccessibilityLabel } from 'utils/tests';
import { toLowerCamelCase } from 'utils/string';
import { numberWithCommas } from 'utils/number';
import firebase from 'react-native-firebase';
import StopLossInfo from 'components/StopLossInfo';
import { dotInputValue, NOTIFICATION_INACTIVITY_TIMEOUT } from 'constants/variables';
import styles from './BetStakeArea.style';

class BetStakeArea extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf(['Sell', 'Buy']).isRequired,
    name: PropTypes.string.isRequired,
    onAddToBetSlip: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    userStore: userStorePropTypes,
    routerStore: routerStorePropTypes,
    marketPrices: PropTypes.shape({
      Buy: PropTypes.number,
      Key: PropTypes.string,
      Sell: PropTypes.number,
      SoFar: PropTypes.string,
    }).isRequired,
    betSlipStore: betSlipStorePropTypes,
    accountBetsStore: accountBetsStorePropTypes,
    accountBalanceStore: accountBalanceStorePropTypes,
  };

  state = {
    value: '', // should be only string. Check output of your functions to produce only strings.
  };

  componentDidMount() {
    const { betSlipStore, routerStore } = this.props;
    // this reaction is needed to hide bet slip area when any route is changing.
    // Without this bet stake are will be rendered in a new screen if there will be the
    // same market
    reaction(() => routerStore.routeName, betSlipStore.hideBetArea);
  }

  @computed get direction() {
    return this.props.type === 'Sell' ? 1 : 0;
  }

  handleClose = () => {
    this.props.onClose();
  };

  // plus certain amount
  handleAddToValue = newValue => {
    // only digits and dot are allowed to enter. This regex checks that entered value totally conforms for this.
    // The empty string is required to remove the whole value
    if (regexp.moneyInput.test(String(newValue)) || newValue === '') {
      const properValue = this.state.value;

      this.setState({
        // first convert to numbers to calculate the sum. then turn to the string
        value: (Number(properValue) + Number(newValue)).toFixed(2),
      });
      // eslint-disable-next-line no-unused-expressions
      newValue === 1 ? firebase.analytics().logEvent('plusButtonPressedQuickSetBet', {}) : firebase.analytics().logEvent('addPredifinedValueQuickSetBet', { addedValue: newValue });
    }
  };

  handleSetNewValue = newValue => () => {
    // only digits and dot are allowed to enter. This regex checks that entered value totally conforms for this.
    // The empty string is required to remove the whole value
    if (regexp.moneyInput.test(String(newValue)) || newValue === '') {
      // here is a check if current value is 0. It's required to just paste the new
      // value here, else it will be 05, 021 and so on.
      // else, just concat 2 strings
      this.setState(prev => {
        const val = regexp.oneOrMoreNulls.test(prev.value) && newValue !== dotInputValue ? newValue : String(prev.value).concat(newValue);
        return {
          value: newValue === 0 && (prev.value === '' || prev.value === '0') ? '0.' : String(val),
        };
      });
    }
  };

  handlePlusOne = () => {
    this.handleAddToValue(1);
  };

  handleMinusOne = () => {
    // according to the business logic requirements the value should not changed if it is equal 0
    if (Number(this.state.value) === 0) {
      return;
    }

    const properValue = this.validateAndFix();

    const toNum = Number(properValue);

    if (toNum > 1) {
      this.setState({
        // first convert to numbers to deduct. then turn to the string
        value: (toNum - 1).toFixed(2),
      });
    } else {
      this.setState({
        value: '0',
      });
    }
    firebase.analytics().logEvent('minusButtonPressedQuickSetBet', {});
  };

  handleBackspace = () => {
    this.setState(prev => ({
      value: prev.value.length > 0 ? prev.value.slice(0, -1) : 0, // clear the value if it's 1 digit
    }));
  };

  renderKey = numberChar => {
    return this.state.value && numberChar === '.' && this.state.value.includes('.') ? (
        <View key={numberChar} style={styles.keyButtonDisabled}>
            <Text {...setAccessibilityLabel(toLowerCamelCase(`${numberChar} Set Bet Number With Text`))} style={styles.keyText}>
                {numberChar}
            </Text>
        </View>
    ) : (
        <TouchableOpacity key={numberChar} style={styles.keyButton} onPress={this.handleSetNewValue(numberChar)}>
            <Text style={styles.keyText} {...setAccessibilityLabel(toLowerCamelCase(`${numberChar} Set Bet Number`))}>
                {numberChar}
            </Text>
        </TouchableOpacity>
    );
  };

  handleSubmit = async () => {
    const {
      accountBetsStore: { updateAccountBets },
    } = this.props;
    if (this.state.value === '' || this.state.value === '0') {
      // Place for error popup if bet is null or 0
    } else {
      const { type, marketPrices, betSlipStore, name } = this.props;
      this.props.betSlipStore.setCashOut(false);

      try {
        betSlipStore.setLoading();
        betSlipStore.setCashOut(false);

        const properValue = this.validateAndFix();

        this.props.betSlipStore.setBetInterval(true);

        let res = {};
        if (Object.entries(toJS(betSlipStore.requestBetPlaceData)).length === 0) {
          res = await setBet(marketPrices.Key, this.direction, marketPrices[type], properValue);
          firebase.analytics().logEvent('placeBetFromQuickSetBet', {
            marketName: name,
            betType: type,
            marketPrice: marketPrices[type],
            betAmount: properValue,
            scoreSoFar: marketPrices.SoFar,
          });
        } else {
          res = await placeBet(marketPrices.Key, this.direction, marketPrices[type], properValue, toJS(betSlipStore.requestBetPlaceData));
          await fixedOddsTransfer(toJS(betSlipStore.requestBetPlaceData));
        }

        const {
          Data,
          Data: { Status },
        } = res.data;

        /**
         * this transfering ref to method is required in case the price is
         * changed and we need resubmit
         *
         * */

        betSlipStore.onResubmitBet = this.handleSubmit;

        betSlipStore.showNotification(Data);
        /**
         * TODO: those statuses are needed to be declared somewhere and abstracted from numbers.
         * like a constant with possible values humanly readable. this hardcode
         * will lead to potential bugs in the future.
         */

        switch (Status) {
          case setBetStatuses.success:
            // after 5 seconds we have to close notification.
            // To do so we need to reset notification data to the null value and that will make notification disappear
            // TODO replace setTimeout to react-native-background-timer
            setTimeout(() => {
              betSlipStore.hideNotification();
            }, NOTIFICATION_INACTIVITY_TIMEOUT); // 5 seconds
            updateAccountBets();
            this.props.onClose();
            break;

          case setBetStatuses.requireFunds:
            this.setState({
              isRequiredFunds: true,
            });
            break;

          case setBetStatuses.suspended:
            this.props.onClose();
            break;

          // no default
        }
      } catch (error) {
        betSlipStore.unsetLoading();
      }
    }
  };

  handleAddToBetSlip = () => {
    const { marketPrices, betSlipStore } = this.props;

    betSlipStore.setNotCompletedBet(marketPrices.Key, this.state.value);
    this.props.onAddToBetSlip();
    firebase.analytics().logEvent('addToBetSlipQuickSetBet', { setValue: this.state.value });
  };

  closeDialog = () => {
    this.setState(prevState => ({ ...prevState, isRequiredFunds: !prevState.isRequiredFunds }));
  };

  lowFundsPopup = () => (
      <View style={styles.lowFundsContainer}>
          <Text style={[styles.bottomGutter, shared.popupText]}>You need additional funds to place the bet</Text>

          <Button
              title='TRANSFER FUNDS'
              containerStyle={{
          ...shared.submitButtonContainer,
        }}
              buttonStyle={shared.submitButton}
              onPress={() => {
          this.props.routerStore.navigate('TransferFunds', { hasBackArrow: true });
          this.closeDialog();
        }}
          />
      </View>
  );

  /**
   * this method reads current value from state, validate it, change the input to
   * show user the proper value and then return valid input value.
   */
  validateAndFix() {
    const { value } = this.state;

    const properValue = value ? getValidPrice(value) : 0;

    if (properValue !== value) {
      this.setState({
        value: properValue,
      });
    }

    return properValue;
  }

  render() {
    const { name, type, marketPrices, onClose, accountBalanceStore } = this.props;
    const price = marketPrices[type];
    const { value } = this.state;

    const { balance } = accountBalanceStore;
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text {...setAccessibilityLabel('BetStakeName')} style={styles.nameText}>
                    {name}
                </Text>

                <View style={styles.headerRow}>
                    <Text {...setAccessibilityLabel('BetStakeType')} style={styles.nameText}>
                        {type}
                    </Text>
                    {value > 0 && (
                    <Text {...setAccessibilityLabel('BetStakeCurrentPrice')} style={styles.nameText}>
                        {balance?.currencySymbol ?? CURRENCY_TYPES_SYMBOLS.pound} 
                        {' '}
                        {numberWithCommas(value)}
                    </Text>
            )}
                    <Text {...setAccessibilityLabel('BetStakePrice')} style={styles.nameText}>
                        {price !== undefined ? `@${price}` : ''}
                    </Text>
                </View>

                <StopLossInfo rowStyle={styles.headerRow} textStyle={styles.stopLossText} marketKey={marketPrices.Key} price={marketPrices[type]} direction={this.direction} />

                <CloseIcon {...setAccessibilityLabel('BetStakeClosePopup')} style={styles.closeIcon} color={COLOR_WHITE} size={18} onPress={() => onClose()} />
            </View>

            <View style={styles.amountInputRow}>
                <TouchableOpacity style={styles.addOneButton} onPress={this.handleMinusOne}>
                    <Text {...setAccessibilityLabel('BetStakeMinus')} style={[styles.keyText, styles.symbolsText]}>
              -
                    </Text>
                </TouchableOpacity>

                <View style={styles.amountInputContainer}>
                    {value && value !== '0' ? (
                        <Text {...setAccessibilityLabel('BetStakeValue1')} style={styles.amountInputText}>
                            {this.state.value}
                        </Text>
            ) : (
                <Text {...setAccessibilityLabel('BetStakeValue2')} style={styles.amountInputPlaceholder}>
                    {SET_BET_AREA_AMOUNT_INPUT_PLACEHOLDER}
                </Text>
            )}
                </View>

                <TouchableOpacity style={styles.addOneButton} onPress={this.handlePlusOne}>
                    <Text {...setAccessibilityLabel('BetStakePlus')} style={[styles.keyText, styles.symbolsText]}>
              +
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.betSlipButton} onPress={this.handleAddToBetSlip}>
                    <Text {...setAccessibilityLabel('addToBetSlip')} style={styles.betSlipText}>
              Add to betslip
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.addAmountButtonsRow}>
                <AddAmount style={styles.addAmountButton} value={10} onPress={this.handleAddToValue} />

                <AddAmount style={styles.addAmountButton} value={25} onPress={this.handleAddToValue} />

                <AddAmount style={styles.addAmountButton} value={50} onPress={this.handleAddToValue} />
            </View>
            <View style={styles.keyboardWrapper}>
                <View style={styles.keyboardDigitsWrapper}>
                    <View style={styles.keyboardDigitsRow}>
                        {R.range(1, 7).map(number => this.renderKey(number))}
                    </View>

                    <View style={styles.keyboardDigitsRow}>
                        {R.range(7, 10).map(number => this.renderKey(number))}

                        {this.renderKey(0)}

                        {this.renderKey('00')}

                        {this.renderKey('.')}
                    </View>
                </View>

                <TouchableOpacity style={styles.removeKeyButton} onPress={this.handleBackspace}>
                    <Text {...setAccessibilityLabel('BetStakeLess')} style={styles.keyText}>
                        {'<'}
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonRow}>
                <Button
                    {...setAccessibilityLabel('BetStakePlaceBetButton')}
                    buttonStyle={styles.button}
                    titleStyle={styles.buttonText}
                    disabled={!value || value === '0'}
                    title='PLACE BET' // check if string is empty and equals to '0',
            // because we are validating and fixing value already above
                    onPress={this.handleSubmit}
                />
            </View>
        </View>
    );
  }
}

export default inject('routerStore', 'userStore', 'betSlipStore', 'accountBalanceStore', 'accountBetsStore')(observer(BetStakeArea));
