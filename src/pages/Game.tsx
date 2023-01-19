import { useState } from "react";
import { json } from "react-router-dom";
import './Game.css'

export default function Game() {
    const [ip, setIp] = useState("")
    const [status, setStatus] = useState(false)
    let socket: WebSocket
    function start() {
        socket = new WebSocket(ip);
        socket.onopen = onConnect
        socket.onmessage = onMessage
        socket.onclose = onDisconnect
        console.log("connecting....")   
    }

    function onConnect() {
        setStatus(true)
        socket.send(JSON.stringify({
            value: "GameComponentReady"
        }))
    }

    function onMessage(e: MessageEvent) {
        let data =  e.data
    }

    function onDisconnect() {
        setStatus(false)
    }

    return (
        <>
            <h1>Game</h1><br/>
            <p className={status ? 'b-green' : 'b-red'}>Status: {status ? 'connected' : 'disconnected'}</p><br/>
            <input type="text" onChange={e => setIp(e.target.value)}/><br/>
            <button onClick={start}>Connect</button>
        </>
    )
}