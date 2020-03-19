import React, { FC, useState, useCallback } from 'react'
import logo from './logo.svg'
import './App.css'
import { Input, Button } from 'antd'

let initialValue = {
    '@primary-color': '#fff',
    '@secondary-color': '#ccc',
}

const App: FC = () => {
    const [color, setColor] = useState('#1DA57A')
    const handleColorChange = useCallback(event => {
        setColor(event.target.value)
        //@ts-ignore
        window.less
            .modifyVars(initialValue)
    }, [setColor])

    //@ts-ignore
    console.log(window.less)

    return (
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
                <Input value={color} onChange={handleColorChange} />
                <Button type="primary">asdasd</Button>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    )
}

export default App
