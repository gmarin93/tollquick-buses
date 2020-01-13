import React, { Fragment } from 'react';
import uuid from 'uuid';
import { Button, Card, CardHeader, CardBody, FormGroup, Form, Input, Row, Col } from "reactstrap";
import { Link } from 'react-router-dom';
import { Mutation } from "react-apollo";
import queries from 'queries/Empresas.jsx';
import { createNotification } from "components/notifications/notifications.jsx"
import DeleteEmpresaModal from "components/modals/deleteEmpresamodal.jsx"
import Modal from 'components/modals/modalsimple.jsx';


const item = (props) => {

  const element = props.variables;
  // const query = queries.deleteEmpresa;
  const _id = element._id;
  
  const eliminarEmpresas=props.BorrarEmpresas;
  

  return (

    <tr key={uuid()}>
      <th key={(uuid())} className="text-right">
        {(element.nombre)}
      </th>

      <th key={(uuid())} className="text-right">
        {(element.correo)}
      </th>

      <th key={(uuid())} className="text-right">
        {(element.canton)}
      </th>

      <th key={(uuid())} className="text-right">
        {(element.provincia)}
      </th>
      <th>
        <Link
          className="text-reset text-decoration-none ml-1 btn btn-outline-info"
          to={`/admin/user-edit/${(_id)}`}
          params={{ empresaid: _id }}
        >Edit
        </Link>
        {/* <Mutation mutation={query} variables={{ _id }} onCompleted={createNotification("success")} onError={createNotification("error")}>
          {postEmpresa =>
            // <Button */}
            {/* //   className="text-reset text-decoration-none ml-1 btn btn-outline-danger"
            //   onClick={postEmpresa}
            // >Delete
            //   </Button> */}
            <Fragment>

              <Button
                className="text-reset text-decoration-none ml-1 btn btn-outline-danger"
                onClick={props.onOpenModal}
              >Delete
              </Button>

              <Modal
                key={_id}
                isOpen={props.modalIsOpen}
                onClose={props.onCloseModal}
                Mutation={eliminarEmpresas}
                ID={_id}
              />
            </Fragment>
          {/* } */}
        {/* </Mutation> */}

      </th>
    </tr>
  )
};

export default item;