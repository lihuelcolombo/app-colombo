import React from 'react'
import { useCartContext } from '../context/CartContext'


const CartView = () => {
  const { cart, quantityInCart, totalCart, deleteFromCart, clearCart } = useCartContext();

  return (
    <div>
      <h1>Carrito de compras</h1>
      <hr />
      
      {cart.map (item => (
        <div key={item.id}>
          <br />
          <h2>{item.model}</h2>
          <p>Precio unitario: ${item.price}</p>
          <p>Unidades: {item.quantity}</p>
          <p>Subtotal: ${item.quantity * item.price}</p>
          <button onClick={() => deleteFromCart(item.id)}>Eliminar este producto</button>
          <br />    
        </div>
      ))}
      <hr />
      <h2>Productos agregados: {quantityInCart()}</h2>
      <h2>Monto total: ${totalCart()}</h2>
      <button onClick={()=>clearCart()} className="btn btn-secondary ml-2">Vaciar carrito</button>
      <button className="btn btn-primary ml-2">Finalizar compra</button>
    </div>
  )
}

export default CartView

