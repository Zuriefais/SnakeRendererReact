import React from "react"
import { useState } from "react";


export default function MainPage() {
    const [count, setCount] = useState(0)
    function handleClick() {
        setCount(count + 1)
        console.log("click")
    }
    return (
        <>
            <h1>Main page</h1>
            <div className="card">
                <button onClick={handleClick}>
                    count is {count}
                </button>
                <p></p>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
        </>
    )
}