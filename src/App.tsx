import './App.css'
import { useRef } from 'react'
import { Outlet, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header>
        <Link to={"/"} className='p-5'><button >Main</button></Link>
        <Link to={"/About"} className='p-5'><button >About</button></Link>
        <Link to={"/Game"} className='p-5'><button >Game</button></Link>
      </header>
      <main><Outlet></Outlet></main>
      <footer></footer>
    </div>
  )
}

export default App