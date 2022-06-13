import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { TailSpin } from  'react-loader-spinner'
//firebase
import { getProducts, getProductsByCategory  } from '../firebase';
const ItemListContainer = () => {
    
  const [category, setCategory] = useState([])
  const { categoryId } = useParams()
  const [loading, setLoading] = useState( true )

  useEffect(() => {
    categoryId
      ? getProductsByCategory(categoryId).then((resp) => setCategory(resp)).then(setLoading(false))
      : getProducts().then((resp) => setCategory(resp)).then(setLoading(false));
  }, [categoryId]);


  return (
    
      <div>
          {loading ?
        <TailSpin
        height="400"
        width="400"
        color='grey'
        ariaLabel='loading'          
        />
        :
        <ItemList category={category}/>
        }
      </div>    
    
  )
}

export default ItemListContainer