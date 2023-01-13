import './App.css'
import RouterByZuriefais from './RouterByZuriefais';

function App() {
  return (
    <div className="App">
      <header></header>
      <main><RouterByZuriefais pathname = {location.pathname}/></main>
      <footer></footer>
      
    </div>
  )
}

export default App
