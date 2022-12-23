import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useSelector, useStore } from 'react-redux';
import store from './store';
import SocketSlice from './SocketSlice';

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    console.log("click")
  }


  return (
    <div className="App">
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
      <MyComponent/>
    </div>
  )
}

function MyComponent() {
  const [serverStatus, setStatus] = useState(0);
  let socket: WebSocket = store.getState().socket.value;
  let slice = store.getState().socket;

  console.log(socket);

  socket.onmessage = (e) => onMessageEvent(e)

  function onMessageEvent(e: MessageEvent) {
    let dataString = ""
    e.data.text().then((m: string) => {
      dataString = m;
      console.log(m)
      console.log(JSON.parse(m))
    })
    
  }

  socket.send("gameComponentInitialized");

  return (
    <p className="m-4">Привет это мой компонент</p>
  )
}

export default App
