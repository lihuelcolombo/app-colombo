import { getDocs, getFirestore } from 'firebase/firestore'
import { collection } from 'firebase/firestore/lite'
import React, { useState } from 'react'
import { useEffect } from 'react'

const Products = () => {


  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
  }, [])
  
  
  const getProducts = () => {
    const db = getFirestore()
    const productsCollecion = collection(db, 'items')
    getDocs( productsCollecion ).then(snapshot => {
      if (snapshot.size > 0) {
        const ids = snapshot.docs.map( d => d.id ).join(',')
        console.log('IDs: ', ids);

        const productsData = snapshot.docs.map( d => ({'id': d.id, ... d.data()}) )
        console.log(productsData);
        setProducts(productsData)
      }
    })
}



  return (
    <div>
      <h1>Data From Firebase</h1>
      <h2>Products</h2>
      {products.map( p => 
        <>
        <div>{p.id}</div>
        <div>{p.brand}</div>
        <div>{p.model}</div>        
        </>
        )}
    </div>
  )
}

export default Products