import { list } from 'postcss';
import React, { useEffect, useState } from 'react'
import { itemList } from '../data/ItemList';
import ItemList from './ItemList';

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
  <div>
      <ItemList items={items}/>
  </div>
  )
}

export default ItemListContainer