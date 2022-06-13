import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { TailSpin } from  'react-loader-spinner'
import { getItemByID } from '../firebase'


const ItemDetailContainer = () => {
  
  const {id} = useParams()
  const [item, setItem] = useState( {} )
  const [loading, setLoading] = useState( true )

  useEffect( () => {
    (async () => {
      const itemData = await getItemByID(id)      
      setItem(itemData)
      setLoading ( false )
    })()
    }, [id])
  

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
