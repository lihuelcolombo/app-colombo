import React from 'react'
import { Link } from 'react-router-dom'


const ItemCard = ({data}) => {
  return (
    <div>      
      <div class="m-20 card card-compact bg-base-100 shadow-xl">        
        <figure><img className="main-pic" src={data.img} alt="Shoes" /></figure>        
        <div class="card-body">
          <h2 class="card-title">{data.cat} {data.brand} {data.model}</h2>          
          <h2 class="card-title">${data.price}</h2>          
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

export default ItemCard