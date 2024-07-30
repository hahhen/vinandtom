import "./App.css"
import { Counter } from "./features/counter/Counter"
import { Quotes } from "./features/quotes/Quotes"
import logo from "./logo.png"
import vinandtom from "./vinandtom.png"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo}
          alt="Vinicius&Tom" className="App-logo" width={150} />
      </header>
      <section className="App-hero">
        <div className="App-hero-gradient"></div>
        <div className="container">
          <div className="App-hero-wrapper">
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
        </div>
      </section>
      <section className="App-history">
        <div className="App-banner" style={{ color: "#000" }}>
          <h1>History</h1>
        </div>
        <div className="container">
          <div className="App-history-cont flex-col md:flex-row">
            <div className="App-history-text">
              <p>Vinicius is the mix of all Brazilian fauna and has the amazing power to stretch himself to Olympic proportions. Tom is the mix of Brazilian fauna and can produce any object from inside his leafy hairdo. Their mission is to spread the Olympic and Paralympic values while breaking all the records of fun.</p>
              <p>For the Rio2016 Mascots, sports are all about having a great time and they will find a way to transform everything into a sport competition, from cooking dinner to dancing samba.</p>
              <p>Funny By Nature was the #1 most watched show on Cartoon Network Brazil in 2016 and helped make Vinicius and Tom the greatest record breakers of the Olympic and Paralympic Games, generating triple the licensing revenues of London 2012 and double of Beijing 2008.</p>
              <p>Created and Produced by Birdo for Cartoon Network.</p>
            </div>
            <div className="App-history-images">
              <img src="https://images.squarespace-cdn.com/content/v1/5aff0e0d3917ee5513af5749/1527541396066-VG60OLSVQP2LJHD6JTWN/vinicius.png?format=1500w" />
              <img src="https://images.squarespace-cdn.com/content/v1/5aff0e0d3917ee5513af5749/1527541608247-Q8AV9B52YQWWBVOKW88N/1_mata_olimpico.jpg?format=750w" />
              <img src="https://images.squarespace-cdn.com/content/v1/5aff0e0d3917ee5513af5749/1527624473756-SIFT7JJWME1H4CPBFFZ9/divertidos_rio.jpg?format=1500w" />
              <img src="https://images.squarespace-cdn.com/content/v1/5aff0e0d3917ee5513af5749/1527624747955-PFKT05Y3R7S38NBOCEUH/divertidos_canoagem2.jpg?format=1500w" />
              <img src="https://images.squarespace-cdn.com/content/v1/5aff0e0d3917ee5513af5749/1527625536462-ZCCD8H0OY4GPTRPULYJN/bg_banner_03.png?format=2500w" />
              <img src="https://images.squarespace-cdn.com/content/v1/5aff0e0d3917ee5513af5749/1527715751920-QJIGH75Z1W3KSSWOARYV/musica.png?format=750w" />
            </div>
          </div>
        </div>
      </section>
      <section className="App-designs">
        <div className="App-banner" style={{ backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/5aff0e0d3917ee5513af5749/1527625536448-A1QZSQ4JYRX5MCKW6IYJ/bg_banner_02.png?format=2500w')" }}>
          <h1>Designs</h1>
        </div>
        <div className="container">
          <div className="App-designs-cont">
            <div className="App-designs-images">
              <img src="https://images.squarespace-cdn.com/content/v1/5aff0e0d3917ee5513af5749/1527602148831-4Y06CL4H8PIK7M0F2ELI/esportes_vinicius_01.jpg?format=1500w" />
              <img src="https://images.squarespace-cdn.com/content/v1/5aff0e0d3917ee5513af5749/1527602149445-PNWRM1WDWQ4ZHT7YGC99/esportes_vinicius_02.jpg?format=1500w" />
              <img src="https://images.squarespace-cdn.com/content/v1/5aff0e0d3917ee5513af5749/1527602150751-QI3RB3V7F9IDPX5BZYZP/esportes_vinicius_03.jpg?format=1500w" />
              <img src="https://images.squarespace-cdn.com/content/v1/5aff0e0d3917ee5513af5749/1527602146748-3ZDBTTYB3IIMD5NJIM20/esportes_tom_01.jpg?format=1500w" />
              <img src="https://images.squarespace-cdn.com/content/v1/5aff0e0d3917ee5513af5749/1527602147429-J2PWLOQJALLJ589HSIN4/esportes_tom_02.jpg?format=1500w" />
            </div>
          </div>
        </div>
      </section>
      <section className="App-storybook">
        <div className="App-banner" style={{ backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/5aff0e0d3917ee5513af5749/1527626662933-Z9HF88CDW5341W641TIE/ginasio_05.png?format=2500w')" }}>
          <h1>Storybook</h1>
        </div>
        <div className="container">
          <div className="App-designs-cont">
            <div className="">
              <Carousel>
                <CarouselContent>
                  <CarouselItem><img src="https://images.squarespace-cdn.com/content/v1/5aff0e0d3917ee5513af5749/1527712085866-PBNEFV78SHZ2MSZB1WEV/Mascotes+EP+06+Na+cozinha+Storyboard_0007.png?format=1500w" /></CarouselItem>
                  <CarouselItem><img src="https://images.squarespace-cdn.com/content/v1/5aff0e0d3917ee5513af5749/1527712085864-CMQEHSPTGI3AL4USBV9O/Mascotes+EP+06+Na+cozinha+Storyboard_0008.png?format=1500w"/></CarouselItem>
                  <CarouselItem><img src="https://images.squarespace-cdn.com/content/v1/5aff0e0d3917ee5513af5749/1527712090597-NOOKOZ0FFNR9U0UAOUO1/Mascotes+EP+06+Na+cozinha+Storyboard_0009.png?format=1500w" /></CarouselItem>
                  <CarouselItem><img src="https://images.squarespace-cdn.com/content/v1/5aff0e0d3917ee5513af5749/1527712090054-46O7ONWCT08INSZMQHBN/Mascotes+EP+06+Na+cozinha+Storyboard_0010.png?format=1500w" /></CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
