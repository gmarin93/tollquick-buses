import React, { Component, Fragment, useState } from "react";
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { Button, Card, CardHeader, CardBody, FormGroup, Form, Input, Row, Col } from "reactstrap";
import { graphql } from 'react-apollo';
import queries from 'queries/Empresas.jsx';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import {createNotification} from "components/Notifications/Toast.jsx"
import { gql } from 'apollo-boost'
import { useQuery, useMutation } from '@apollo/react-hooks';


const Formuser=({datos,onChange,query,title})=>{
  console.log(datos.logo);
    const { nombre, cedulajuridica, correo, provincia, canton, distrito, direccion, telefono,logo }= datos;
    query=gql`${query}`;
    const Id=datos.Id===undefined ? 1 : datos.Id;
    const [agregarEmpresa,{data}]=useMutation(query,{
      onCompleted: createNotification("success"), onError: createNotification("error")
    });

    return (
      <>
        <Col md="8">
          <Card>
            <CardHeader>
              <h5 className="title">{title}</h5>
            </CardHeader>
            <CardBody>
              <AvForm onSubmit={()=>{  
                  agregarEmpresa({variables:{Id, telefono, nombre, direccion, cedulajuridica, correo, provincia, canton, distrito,logo}});
              }} >
                <Row>
                  <Col className="px-1" md="3">
                    <FormGroup>
                      <label>Nombre de la empresa</label>
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
                        Correo electrónico
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
                      <label>Cédula Jurídica</label>
                      <AvField 
                        placeholder="x-xxx-xx-x"
                        type="text"
                        name="cedulajuridica"
                        onChange={onChange}
                        value={cedulajuridica}
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
                        placeholder="Alajuela"
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
                        placeholder="San Carlos"
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
                        placeholder="Pital"
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
                        placeholder="Donde se encuentra la empresa?"
                        type="text"
                        name="direccion"
                        onChange={onChange}
                        value={direccion}
                        required
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="4">
                    <FormGroup>
                      <label>Teléfono</label>
                      <AvField 
                        placeholder="5-5555-55-55"
                        type="text"
                        name="telefono"
                        value={telefono}
                        onChange={onChange}
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
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <Button type="submit" color="primary">Guardar</Button>
                        </FormGroup>
                      </Col>
                    </Row>         
              </AvForm>
            </CardBody>
          </Card>
        </Col>
        <NotificationContainer /> 
      </>
    );
}

export default graphql(queries.addEmpresas)(Formuser);
