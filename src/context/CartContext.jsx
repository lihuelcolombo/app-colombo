import { createContext, useState } from "react";


export const CartContext = createContext ({
  cart: [],
  addToCart: () => {}
})

const CartContextProvider = ({children}) => {

  const [cart, setCart] = useState([])

  const addToCart = (productId) => { 
    setCart( currentCart => {
      return currentCart.concat( productId )
    })  
  }

  const context = {
    cart, 
    addToCart
  }

  return (
    <CartContext.Provider value = { context }>
      {children}
    </CartContext.Provider>
  )  
}

export default CartContextProvider