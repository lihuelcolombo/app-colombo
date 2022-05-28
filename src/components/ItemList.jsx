import React from 'react'
import Item from './Item'


// const ItemList = ( {items} ) => {
//   return (
//     <div className='pt-10 grid grid-cols-3 content-evenly'>
//       {items.map( i => <Item key={i.id} data={i}/>)}
//     </div>
  
//   )
// }

const ItemList = ( {items} ) => {
  return (
    <div className='pt-10 grid grid-cols-3 content-evenly'>
      {items & items.map((producto) => (
        <Item key={producto.id} producto={producto}/>
      ))}
    </div>
  
  )
}

export default ItemList