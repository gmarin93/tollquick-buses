import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/css/modal.css';
import { Button, Card, CardHeader, CardBody, FormGroup, Form, Input, Row, Col } from "reactstrap";


function Modal(props) {
    
  if (!props.isOpen) {
    return null;
  } 

  //Permite que en un futuro especifiquemos de q trata el modal  props.children
  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="Modal__container">
        <button onClick={props.onClose} className="Modal__close-button">
          X
        </button>

        {props.children} 
      </div>
    </div>,
    document.getElementById('modal')
  );
}

export default Modal;