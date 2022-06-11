import React, { useEffect } from 'react'
import {doc, getDoc, getFirestore} from "firebase/firestore"
import dataToFirebase from '../data/dataToFirebase'
import DataFromFirebase from '../data/DataFromFirebase'



const Firestore = () => {

  useEffect(() => {
  
  getProducts()  
}, [])

const getProducts = () => {
  const db = getFirestore()
  const productosDoc = doc(db, 'prueba', 'JTvEfjVhsu3FQn6BF5dw')  
  getDoc( productosDoc ).then( result => {
    if (result.exists()){
      console.log(result);
      console.log('id', result.id);
      console.log('data', result.data());      
    }
  } )
}

  return (
    <div>
      <h1>Firestore</h1>
      <button className='btn' onClick={dataToFirebase}>Data to Firebase</button>
      <DataFromFirebase/>
    </div>
  )
}

export default Firestore