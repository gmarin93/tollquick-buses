import React, { Component, Fragment, useState } from "react";
import 'react-notifications/lib/notifications.css';
import Badge from "components/Badges/Badge.jsx";
import EmpresaForm from "components/Forms/EmpresaForm.jsx"

class Userdetails extends React.Component {

    state = {}

    componentDidMount() {
        this.setState({
            Id:this.props.ident,
            nombre: this.props.datos.nombre,
            cedulajuridica:this.props.datos.cedulajuridica, 
            correo: this.props.datos.correo,
            provincia: this.props.datos.provincia,
            canton: this.props.datos.canton,
            distrito: this.props.datos.distrito,
            direccion: this.props.datos.direccion,
            telefono: this.props.datos.telefono,
            logo:this.props.datos.logo===undefined ? '' : this.props.datos.logo
            
        })
    }   
    handleChange = e => {   
        this.setState({
            ... this.state,
            [e.target.name]: e.target.value,
        });
    };

    fileSelectedHandler = event => {
        this.setState({
            logo:URL.createObjectURL(event.target.files[0])
            // logo:(event.target.files[0])
        })
        // console.log(event.target.files[0]);
      }

    render() {        
        return (
            <>

                <React.Fragment>
                    <EmpresaForm onChange={this.handleChange} title={'Editar Empresa'} datos={this.state} query={this.props.query} />
                    <Badge selectedFile={this.fileSelectedHandler} datos={this.state} />
                </React.Fragment>

            </>
        );
    }
}

export default (Userdetails);
