import './App.css';
import './estilos.css';
import Titulo from './Titulo.jsx';
import Navbar from './Components/Navbar.jsx';
import ListaLibros from './Components/ListaLibros.jsx';

function App() {
  return (
    <div>
      <Navbar autor="Kenia Paiz"/>
      <Titulo /> 
      <div className='container'>
        <ListaLibros />
      </div>
    </div>
  );
}

export default App;
