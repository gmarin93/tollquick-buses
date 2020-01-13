import { thead, tbody } from "variables/general";
import React, { useState, useEffect, Fragment } from 'react';
import { graphql } from 'react-apollo';
import queries from 'queries/Empresas.jsx';
import gql from 'graphql-tag';
import uuid from 'uuid';
import EmpresaItem from 'components/Empresa/EmpresaItem.jsx'
import { useQuery, useMutation } from '@apollo/react-hooks';
import TableData from 'components/Tables/TableData.jsx'

const getEmpresas = gql`${queries.getEmpresasAll}`;
var DatoError=false;

function TablesEmpresas() {

    const Empresas = () => {
        
        const query = queries.deleteEmpresa;
        const [eliminado] = useMutation(query);
        const { data,loading } = useQuery(getEmpresas, { pollInterval: 100 });

        if (loading) return <p>loading...</p>;
        if (data != undefined) {
            DatoError=false

            return (
                <tbody key={uuid()}>
                    {data.empresas.map((element) => {
                        debugger
                        return (
                            <EmpresaItem
                                key={uuid()}
                                BorrarEmpresas={eliminado}
                                variables={element}
                            />
                        )
                    }
                    )}
                </tbody>
            )
        }
        else {
             DatoError=true
            return DatoError;
        }
    }

    if (DatoError) {
        return (
            <p>No hay conexión con la base de datos</p>
        )
    }
    return (
        <TableData headers={thead} Items={Empresas} />
    );
}

export default graphql(getEmpresas)(TablesEmpresas);


