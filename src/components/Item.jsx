import React from 'react'
import { Link } from 'react-router-dom'


const Item = ( {data} ) => {
  return (
    <div>      
      <div className="m-20 card card-compact bg-base-100 shadow-xl">        
        <figure><img className="main-pic" src={data.img} alt="prods" /></figure>        
        <div className="card-body">
          <h2 className="card-title">{data.brand}</h2>          
          <h1 className="text-4xl card-title model-title">{data.model}</h1>          
          <h2 className="text-2xl card-title">${data.price}</h2>          
          <div className="card-actions justify-end">
            <Link to={`/item/${data.id}`}> 
                <button className="btn btn-primary">DETALLES</button>
            </Link>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default Item