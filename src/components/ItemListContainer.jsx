import { list } from 'postcss';
import React, { useEffect, useState } from 'react'
import { itemList } from '../data/ItemList';
import Item from './Item'

const ItemListContainer = () => {
  
  const [items, setItems] = useState([])

  useEffect(() => {
    getItems().then( data => {
      setItems ( data )
      console.log(data);
    })
    
  }, [])
  
  const getItems = () => { 
    return new Promise ( (resolve, reject) => {
      setTimeout(() => {
        resolve(itemList)        
      }, 2000);
    })
  }

  return (
    <div className='grid grid-cols-3 content-evenly'>
        {items.map( i => <Item key={i.id} data={i}/>)}
    </div>
  )
}

export default ItemListContainer