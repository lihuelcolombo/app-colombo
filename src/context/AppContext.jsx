import React, { createContext, useContext, useEffect, useState } from 'react'
import { getItems } from '../data/ItemList'


const AppContext = createContext()

export const useAppContext = () => useContext (AppContext)

const AppContextProvider = ({ children }) => {
  
  const [items, setItems] = useState ([])

  useEffect(() => {
    
    getItems().then((resp) => setItems(resp))
  })
  return (
    <AppContext.Provider value={{ items }}>{children}</AppContext.Provider>
  )
}

export default AppContextProvider