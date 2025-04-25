import React from 'react'
import '../src/app.css'
import Navbar from './components/navbar/navbar'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/cart/Cart'
import PlaceOrder from './pages/placeOrder/placeOrder'

const App = () => {
  return (
    <div className='App'>
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/PlaceOrder' element={<PlaceOrder/>}/>
      </Routes>
    </div>
    
  )
}

export default App
