/* tslint:disable:no-any */
/* eslint-disable import/named */
import { $Keys } from 'utility-types'
import { ReactElement } from 'react'
import { StyledComponent, DefaultTheme } from 'styled-components'

declare module 'react-flexa' {
    type Media<T> = {
        xs?: T;
        sm?: T;
        md?: T;
        lg?: T;
    }

    /*********************************************************************************************/

    type GutterOptions = number | string
    type DisplayOptions = 'flex' | 'inline-flex'
    type FlexDirectionOptions = 'row' | 'row-reverse' | 'column' | 'column-reverse'
    type FlexWrapOptions = 'nowrap' | 'wrap' | 'wrap-reverse'
    type JustifyContentOptions =
        'flex-start'
        | 'flex-end'
        | 'center'
        | 'space-between'
        | 'space-around'
    type AlignItemsOptions = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
    type AlignContentOptions =
        'flex-start'
        | 'flex-end'
        | 'center'
        | 'space-between'
        | 'space-around'
        | 'stretch'

    type GutterMedia = Media<GutterOptions>
    type DisplayOptionsMedia = Media<DisplayOptions>
    type FlexDirectionOptionsMedia = Media<FlexDirectionOptions>
    type FlexWrapOptionsMedia = Media<FlexWrapOptions>
    type JustifyContentOptionsMedia = Media<JustifyContentOptions>
    type AlignItemsOptionsMedia = Media<AlignItemsOptions>
    type AlignContentOptionsMedia = Media<AlignContentOptions>

    export type RowProps = {
        gutter?: GutterOptions | GutterMedia;
        display?: DisplayOptions | DisplayOptionsMedia;
        flexDirection?: FlexDirectionOptions | FlexDirectionOptionsMedia;
        flexWrap?: FlexWrapOptions | FlexWrapOptionsMedia;
        justifyContent?: JustifyContentOptions | JustifyContentOptionsMedia;
        alignItems?: AlignItemsOptions | AlignItemsOptionsMedia;
        alignContent?: AlignContentOptions | AlignContentOptionsMedia;
    }

    /*********************************************************************************************/

    type MediaOptions = number | string | 'hidden' | 'auto'
    type OrderOptions = number
    type AlignSelfOptions =
        'auto'
        | 'flex-start'
        | 'flex-end'
        | 'center'
        | 'baseline'
        | 'stretch'
    type ElementTypeOptions = $Keys<JSX.IntrinsicElements>
    type FlexOptions = number | string

    type OrderOptionsMedia = Media<OrderOptions>
    type AlignSelfOptionsMedia = Media<AlignSelfOptions>

    export type ColProps = {
        xs?: MediaOptions;
        sm?: MediaOptions;
        md?: MediaOptions;
        lg?: MediaOptions;
        gutter?: GutterOptions | GutterMedia;
        order?: OrderOptions | OrderOptionsMedia;
        alignSelf?: AlignSelfOptions | AlignSelfOptionsMedia;
        elementType?: ElementTypeOptions;
        flex?: FlexOptions;
        display?: DisplayOptions | DisplayOptionsMedia;
        // tslint:disable-next-line:type-literal-delimiter
        children?: ReactElement | null
    }

    /*********************************************************************************************/

    declare const Row: StyledComponent<'div', DefaultTheme, RowProps, never>
    declare const Col: StyledComponent<'div', DefaultTheme, ColProps, never>
}
