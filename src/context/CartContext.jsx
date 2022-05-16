import React, { createContext, useContext } from 'react'

const CartContext = createContext ()

const useCartContext = () => useContext (CartContext)

const CartContextProvider = ( { children } ) => {
  
  const [cart, setCart] = useState([])

  const inInCart = (id) => cart.find(prod => prod.id === id)

  const addToCart = (producto, cantidad) => {

    const newCart = [...cart]
  }

  const productoEnCart = isInCart(producto.id)

  if (productoEnCart) {
    newCart[newCart.findIndex (prod => prod.id === productoEnCart.id)]
  }

  return <CartContext.Provider value= {{}}> { children } </CartContext.Provider>
  
}

export default CartContextProvider