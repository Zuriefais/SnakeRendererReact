import React from "react"
import reactLogo from './assets/react.svg'
import { useState } from "react";


export default function Main() {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
        console.log("click")
    }
    return (
        <>
            <h1>Main page</h1>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="logo" alt="Vite logo" />
                </a>
                <a href="https://beta.reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => handleClick}>
                    count is {count}
                </button>
                <p></p>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}