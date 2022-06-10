import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppContextProvider from '../context/AppContext'
import Cart from '../components/CartView'
import CartContextProvider from '../context/CartContext'
import ItemDetailContainer from '../components/ItemDetailContainer'
import ItemListContainer from '../components/ItemListContainer'
import NavBar from '../components/NavBar'
import NotFound404 from '../pages/NotFound404'
import CartView from '../components/CartView'
import Firestore from '../components/Firestore'



const AppRouter = () => {
  return (
    
      
    <AppContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<CartView/>}/>
            <Route path="/firestore" element={<Firestore/>}/>
            <Route path="*" element={<NotFound404/>}/>
          </Routes>
        </BrowserRouter>          
      </CartContextProvider>
    </AppContextProvider>


      
  )
}

export default AppRouter