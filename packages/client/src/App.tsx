/* eslint-disable */
/* tslint:disable */
import React, { FC } from 'react'
import { MSTProvider } from 'mst-react-lite'
import { MSTRouterProvider, MSTSwitch } from 'mst-react-router-dom'
import { ThemeProvider } from 'styled-components'
import mstStore, { MST_ENV } from '@client/stores'
import './styles/index.less'

// eslint-disable-next-line react/no-multi-comp
const App: FC = () =>
    (
        <MSTProvider rootStore={mstStore}>
            <ThemeProvider theme={mstStore.themeStore}>
                <MSTRouterProvider history={MST_ENV.history}>
                    <MSTSwitch>
                    </MSTSwitch>
                </MSTRouterProvider>
            </ThemeProvider>
        </MSTProvider>
    )

export default App
