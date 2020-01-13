import React, { useState } from 'react';
import 'assets/css/modal.css';
import { Button, Card, ModalHeader, ModalBody, ModalFooter, CardHeader, CardBody, FormGroup, Form, Input, Modal, Row, Col } from "reactstrap";

const Modalsimple = (props) => {

    if (!props.isOpen) {    
        return null;
    }
    const _id = props.ID;
    const eliminarEmpresa = () => {
        props.Mutation({ variables: { _id } })
        props.onClose();
    }
    //Permite que en un futuro especifiquemos de q trata el modal  props.children
    return (

        <Modal id={_id} isOpen={props.isOpen}>
            <ModalHeader >Está seguro?</ModalHeader>
            <ModalBody>
                Usted esta por borrar una empresa de la lista
        </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={props.onClose} >Cancelar</Button>{' '}

                <Button
                    className="text-reset text-decoration-none ml-1 btn btn-outline-danger"
                    onClick={eliminarEmpresa}
                >Borrar
                            </Button>
            </ModalFooter>
        </Modal>
    );
}

export default Modalsimple;