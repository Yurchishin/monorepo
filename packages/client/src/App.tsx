/* eslint-disable */
/* tslint:disable */
import React, { FC } from 'react'
import { MSTProvider } from 'mst-react-lite'
import { MSTRouterProvider, MSTSwitch, MSTRoute, useNSTNavigationStore } from 'mst-react-router-dom'
import mstStore, { MST_ENV } from '@client/stores'
import { Link } from 'react-router-dom'
import {toJS} from "mobx"
import './styles/index.less'

const Test: FC = () => {
    const value = useNSTNavigationStore()
    console.log(value)
    console.log(toJS(value))

    return <p>aaa</p>
}

const Page: FC<{ name: string, to: string }> = ({ name, to }) => {
    return <Link to={to}>{name} / <Test /></Link>
}

// eslint-disable-next-line react/no-multi-comp
const App: FC = () =>
    (
        <MSTProvider rootStore={mstStore}>
            <MSTRouterProvider history={MST_ENV.history}>
                <MSTSwitch>
                    <MSTRoute $mst_route_name="home" exact path="/" component={() => <Page name="home" to="/test1?id=2" />}/>
                    <MSTRoute $mst_route_name="test1" exact path="/test1:id" component={() => <Page name="test1" to="/test2" />}/>
                    <MSTRoute $mst_route_name="test2" exact path="/test2" component={() => <Page name="test1" to="/" />}/>
                    <Test/>
                </MSTSwitch>
            </MSTRouterProvider>
        </MSTProvider>
    )

export default App
