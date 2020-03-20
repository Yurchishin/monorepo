import React, { FC, useState, useCallback } from 'react'
import { Input, Button } from 'antd'
import { MobStateTreeProvider, useMST } from 'mst-react'
import mstStore from '@client/stores'
import logo from './logo.svg'
import './App.css'

const Test: FC<{}> = () => {
    const indent = useMST('themeStore', themeStore => themeStore.BORDER_RADIUS)

    console.log(indent)

    return <p>aaa</p>
}

// eslint-disable-next-line react/no-multi-comp
const App: FC = () => {

    return (
        <MobStateTreeProvider store={mstStore}>
            <div className="App">
                <header className="App-header">
                    <img
                        alt="logo"
                        className="App-logo"
                        src={logo}
                    />
                    <p>
                    Edit
                        {' '}
                        <code>src/App.tsx</code>
                        {' '}
                    and save to reload.
                    </p>
                    <Button type="primary">asdasd</Button>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    Learn React
                    </a>
                    <Test />
                </header>
            </div>
        </MobStateTreeProvider>
    )
}

export default App
