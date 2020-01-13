import React, { Component, Fragment, useState } from "react";
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { Button, Card, CardHeader, CardBody, FormGroup, Form, Input, Row, Col } from "reactstrap";
import { graphql } from 'react-apollo';
import { Mutation } from "react-apollo";
import queries from 'queries/Empresas.jsx';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import {createNotification} from "components/Notifications/Toast.jsx"
import { gql } from 'apollo-boost'



class Formuser extends React.Component {


  render() {
    const { nombre, usuario, correo, provincia, canton, distrito }= this.props.datos;
    const onChange = this.props.onChange;
    const query=gql`${this.props.query}`;
    const Id=this.props.datos.Id===undefined ? 1 : this.props.datos.Id;
    console.log((this.props));

    return (
      <>
        <Col md="8">
          <Card>
            <CardHeader>
              <h5 className="title">{this.props.title}</h5>
            </CardHeader>
            <CardBody>
              <AvForm >
                <Row>
                  <Col className="px-1" md="3">
                    <FormGroup>
                      <label>Nombre</label>
                      <AvField 
                        placeholder="nombre"
                        type="text"
                        name="nombre"
                        onChange={onChange}
                        value={nombre}
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col className="pl-1" md="4">
                    <FormGroup>
                      <label htmlFor="exampleInputEmail1">
                        Correo
                          </label>
                      <AvField  
                       placeholder="Email" 
                       type="email" 
                       name="correo" 
                       onChange={onChange}
                       value={correo}
                      required
                      />
                    </FormGroup>
                  </Col>
                  <Col className="pr-1" md="4">
                    <FormGroup>
                      <label>Usuario</label>
                      <AvField 
                        placeholder="Company"
                        type="text"
                        name="usuario"
                        onChange={onChange}
                        value={usuario}
                        required
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pl-1" md="4">
                    <FormGroup>
                      <label>Provincia</label>
                      <AvField 
                        placeholder="Last Name"
                        type="text"
                        name="provincia"
                        value={provincia}
                        onChange={onChange}
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col className="px-1" md="4">
                    <FormGroup>
                      <label>Cantón</label>
                      <AvField 
                        placeholder="Country"
                        type="text"
                        name="canton"
                        onChange={onChange}
                        value={canton}
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col className="px-1" md="4">
                    <FormGroup>
                      <label>Distrito</label>
                      <AvField 
                        placeholder="Country"
                        type="text"
                        name="distrito"
                        onChange={onChange}
                        value={distrito}
                        required
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <FormGroup>
                      <label>Dirección</label>
                      <AvField 
                        placeholder="Home Address"
                        type="text"
                        name="direccion"
                        required
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="4">
                    <FormGroup>
                      <label>Distrito</label>
                      <AvField 
                        placeholder="City"
                        type="text"
                        name="no"
                        required
                      />
                    </FormGroup>
                  </Col>

                  <Col className="pl-1" md="4">
                    <FormGroup>
                      <label>N.Cuenta</label>
                      <AvField  
                      placeholder="x-xxxxxxx-xxx-x" 
                      type="text" 
                      name="cuenta"
                      required />
                    </FormGroup>
                  </Col>
                </Row>
                <Mutation mutation={query} variables={{Id, nombre,usuario, correo, provincia, canton, distrito }} onCompleted={createNotification("success")} onError={createNotification("error")}>
                  {postEmpresa =>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <Button color="primary" onClick={postEmpresa}>Guardar</Button>
                        </FormGroup>
                      </Col>
                    </Row>
                  }
                </Mutation>
                <NotificationContainer />
              </AvForm>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  }
}

export default graphql(queries.addEmpresas)(Formuser);
