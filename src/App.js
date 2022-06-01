import React from "react"
import './App.css';
import Navbar from "./component/Navbar.js"
import Hero from "./component/Hero.js"
import Card from "./component/Card.js"
import Data from "./component/Data.js" 
  

export default function App() {

  const cards = Data.map(item => {
    return (
      <Card
          key={item.id}
          item={item}
        />
    )
  })

  return(
    <div className="outline">
      <Navbar />
      <Hero />
      <section className="cardlist">
      {cards}
      </section>
    </div>

  )
}