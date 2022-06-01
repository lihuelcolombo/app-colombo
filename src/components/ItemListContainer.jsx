import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getItems } from '../data/ItemList';
import ItemList from './ItemList';

const ItemListContainer = () => {
    
  const [category, setCategory] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {
    if (categoryId === undefined){
      getItems().then((resp) => setCategory (resp))
    } else {
      getItems().then((resp) => 
        setCategory(resp.filter((product) => product.category === categoryId ))
      )
    }
  }, [categoryId])

  //este useEffect funciona sin categorias
  // useEffect(() => {
  //   getItems().then( data => {
  //     setItems ( data )
  //     console.log(data);
  //   })
    
  // }, [])

  
  // esta promise fue movida hacia el ItemList.jsx
  // const getItems = () => { 
  //   return new Promise ( (resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(itemList)        
  //     }, 2000);
  //   })
  // }


  return (
    
      <div>
          <ItemList category={category}/>
      </div>    
    
  )
}

export default ItemListContainer