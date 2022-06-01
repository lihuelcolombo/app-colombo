import React from 'react'
import Item from './Item'


const ItemList = ( {category} ) => {
  return (
    <div className='pt-10 grid grid-cols-3 content-evenly'>
      {category.map( i => <Item key={i.id} data={i}/>)}
    </div>
  
  )
}



export default ItemList