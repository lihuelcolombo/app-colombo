import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
  getDoc,
  doc
} from 'firebase/firestore';

const getProducts = async () => {
  const db = getFirestore();
  const itemCollection = collection(db, 'items');
  const documents = await getDocs(itemCollection);
  
  const products = documents.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return products;
};

const getItemByID = async (id) => {
  const docRef = doc(getFirestore(), 'items', id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return {...docSnap.data(), id: docSnap.id };
  } else {
    // doc.data() will be undefined in this case
    console.log('No such document!');
  }
};

const getProductsByCategory = async (category) => {
  const db = getFirestore();
  const q = query(
    collection(db, 'items'),
    where('category', '==', category)
  );
  const documents = await getDocs(q);
  const products = documents.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return products;
};


export {
  getProducts,
  getItemByID,
  getProductsByCategory,
};

