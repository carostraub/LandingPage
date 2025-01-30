import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import Cards from './components/Cards'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      {/* {navbar} */}
      <Navbar
      navbar="Mis Favs"
      item1="BTS"
      item2="Skz"
      item3="TOP"
      item4="DaftPunk"

      />

      {/* jumbotron */}
      <Jumbotron
        title="Conociendo mis bandas favs"
        descripcion="Profe, acá sabra un poco más mis cuatro bandas favoritas, BTS, Stray Kids, Twenty One Pilots, y Daft Punk. Si nos hubieran exigido 5 card hubiera incluido a TxT(TomorrowxTogether)."
        boton="Saber mas"

      />
     
      {/* Cards */}
      <Cards />
      {/* footer */}
      <Footer />

    </>
  )
}

export default App
