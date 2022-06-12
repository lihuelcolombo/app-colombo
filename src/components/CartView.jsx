import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext'


const CartView = () => {
  const { cart, quantityInCart, totalCart, deleteFromCart, clearCart } = useCartContext();

  return (
    <> 
    {quantityInCart() == 0 ? (    
      
        <div className="flex justify-center card-spacing card lg:card-side bg-base-100 shadow-xl">
            <div className='' >
              <h1 className='text-4xl m-2' >Tu carrito está vacío!</h1>                
              <p className='text-xl m-2' >Para agregar productos, podés volver al inicio:</p>
              <p className='text-2xl btn m-2'><Link to={'/'}>Volver al inicio</Link></p>
            </div>
        </div>
      

    ) : (

    <div className="card-spacing card lg:card-side bg-base-100 shadow-xl">
      <div>
        <h1 className='text-4xl'>Carrito de compras</h1>
        <hr />        
        {cart.map (item => (
          <div className='grid grid-cols-12 m-5 gap-4' key={item.id}>
            <div className='col-span-2'>
            <img src={item.img} alt="img"></img> 
            </div>   
            <div className='col-span-9'>
            <h2 className='text-2xl'><strong>{item.brand}</strong> {item.model}</h2>
            <p className='text-xl'>Precio unitario: ${item.price}</p>
            <p className='text-xl'>Unidades: {item.quantity}</p>
            <p className='text-xl'>Subtotal: ${item.quantity * item.price}</p>
            <button className='italic' onClick={() => deleteFromCart(item.id)}>Quitar del carrito</button>
            <br />
            </div>         
          </div>
        ))}
        <hr />
        <div className='center' >
        <h2 className='text-2xl'>Productos agregados: {quantityInCart()}</h2>
        <h2 className='text-3xl'>Monto total: ${totalCart()}</h2>
        <button onClick={()=>clearCart()} className="btn btn-error">Vaciar carrito</button>        
        <button className="btn btn-success ml-2"><Link to={'/checkout'}>Ir al pago</Link></button>
        </div>
      </div>
    </div>
    )    
  }
    </>
  )
}

export default CartView

