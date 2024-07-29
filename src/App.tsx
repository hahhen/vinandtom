import "./App.css"
import { Counter } from "./features/counter/Counter"
import { Quotes } from "./features/quotes/Quotes"
import logo from "./logo.png"

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo}
        alt="Vinicius&Tom" className="App-logo" width={150} />
      </header>
      <section className="App-hero">
        <div className="App-hero-left">
          <h2 className="App-hero-subtitle">
            Rio2016:
          </h2>
          <div className="App-hero-title">
            <h1 className="App-hero-title-vin">Vinicius&nbsp;</h1><h1>&&nbsp;</h1><h1 className="App-hero-title-tom">Tom</h1>
          </div>
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}

export default App
