import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext ()
export const useCartContext = () => useContext (CartContext)

const CartContextProvider = ( {children} ) => {
  const [cart, setCart] = useState ([])

  //////////////////////////////////////////////////////////////////////////
  const isInCart = (id) => cart.find(prod => prod.id === id)
  
  //////////////////////////////////////////////////////////////////////////
  const addToCart = (producto, cantidad) => {
    const newCart = [ ...cart]
    const productIsInCart = isInCart(producto.id)

    if (productIsInCart) {
      newCart[newCart.findIndex((prod) => prod.id === productIsInCart.id)].quantity += cantidad
      setCart(newCart)
      return
    }
    producto.quantity = cantidad
    setCart([ ...newCart, producto])
  }
  //////////////////////////////////////////////////////////////////////////
  const deleteFromCart = (id) => {
    const itemRemoved = cart.filter((item) => item.id !== id)
    setCart(itemRemoved)
  }   

  //////////////////////////////////////////////////////////////////////////
  const clearCart = () => setCart ([])
  console.log(cart);

  //////////////////////////////////////////////////////////////////////////
  const totalCart = () => {
      let total = 0
      cart.forEach((element) => {
      total = total + (element.price * element.quantity)
      })
    return total;
  }

  //////////////////////////////////////////////////////////////////////////
    const quantityInCart = () => {
      let total = 0
      cart.forEach((element) => {
      total = total + element.quantity
      })
    return total;
  }

  return <CartContext.Provider value={ {
    cart,
    addToCart,
    deleteFromCart,
    clearCart,
    setCart,
    quantityInCart,
    totalCart
    }}
  >
    {children} </CartContext.Provider>
}

export default CartContextProvider

