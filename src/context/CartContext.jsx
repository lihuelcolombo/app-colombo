// import React, { createContext, useContext, useState } from 'react'

// const CartContext = createContext()

// export const useCartContext = () => useContext (CartContext)

// const CartContextProvider = ({ children }) => {

//   const [cart, setCart] = useState([])

//   const isInCart = (id) => cart.find((item) => item.id === id)

//   const addToCart = (item, cantidad) => {
//     const newCart = [...cart]

//     const itemIsInCart = isInCart(item.id)

//     if (itemIsInCart) {
//       newCart [
//         newCart.findIndex ((prod) => prod.id === itemIsInCart.id)
//       ].quantity += cantidad

//       setCart (newCart)
//       return
//     }

//     item.quantity = cantidad
//     setCart([...newCart, item])
//   }

//   const deleteFromCart = (item) => {
//     const newCart = [...cart]

//     const itemIsInCart = isInCart(item.id)

//     if (!itemIsInCart){
//       return
//     }

//     const deleteItem = newCart.filter((prod) => prod.id !== item.id)

//     setCart (deleteItem)
//   }

//   const deleteCart = () => setCart ([])

//   return (
//     <CartContextProvider 
//     value= {{
//       cart,
//       addToCart,
//       deleteFromCart,
//       deleteCart,
//       setCart
//     }}
//     >
//       {children}
//     </CartContextProvider>
//   )

// }

// export default CartContextProvider



