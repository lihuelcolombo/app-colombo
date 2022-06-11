import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

const ItemDetail = ( {item} ) => {
  
  const [terminar, setTerminar] = useState(false)

  const onAdd = (count) => {
    setTerminar(true)
  }

  return (
    <div className="card-spacing card lg:card-side bg-base-100 shadow-xl">
      <figure><img src={item.img} alt="img"></img></figure>
      <div className="card-body">
      <h2 className="py-5 text-5xl card-title">{item.brand}</h2>        
        <h1 className="py-5 text-7xl card-title">{item.model}</h1>
        <h2 className="py-5 text-5xl card-title">${item.price}</h2>                
        <p className="py-5 text-2xl">{item.desc}</p>
        <div className="card-actions justify-end">
          {terminar ? (
              <>
              <button>
              <Link to="/"
                className="btn bg-primary text-white btn-block"                
              >
                Ver más productos
              </Link>
              </button>

              <button>
              <Link to="/cart"
                className="btn bg-primary text-white btn-block"                
              >
                Terminar Compra
              </Link>
              </button>
              </>
              
            ) : ( 
              <ItemCount stock={item.stock} onAdd={onAdd} id={item.id}/>          
            )}
        </div>
      </div>
    </div>
  )
}
export default ItemDetail