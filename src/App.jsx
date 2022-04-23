
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div>
      <NavBar></NavBar>
      <ItemListContainer greeting='BIENVENIDOS, EL SITIO ESTÁ EN CONSTRUCCIÓN'></ItemListContainer>     
    </div>
  );
}

export default App;
