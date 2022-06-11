import React, { createContext, useContext, useEffect, useState } from 'react'


const AppContext = createContext()

export const useAppContext = () => useContext (AppContext)

const AppContextProvider = ({ children }) => {
  
  const [items, setItems] = useState ([])

  // useEffect(() => {
    
  //   getItems().then((resp) => setItems(resp))
  // })
  return (
    <AppContext.Provider value={{  }}>{children}</AppContext.Provider>
  )
}

export default AppContextProvider