import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, getDocs, getDoc, setDoc, doc, addDoc} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyAaEgSxvyTPHslrBd2KVf710jxX25kWKwU",
  authDomain: "handball-gear.firebaseapp.com",
  projectId: "handball-gear",
  storageBucket: "handball-gear.appspot.com",
  messagingSenderId: "542667363261",
  appId: "1:542667363261:web:2a3b0cf330cfb36b0ff8d4"
  };
  
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const PRODUCTS = [
  { 'id': 1, 
  'category': 'calzado',
  'brand': 'Adidas', 
  'model': 'Zapatillas Stabil X',    
  'gen': 'Unisex',    
  'price': 15000,
  'stock': 4,
  'img': 'https://www.tradeinn.com/f/13721/137210592/adidas-stabil-x.jpg',
  'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum odio neque, volutpat nec suscipit non, elementum a ligula. Nulla posuere, felis vitae iaculis tincidunt, quam est cursus ex, ut iaculis augue risus non elit. Phasellus eu augue risus. Fusce non urna dignissim, dapibus ipsum sed, sollicitudin justo. Donec vel venenatis.'
},

{ 'id': 2, 
  'category': 'calzado',
  'brand': 'Hummel', 
  'model': 'Zapatillas Root Elite', 
  'gen': 'Mujer',       
  'price': 18600,
  'stock': 5,
  'img': 'https://www.tradeinn.com/f/13872/138729074/hummel-zapatillas-balonmano-root-elite.jpg',
  'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum odio neque, volutpat nec suscipit non, elementum a ligula. Nulla posuere, felis vitae iaculis tincidunt, quam est cursus ex, ut iaculis augue risus non elit. Phasellus eu augue risus. Fusce non urna dignissim, dapibus ipsum sed, sollicitudin justo. Donec vel venenatis.'
},

{ 'id': 3, 
  'category': 'calzado',
  'brand': 'Asics', 
  'model': 'Zapatillas Sky Elite FF Tokyo',    
  'gen': 'Hombre',    
  'price': 17000,
  'stock': 2,
  'img': 'https://cdn.sportshop.com/catalog/product/580/580/a/s/asics-1051a055-701.jpg',
  'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum odio neque, volutpat nec suscipit non, elementum a ligula. Nulla posuere, felis vitae iaculis tincidunt, quam est cursus ex, ut iaculis augue risus non elit. Phasellus eu augue risus. Fusce non urna dignissim, dapibus ipsum sed, sollicitudin justo. Donec vel venenatis.'
},

{ 'id': 4, 
  'category': 'calzado',
  'brand': 'Salming', 
  'model': 'Zapatillas Kobra Mid',
  'gen': 'Hombre',        
  'price': 16500,
  'stock': 8,
  'img': 'https://www.zapatillasdeporte.net/wp-content/uploads/2020/10/137184925.jpg',
  'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum odio neque, volutpat nec suscipit non, elementum a ligula. Nulla posuere, felis vitae iaculis tincidunt, quam est cursus ex, ut iaculis augue risus non elit. Phasellus eu augue risus. Fusce non urna dignissim, dapibus ipsum sed, sollicitudin justo. Donec vel venenatis.'
},

{ 'id': 5, 
  'category': 'calzado',
  'brand': 'Mizuno', 
  'model': 'Zapatillas Wave Luminous 2',  
  'gen': 'Mujer',     
  'price': 14500,
  'stock': 2,
  'img': 'https://media.handball-store.es/catalog/product/cache/small_image/318x/9df78eab33525d08d6e5fb8d27136e95/v/1/v1ga212024_0.jpg',
  'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum odio neque, volutpat nec suscipit non, elementum a ligula. Nulla posuere, felis vitae iaculis tincidunt, quam est cursus ex, ut iaculis augue risus non elit. Phasellus eu augue risus. Fusce non urna dignissim, dapibus ipsum sed, sollicitudin justo. Donec vel venenatis.'
},

{ 'id': 6, 
  'category': 'calzado',
  'brand': 'Kempa', 
  'model': 'Zapatillas Wing 2.0',   
  'gen': 'Unisex',    
  'price': 14900,
  'stock': 4,
  'img': 'https://cdn.sportshop.com/catalog/product/580/580/k/e/kempa-2008540-05.jpg',
  'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum odio neque, volutpat nec suscipit non, elementum a ligula. Nulla posuere, felis vitae iaculis tincidunt, quam est cursus ex, ut iaculis augue risus non elit. Phasellus eu augue risus. Fusce non urna dignissim, dapibus ipsum sed, sollicitudin justo. Donec vel venenatis.'
},

{ 'id': 7, 
  'category': 'indumentaria',
  'brand': 'Hummel', 
  'model': 'Short Hmlcore XK',   
  'gen': 'Hombre',    
  'price': 8000,
  'stock': 7,
  'img': 'https://www.tradeinn.com/f/13870/138701574_2/hummel-pantalones-cortos-hmlcore-xk.jpg',
  'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum odio neque, volutpat nec suscipit non, elementum a ligula. Nulla posuere, felis vitae iaculis tincidunt, quam est cursus ex, ut iaculis augue risus non elit. Phasellus eu augue risus. Fusce non urna dignissim, dapibus ipsum sed, sollicitudin justo. Donec vel venenatis.'
},

{ 'id': 8, 
  'category': 'indumentaria',
  'brand': 'Hummel', 
  'model': 'Camiseta Manga Corta Core Poly',   
  'gen': 'Hombre',    
  'price': 10000,
  'stock': 9,
  'img': 'https://www.tradeinn.com/f/13780/137807545/hummel-camiseta-manga-corta-core-poly.jpg',
  'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum odio neque, volutpat nec suscipit non, elementum a ligula. Nulla posuere, felis vitae iaculis tincidunt, quam est cursus ex, ut iaculis augue risus non elit. Phasellus eu augue risus. Fusce non urna dignissim, dapibus ipsum sed, sollicitudin justo. Donec vel venenatis.'
},

{ 'id': 9, 
  'category': 'accesorios',
  'brand': 'Hummel', 
  'model': 'Medias Elite Indoor High',   
  'gen': 'Unisex',    
  'price': 3000,
  'stock': 6,
  'img': 'https://zapatillasindoor.com/11237-large_default/calcetines-largos-hummel-elite-indoor-sock-high-.jpg',
  'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum odio neque, volutpat nec suscipit non, elementum a ligula. Nulla posuere, felis vitae iaculis tincidunt, quam est cursus ex, ut iaculis augue risus non elit. Phasellus eu augue risus. Fusce non urna dignissim, dapibus ipsum sed, sollicitudin justo. Donec vel venenatis.'
}
];

  async function dataToFirebase() {
    PRODUCTS.forEach((item) => {     
        
        const miColeccion = (collection(db, "items"));
        const newDoc = doc (miColeccion)

        setDoc(newDoc, item).then(() => {
          console.log("Document written with ID: ", newDoc.id)})
        .catch(err => {
            console.error("Error adding document: ", err);
        });
    });
}

export default dataToFirebase;