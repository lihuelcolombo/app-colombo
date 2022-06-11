import React, { useEffect } from 'react'
import {doc, getDoc, getFirestore} from "firebase/firestore"
import dataToFirebase from '../data/dataToFirebase'
import DataFromFirabase from '../data/DataFromFirabase'



const Firestore = () => {

  useEffect(() => {
  
  getProductos()  
}, [])

const getProductos = () => {
  const db = getFirestore()
  const productosDoc = doc(db, 'prueba', 'JTvEfjVhsu3FQn6BF5dw')  
  getDoc( productosDoc ).then( result => {
    if (result.exists()){
      console.log(result);
      console.log('id', result.id);
      console.log('data', result.data());
      // console.log('precio', result.precio);
      // console.log('marca', result.marca;
    }
  } )
}

  return (
    <div>
      <h1>Firestore</h1>
      <button className='btn' onClick={dataToFirebase}>Data to Firebase</button>
      <DataFromFirabase/>
    </div>
  )
}

export default Firestore