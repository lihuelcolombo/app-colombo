import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from '../components/ItemDetailContainer'
import ItemListContainer from '../components/ItemListContainer'
import NavBar from '../components/NavBar'


import NotFound404 from '../pages/NotFound404'

const AppRouter = () => {
  return (
    
      


        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="*" element={<NotFound404/>}/>
          </Routes>
        </BrowserRouter>          


      
  )
}

export default AppRouter