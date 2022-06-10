import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { itemList } from '../data/ItemList'
import ItemDetail from './ItemDetail'
import { TailSpin } from  'react-loader-spinner'


const ItemDetailContainer = () => {
  
  const {id} = useParams()
  const [item, setItem] = useState( {} )
  const [loading, setLoading] = useState( true )

  useEffect( () => {
    (async () => {
      const itemData = await getItemDetail()
      setItem(itemData)
      setLoading ( false )
    })()
    }, [id])
  
  const getItemDetail = () => {
    return new Promise( (resolve) => {
      setTimeout( () => {
        resolve(itemList.find( i => i.id == id) )
      }, 2000);
    })
  }

  return (
    
    <div>
      { loading ?      
      <TailSpin
          height="400"
          width="400"
          color='grey'
          ariaLabel='loading'          
        />
      :
      <ItemDetail item={item}/>
    }

    </div>
  )
}

export default ItemDetailContainer