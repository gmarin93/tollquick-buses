import React from 'react';
import { Button, Card, CardHeader, CardBody, FormGroup, Form, Input, Row, Col } from "reactstrap";
// import Modal from 'components/modals/modal.jsx';
import Modal from 'components/modals/modalsimple.jsx';
import { Mutation } from "react-apollo";
import { createNotification } from "components/notifications/notifications.jsx"
import queries from 'queries/Empresas.jsx';
import { gql } from 'apollo-boost'

class DeleteEmpresaModal extends React.Component {

render(){

    const deleteEmpresas = gql`${queries.deleteEmpresa}`;
    const _id=this.props.ID;
    console.log(_id);   
debugger
    return (
        <Modal key={_id} ID={_id} isOpen={this.props.isOpen} onClose={this.props.onClose}>
            <div className="DeleteBadgeModal">
                <h1>Está seguro?</h1>
                <p>Usted esta por borrar una empresa de la lista.</p>

                <div>
                    <Mutation mutation={deleteEmpresas} variables={{ _id }} onCompleted={this.props.onClose} onError={createNotification("error")}>
                        {postEmpresa =>
                            <Button
                                className="text-reset text-decoration-none ml-1 btn btn-outline-danger"
                                onClick={postEmpresa}
                            >Borrar
                            </Button>
                        }   
                    </Mutation>
                <Button onClick={this.props.onClose} className="btn btn-primary">
                    Cancelar
          </Button>
                </div>
            </div>
        </Modal>
    );
}
}

export default DeleteEmpresaModal;