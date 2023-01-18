import { useState } from "react";
import { json } from "react-router-dom";

export default function Game() {
    const [ip, setIp] = useState("")
    let socket: WebSocket
    function start() {
        socket = new WebSocket(ip);
        console.log("connecting....")
    }

    function onConnect() {
        socket.send(JSON.stringify({
            value: "Game component connected"
        }))
    }

    return (
        <>
            <h1>Game</h1><br/>
            <input type="text" onChange={e => setIp(e.target.value)}/><br/>
            <button onClick={start}>Connect</button>
        </>
    )
}