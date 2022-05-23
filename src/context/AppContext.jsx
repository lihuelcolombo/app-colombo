import React, { createContext, useContext, useState } from 'react'
// import { getItems } from '../data/ItemList'


const AppContext = createContext()

export const useAppContext = () => useContext (AppContext)

const AppContextProvider = ({ children }) => {
  
  const [items, setItems] = useState ([])

  // useEffect(() => {
    
  //   getItems().then((resp) => setItems(resp))
  // })
  return (
    <AppContextProvider value={{ items }}>{children}</AppContextProvider>
  )
}

export default AppContextProvider