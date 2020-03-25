/* eslint-disable */
/* tslint:disable */
import React, { FC } from 'react'
import { MSTProvider } from 'mst-react-lite'
import { MSTRouterProvider, MSTSwitch, MSTRoute } from 'mst-react-router-dom'
import mstStore, { MST_ENV } from '@client/stores'
import { Link } from 'react-router-dom'
import './styles/index.less'
import {types} from "mobx-state-tree";

const TestParams = types.model({
    id: types.string,
})

const Page: FC<{ name: string, to: string }> = ({ name, to }) => {
    return <Link to={to}>{name}</Link>
}

// eslint-disable-next-line react/no-multi-comp
const App: FC = () =>
    (
        <MSTProvider rootStore={mstStore}>
            <MSTRouterProvider history={MST_ENV.history}>
                <MSTSwitch>
                    <MSTRoute $mst_route_name="home" title="home" exact path="/" component={() => <Page name="home" to="/test1/2" />}/>
                    <MSTRoute $mst_route_name="test1" title="test1" paramsType={TestParams} exact path="/test1/:id" component={() => <Page name="test1" to="/test2" />}/>
                    <MSTRoute $mst_route_name="test2" title="test2" exact path="/test2" component={() => <Page name="test1" to="/" />}/>
                </MSTSwitch>
            </MSTRouterProvider>
        </MSTProvider>
    )

export default App
