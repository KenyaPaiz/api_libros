import './App.css';
import './estilos.css';
import Titulo from './Titulo.jsx';
import Navbar from './Components/Navbar.jsx';
import ListaLibros from './Components/ListaLibros.jsx';
import ListaPokemones from './Components/ListaPokemones.jsx';

function App() {
  return (
    <div>
      <Navbar autor="Kenia Paiz" />      
      <Titulo /> 
      <div className='container'>
        <ListaPokemones />
      </div>
    </div>
  );
}

export default App;
