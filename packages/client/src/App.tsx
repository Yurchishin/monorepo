import React, { FC } from 'react'
import logo from './logo.svg'
import './App.css'
import { spacingSizeRemM } from './utils/styles/relatives/spacing'
import { some } from 'fp-ts/lib/Option'

console.log(spacingSizeRemM(some(1)))

const App: FC = () => (
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

export default App
