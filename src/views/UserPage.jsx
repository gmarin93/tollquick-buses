import React from "react";
// reactstrap components
import {Button,Card,CardHeader,CardBody,FormGroup,Form,Input,Row,Col} from "reactstrap";
// core components
import PanelHeader from "components/PanelHeader/PanelHeader.jsx";
import EmpresaForm from "components/Forms/EmpresaForm.jsx";
import Badge from "components/Badges/Badge.jsx";
import queries from 'queries/Empresas.jsx';
import { gql } from 'apollo-boost'

class User extends React.Component {

  state = {
    nombre: '',
    cedulajuridica: '',
    correo: '',
    provincia: '',
    canton: '',                                               
    distrito: '',
    direccion: '',
    telefono:'',
    logo:'',
  } 

  handleChange=e=>{
    this.setState({
             ... this.state,
            [e.target.name]:e.target.value,
    });
};

fileSelectedHandler = event => {
  this.setState({
      logo:URL.createObjectURL(event.target.files[0])
      // logo:(event.target.files[0])
  })
}

  render() {

    const query=gql`${queries.addEmpresas}`;
    return (
      <>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <EmpresaForm onChange={this.handleChange} title={'Registro de empresas'} query={query}  datos={this.state}/>
            <Badge selectedFile={this.fileSelectedHandler} datos={this.state} />
          </Row>
        </div>
      </>
    );  
  }
}

export default User;
