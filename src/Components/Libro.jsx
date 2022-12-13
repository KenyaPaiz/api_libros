import React, { Component } from "react";

export default class Libro extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className='col-md-3'>
                <div className="card mt-4">
                    <div className="card-header">
                        <b>{this.props.title}</b>
                    </div>
                    <img src={this.props.image_url} alt="libros de harry potter" className="card-img-top" />
                    <div className="card-body">
                        <p className="card-text"><b>ID: </b> {this.props.id}</p>
                        <p className="card-text"><b>Fecha: </b> {this.props.release_date}</p>
                        <button className="btn btn-info">Ver mas</button>
                    </div>
                </div>
            </div>
        )
    }
}