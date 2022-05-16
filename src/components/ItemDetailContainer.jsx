import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { itemList } from '../data/ItemList'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {
  
  const {id} = useParams()
  const [item, setItem] = useState( {} )


  useEffect( () => {


    (async () => {
      const itemData = await getItemDetail()
      setItem(itemData)
    })()

    }, [id])
  
  const getItemDetail = () => {
    return new Promise( (resolve) => {
      setTimeout( () => {
        resolve(itemList.find( i => i.id == id) )
      }, 2000);
    } )
  }

  return (
    
    <div>
      <ItemDetail item={item}/>
    </div>
  )
}

export default ItemDetailContainer