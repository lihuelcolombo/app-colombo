import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
//firebase
import { getProducts, getProductsByCategory  } from '../firebase';
const ItemListContainer = () => {
    
  const [category, setCategory] = useState([])
  const { categoryId } = useParams()


  useEffect(() => {
    categoryId
      ? getProductsByCategory(categoryId).then((resp) => setCategory(resp))
      : getProducts().then((resp) => setCategory(resp));
  }, [categoryId]);


  return (
    
      <div>
          <ItemList category={category}/>
      </div>    
    
  )
}

export default ItemListContainer