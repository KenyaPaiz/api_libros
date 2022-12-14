import React, {Component} from "react";
import Pokemon from './Pokemon.jsx';

export default class ListaPokemones extends Component{
    /** pasamos los datos por medio de props */
    constructor(props){
        super(props)

        /** declaramos el estado para la informacion de todos los pokemones*/
        this.state = {
            pokemones: []
        }
    }

    /** metodo que me accede a los pokemones de la api */
    obtenerPokemones = async () => {
        let urlPokemones = await fetch("https://pokeapi.co/api/v2/pokemon");
        let datos = await urlPokemones.json();

        //console.log(datos.results);

        /** actualizando el estado con la informacion de los pokemones */
        this.setState({
            pokemones: [...datos.results]
        })
    }

    /** ciclo de vida, para montar el metodo obtenerPokemones() */
    componentDidMount(){
        this.obtenerPokemones();
    }

    /** renderizando el componente */
    render(){
        return (
            <div className="row">
                {
                    this.state.pokemones.map((pokemon, indice) => {
                        return <Pokemon key={indice} {...pokemon} />
                    })
                }
            </div>
            
        )
    }
}

