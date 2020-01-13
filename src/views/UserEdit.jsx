/*!

=========================================================
* Now UI Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState, useEffect, Fragment } from 'react';
import { Row } from "reactstrap";
import { gql } from 'apollo-boost'
import PanelHeader from "components/PanelHeader/PanelHeader.jsx";
import EmpresaDetalles from "components/Empresa/EmpresaDetalles.jsx";
import queries from 'queries/Empresas.jsx';
import { useQuery, useMutation } from '@apollo/react-hooks';


const UserEdit = (props) => {

    const Id = props.match.params.empresaid;
    const getEmpresa = gql`${queries.getEmpresa}`;
    const updateEmpresa = gql`${queries.updateEmpresa}`;

    const GetEmpresa = ({ Id }) => {

        debugger
        const { loading, error, data } = useQuery(getEmpresa, { variables: { Id } });
        const empresa = data === undefined ? [] : data.empresa; //No se puede guardar en un state directamente, se tiene que enviar a otro componente y agregarselo al state

        if (loading) return <p>loading...</p>;
        if (error) return <p>{error.message}</p>;

        return (
            <React.Fragment>
                <EmpresaDetalles query={updateEmpresa} title={'Editar Empresa'} ident={Id} datos={empresa} />
            </React.Fragment>
        )
    }

    return (
        <>
            <PanelHeader size="sm" />
            <div className="content">
                <Row>
                    <GetEmpresa Id={Id} />
                </Row>
            </div>
        </>
    );
}

export default UserEdit;
