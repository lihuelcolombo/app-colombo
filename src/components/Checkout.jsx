import React, { useState } from 'react'
import { useCartContext } from '../context/CartContext'
import { addOrder } from '../firebase/index'

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
    console.log(order);
  }


  
  return (      
      <div className='grid'>
        <div>
          <h1 className='text-3xl ml-10 mb-4'>Checkout</h1>
          <hr />        
          <h2 className='text-l ml-10 mb-4'>Total de productos: </h2>
          <h2 className='text-l ml-10 mb-4'>Total de la orden: $</h2>
          <hr />
        </div>
        <form className='grid grid-cols-2 m-5'>
          <input
          id='name'
          name='name'
          type="text" 
          placeholder="Nombre" 
          className="input input-bordered w-full max-w-xs m-5" 
          onChange={buyerDataHandler}
          />
          <input 
          id='surname'
          name='surname'
          type="text" 
          placeholder="Apellido" 
          className="input input-bordered w-full max-w-xs m-5" 
          onChange={buyerDataHandler}
          />
          <input
          id='phone'
          name='phone'
          type="text" 
          placeholder="Teléfono" 
          className="input input-bordered w-full max-w-xs m-5" 
          onChange={buyerDataHandler}
          />
          <input 
          id='email'
          name='email'
          type="text" 
          placeholder="Email" 
          className="input input-bordered w-full max-w-xs m-5"
          onChange={buyerDataHandler}
          />          
        </form>
        <div className='grid p-10'>
          <input 
            onClick={()=> {orderHandler();}}
            type="submit" 
            value='Finalizar compra' 
            className='btn btn-success'/>     
          </div>
      </div>
      
    
  )
}

export default Checkout