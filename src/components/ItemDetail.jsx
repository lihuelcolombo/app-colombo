import React from 'react'

const ItemDetail = () => {
  return (
    <div className="item-detail card lg:card-side bg-base-100 shadow-xl">
      <figure><img src={item.img} alt="img"></img></figure>
      <div class="card-body">
        <h1 class="py-5 text-7xl card-title">{item.cat} {item.brand} {item.model}</h1>
        <h2 class="py-5 text-5xl card-title">${item.price}</h2>
                
        <p class="py-5 text-2xl">{item.desc}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Comprar</button>
        </div>
      </div>
    </div>
  )
}
export default ItemDetail