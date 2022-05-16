import React from 'react'
import { Link } from 'react-router-dom'


const Item = ( {data} ) => {
  return (
    <div>      
      <div class="m-20 card card-compact bg-base-100 shadow-xl">        
        <figure><img className="main-pic" src={data.img} alt="prods" /></figure>        
        <div class="card-body">
          <h2 class="card-title">{data.brand}</h2>          
          <h1 class="text-4xl card-title model-title">{data.model}</h1>          
          <h2 class="text-2xl card-title">${data.price}</h2>          
          <div class="card-actions justify-end">
            <Link to={`/item/${data.id}`}> 
                <button class="btn btn-primary">DETALLES</button>
            </Link>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default Item