/* eslint-disable */
/* tslint:disable */
import React, { FC } from 'react'
import { MobStateTreeProvider, useMST } from 'mst-react-lite-lite'
import mstStore from '@client/stores'
import { BrowserRouter, Router } from 'react-router-dom'
import './styles/index.less'

// eslint-disable-next-line react/no-multi-comp
const App: FC = () =>
    (
        <MobStateTreeProvider store={mstStore}>
            <BrowserRouter/>
        </MobStateTreeProvider>
    )

export default App
