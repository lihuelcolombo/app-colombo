import React from 'react'


const ItemCard = ({data}) => {
  return (
    <div>      
      <div class="m-20 card card-compact bg-base-100 shadow-xl">        
        <figure><img src={data.img} alt="Shoes" /></figure>        
        <div class="card-body">
          <h2 class="card-title">{data.cat} {data.brand} {data.model}</h2>          
          <div class="card-actions justify-end">
            <button class="btn btn-primary">${data.price}</button>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default ItemCard