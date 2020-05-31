/* eslint-disable */
/* tslint:disable */
import React, { FC } from 'react'
import { MSTProvider } from 'mst-react-lite'
import { MSTRouterProvider, MSTSwitch, MSTRoute } from 'mst-react-router-dom'
import { ThemeProvider } from 'styled-components'
import mstStore, { MST_ENV } from '@client/stores'
import './styles/index.less'

import { Layout, Input } from 'antd';
import types from "mst-types";

const { Header, Footer, Sider, Content } = Layout;


// eslint-disable-next-line react/no-multi-comp
const App: FC = () =>
    (
        <MSTProvider rootStore={mstStore}>
            <ThemeProvider theme={mstStore.themeStore}>
                <MSTRouterProvider history={MST_ENV.history}>
                    <MSTSwitch>
                        <MSTRoute $mst_route_name="Home" exact path="/" component={Header} paramsType={types.model({})} />
                        <MSTRoute $mst_route_name="Home" exact path="/" component={Header} paramsType={types.model({})} />
                        <MSTRoute $mst_route_name="Home" exact path="/" component={Header} paramsType={types.model({})} />
                        <MSTRoute $mst_route_name="Home" exact path="/" component={Header} paramsType={types.model({})} />
                    </MSTSwitch>
                </MSTRouterProvider>
            </ThemeProvider>
        </MSTProvider>
    )

export default App
