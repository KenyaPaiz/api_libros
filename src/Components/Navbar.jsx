import React, { Component } from "react";

/** creando un componente de clase */
export default class Navbar extends Component{

    //props => la manera de como podemos enviar datos de un componente a otro
    constructor(props){
        super(props)
    }

    /** metodo render() => renderizamos el componente para poderlo retornar con otro 
     * componente
     */

    /**
     * mandamos la propiedad autor mediantes las props para utilizar en el componente App.js
     */
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">s.autor
                    <a className="navbar-brand" href="#">Biblioteca de Harry Potter - {this.props.autor}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        )
    }
}