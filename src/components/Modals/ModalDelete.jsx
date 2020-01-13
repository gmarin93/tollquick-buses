import Modal from 'components/Modals/Modal.jsx';
import React, { useState, useEffect, Fragment } from 'react';
import { Button, Card, CardHeader, CardBody, FormGroup, Form, Input, Row, Col } from "reactstrap";


const ModalDelete =({Id,BorrarEmpresas}) =>{

    const [modalIsOpen, grdModalOpen] = useState(false);

    const handleCloseModal = e => {
      grdModalOpen(false);
    }

    const handleOpenModal = e => {
      grdModalOpen(true);
    }
    
        return (
            <Fragment>

            <Button
              className="text-reset text-decoration-none ml-1 btn btn-outline-danger"
              onClick={handleOpenModal}>Delete
            </Button>
            <Modal
              key={Id}
              isOpen={modalIsOpen}
              onClose={handleCloseModal}
              Mutation={BorrarEmpresas}
              ID={Id}
            />
    
          </Fragment>
        );
}

export default ModalDelete;