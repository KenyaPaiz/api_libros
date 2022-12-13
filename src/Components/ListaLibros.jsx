import React, { Component } from "react";
import Libro from './Libro.jsx';

export default class ListaLibros extends Component{
    constructor(props){
        super(props);

        /** inicializamos el estado */
        this.state = {
            libros: []
        }
    }

    /** metodo para conectarnos a la apiLibros y actualizamos el estado */
    obtenerLibros = async () => {
        //con el metodo fetch obtenemos la url de la api y hacemos una espera para la peticion
        let apiLibros = await fetch("https://legacy--api.herokuapp.com/api/v1/books");
        let datos = await apiLibros.json();
        console.log(datos);

        /** setState => actualizamos y retornamos el estado */
        this.setState({
            /** actualizamos el estado con los datos de los libros */
            libros: [...datos]
        })
    }

    /** ciclos de vida */

    //montamos y renderizamos el estado o metodos
    componentDidMount(){
        this.obtenerLibros();

    }

    render(){
        console.log(this.state);
        return (
            <div className="row">
            {
                this.state.libros.map((libro, indice) => {
                    return <Libro key={indice} {...libro} />
                })
            }
            </div>
        )
    }
}