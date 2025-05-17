import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import OrderSummary from './components/OrderSummary'
import NoMatch from './components/NoMatch'
import Products from './components/Products'

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>} />
      <Route path="/order-summary" element={<OrderSummary/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="*" element ={<NoMatch/>}/>
    </Routes>
    </>
  )
}

export default App