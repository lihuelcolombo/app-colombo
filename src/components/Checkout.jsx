import { getFirestore } from 'firebase/firestore'
import React, { useState } from 'react'
import { useCartContext } from '../context/CartContext'
import { addOrder } from '../firebase'

const Checkout = () => {
  
  const { cart,
    addToCart,
    deleteFromCart,
    clearCart,
    setCart,
    quantityInCart,
    totalCart } = useCartContext

  const [orderId , setOrderId] = useState("")
  const [buyer, setBuyer] = useState({
      name:"",
      surname:"",
      phone:"",
      email:"",
  })

  const buyerDataHandler = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value})
  }


  function orderHandler () {
    const order = {
      buyer,
      item: cart,
      price: totalCart()
    }
    addOrder(order).then(data => {
        setOrderId(data)
    })
  }


  
  return (
    <div>
      <h1>Checkout</h1>
    </div>
  )
}

export default Checkout