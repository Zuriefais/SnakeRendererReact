import './App.css'
import { useRef } from 'react'
import { Outlet, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header>
        <Link to={"/"}>Main</Link>
        <Link to={"/About"}>About</Link>
      </header>
      <main><Outlet></Outlet></main>
      <footer></footer>
    </div>
  )
}

export default App