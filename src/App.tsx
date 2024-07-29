import "./App.css"
import { Counter } from "./features/counter/Counter"
import { Quotes } from "./features/quotes/Quotes"
import logo from "./logo.png"
import vinandtom from "./vinandtom.png"

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo}
          alt="Vinicius&Tom" className="App-logo" width={150} />
      </header>
      <section className="App-hero">
        <div className="App-hero-gradient"></div>
        <div className="App-hero-wrapper container">
          <div className="App-hero-left">
            <h2 className="App-hero-subtitle">
              Rio2016:
            </h2>
            <div className="App-hero-title">
              <h1 className="App-hero-title-vin">Vinicius&nbsp;</h1><h1>&&nbsp;</h1><h1 className="App-hero-title-tom">Tom</h1>
            </div>
          </div>
          <div className="App-hero-right">
            <img src={vinandtom} width={300} />
          </div>
        </div>
      </section>
      <section className="App-history">
        <div className="App-banner">
          <h1>History</h1>
        </div>
        <div className="container App-history-cont">
          <div className="App-history-text">
            <p>Vinicius is the mix of all Brazilian fauna and has the amazing power to stretch himself to Olympic proportions. Tom is the mix of Brazilian fauna and can produce any object from inside his leafy hairdo. Their mission is to spread the Olympic and Paralympic values while breaking all the records of fun.</p>
            <p>For the Rio2016 Mascots, sports are all about having a great time and they will find a way to transform everything into a sport competition, from cooking dinner to dancing samba.</p>
            <p>Funny By Nature was the #1 most watched show on Cartoon Network Brazil in 2016 and helped make Vinicius and Tom the greatest record breakers of the Olympic and Paralympic Games, generating triple the licensing revenues of London 2012 and double of Beijing 2008.</p>
            <p>Created and Produced by Birdo for Cartoon Network.</p>
          </div>
          <div className="App-history-images">
          <img src="https://images.squarespace-cdn.com/content/v1/5aff0e0d3917ee5513af5749/1527541396066-VG60OLSVQP2LJHD6JTWN/vinicius.png?format=1500w"/>
        </div>
        </div>
      </section>
    </div>
  )
}

export default App
