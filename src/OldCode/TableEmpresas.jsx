import { Table } from "reactstrap";
import { thead, tbody } from "variables/general";
import React from "react";
import { Query } from "react-apollo"
import { graphql } from 'react-apollo';
import queries from 'queries/Empresas.jsx';
import { gql } from 'apollo-boost'
import uuid from 'uuid';
import EmpresaItem from 'components/Empresa/EmpresaItem.jsx'


const getEmpresas = gql`${queries.getEmpresasAll}`;

class TablesEmpresas extends React.Component {

    state = {
        loading: true,
        error: null,
        modalIsOpen: false,
        empresas: []
    };

    handleCloseModal = e => {
        this.setState({ modalIsOpen: false });
      }
    
      handleOpenModal = e => {
        this.setState({ modalIsOpen: true });
      }
    
    render() {

        return (
            <>
                <Table key={2} responsive>
                    <thead className="text-primary">
                        <tr>
                            {thead.map((prop, key) => {
                                if (key === thead.length - 1)
                                    return (
                                        <th key={key}>
                                            {prop}
                                        </th>
                                    );
                                return <th key={key}>{prop}</th>;
                            })}
                        </tr>
                    </thead>
                    <Query key={uuid()} query={getEmpresas} pollInterval={600}>
                        {({ loading, error, data }) => {

                            if (loading) return <p>loading...</p>;
                            if (error) return <p>{error.message}</p>;


                            return (
                                <tbody key={uuid()}>
                                    {data.empresas.map((element) => {
                                        return (

                                            <EmpresaItem 
                                            key={uuid()} 
                                            variables={element}  
                                            onCloseModal={this.handleCloseModal}
                                            onOpenModal={this.handleOpenModal}
                                            modalIsOpen={this.state.modalIsOpen} />

                                        )
                                    })}
                                </tbody>
                            )
                        }}
                    </Query>
                </Table>
            </>
        );
    }
}

export default graphql(getEmpresas)(TablesEmpresas);


