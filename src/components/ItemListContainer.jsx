import { list } from 'postcss';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CartContextProvider from '../context/cartContext';
import { itemList } from '../data/ItemList';
import ItemList from './ItemList';

const ItemListContainer = () => {
  
  const { categoryid } = useParams ()
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
    <CartContextProvider>
      <div>
          <ItemList items={items}/>
      </div>
    </CartContextProvider>  
  )
}

export default ItemListContainer