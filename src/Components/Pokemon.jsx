import React, { Component } from "react";

export default class Pokemon extends Component{
    constructor(props){
        super(props)

        /** creando un estado para la informacion de cada pokemon */
        this.state = ({
            pokemon: []
        })
    }

    /** metodo para obtener informacion de cada pokemon en base a su url
     * https://pokeapi.co/api/v2/pokemon/1/
     */
    obtenerPokemonByUrl = async (url) => {
        let pokemonByUrl = await fetch(url);
        let datosPokemon = await pokemonByUrl.json();
        //console.log(datosPokemon);

        this.setState({
            pokemon: [datosPokemon]
        })
    }

    componentDidMount(){
        this.obtenerPokemonByUrl(this.props.url);
    }

    render(){
        console.log(this.state.pokemon)
        return (
            this.state.pokemon.map((personaje, indice) => {
                return (
                <div className="col-md-4">
                    <div className="card mt-4">
                    <div className="card-header">
                        {this.props.name}
                    </div>
                    <img src={personaje.sprites.front_default} alt="" width={200}/>
                    <div className="card-body">
                        <p>Id: {personaje.id}</p>
                        <p>Height: {personaje.height}</p>
                        <p>Weight: {personaje.weight}</p>
                        {/* accediendo a un objeto dentro de otro */}
                        <p>Species: {personaje.species.name}</p>
                        {
                            /** iterando la propiedad "moves" */
                            personaje.moves.map(elemento => {
                                //Iterando la propiedad moves con sus objetos, accediendo al nombre de la propiedad move.name
                                console.log(elemento.move.name);
                            })
                        }
                        {
                            personaje.abilities.map(propiedad => {
                                return <p>Ability: {propiedad.ability.name}</p>
                            })
                        }
                        <p>{this.props.url}</p>
                        <button className="btn btn-success">Ver mas</button>
                    </div>
                </div>
                </div>
                )
            })
            
        )
    }
}

/**
 * pokemon = {
 *      id: 2,
 *      nombre: "gdf",
 *      sprites: {
 *          jnjjk: "hjfeo"
 *      }
 * }
 * 
 * pokemon.sprites.jnjjk
 */