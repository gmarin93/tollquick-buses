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
// reactstrap components
import {Row} from "reactstrap";
import { gql } from 'apollo-boost'
// core components
import PanelHeader from "components/PanelHeader/PanelHeader.jsx";
import EmpresaDetalles from "components/Empresa/EmpresaDetalles.jsx";
import queries from 'queries/Empresas.jsx';
import { Query } from "react-apollo"
import uuid from 'uuid';
import { useQuery, useMutation } from '@apollo/react-hooks';


const UserEdit=(props)=> {
    
    const getEmpresa = gql`${queries.getEmpresa}`;
    const updateEmpresa = gql`${queries.updateEmpresa}`;
    const Initialstate = {
        nombre: '',
        usuario: '',
        correo: '',
        provincia: '',
        canton: '',
        distrito: '',
    }

    const [empresa,grdEmpresa]=useState(Initialstate);

    const handleChange = e => {
        grdEmpresa({
            ... empresa,
            [e.target.name]: e.target.value,
        });
    };

   const GetEmpresa = ({Id}) => {
    
    const {loading, error, data  }  = useQuery(getEmpresa,{variables:{Id}});
    const empresa = data === undefined ? [] : data.empresa;
    
    if (loading) return <p>loading...</p>;
    if (error) return <p>{error.message}</p>;
    
        return (
            <React.Fragment>
                <EmpresaDetalles onChange={handleChange} query={updateEmpresa} title={'Editar Empresa'} ident={Id} datos={empresa} />
            </React.Fragment>
        )
    }

    // render() {

        const Id = props.match.params.empresaid;

        return (
            <>
                <PanelHeader size="sm" />
                <div className="content">
                    <Row>
                        {/* <Query key={uuid()} query={getEmpresa} variables={{ Id }} >
                            {({ loading, error, data }) => { */}

                                {/* const datos = data.empresa === undefined ? [] : data.empresa;

                                if (loading) return <p>loading...</p>;
                                if (error) return <p>{error.message}</p>;

                                return ( */}
                                     {/* <React.Fragment>
                                         <EmpresaDetalles onChange={this.handleChange} query={updateEmpresa} title={'Editar Empresa'} ident={Id} datos={datos} />
                                     </React.Fragment> */}
                                    <GetEmpresa Id={Id} />
                                )
                            {/* }}
                        </Query> */}
                    </Row>
                </div>
            </>
        );
    // }
}

export default UserEdit;
