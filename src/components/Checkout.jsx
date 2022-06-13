import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'
import { addOrder } from '../firebase/index'

const Checkout = () => {
  
  const { cart,        
    clearCart,    
    quantityInCart,
    totalCart } = useCartContext()

  const [orderId , setOrderId] = useState("")
  const [showModal, setShowModal] = useState(false)
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
      price: totalCart(),      
      items: cart
    }    
    addOrder(order).then(data => {
        setOrderId(data)
    })
    console.log(order);
  }


  
  return (   
    <>    
      {/* Checkout card    */}
      <div className='card-spacing card lg:card bg-base-100 shadow-xl'>      
        <div className='grid'>
          <div>
            <h1 className='text-3xl ml-10 mb-4'>Checkout</h1>            
            <hr />        
            <h2 className='text-l ml-10 mb-4 mt-4'>Total de productos: {quantityInCart()} </h2>
            <h2 className='text-l ml-10 mb-4'>Total de la orden: ${totalCart()}</h2>
            <hr />
          </div>
          <div>
            <h2 className='text-2xl ml-10 mt-4'>Completar todos los campos</h2>
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
          </div>
          <div className='grid pl-10 pr-10'>            
            <input 
              onClick={()=> {orderHandler(); setShowModal(true)}}
              type="submit" 
              value='Finalizar compra' 
              className='btn btn-success'/>  
            </div>
        </div>
      </div>
    
        {/* Modal */}      
        <div className={`${showModal ? "flex" : "hidden"} inset-0 fixed w-full h-full bg-gray-800`}>
                <div className="container mx-auto justify-center items-center px-4 md:px-10 py-20 place-self-center">
                    <div className="bg-white px-3 md:px-4 py-12 flex flex-col justify-center items-center">
                        <h3 className="font-bold text-lg">Gracias por tu compra {buyer.name}!</h3>
                        <p className="py-2">Tu pedido ha sido correctamente registrado con el siguiente código: <strong>{(orderId).toUpperCase()}</strong></p>
                        <p className="py-2">Recibirás tu factura y los detalles de tu orden a la dirección de email que nos proporcionaste: <strong>{(buyer.email).toLowerCase()}</strong> </p>
                        <Link to="/" className="mt-6 flex justify-center">
                            <button onClick={clearCart} className={" focus:outline-none text-white bg-gray-700 focus:ring-transparent w-40 text-center py-3 cursor-pointer"}>
                                De acuerdo!
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
  </>
  )
}

export default Checkout