import React, { useState, useEffect, Fragment } from 'react';
import uuid from 'uuid';
import { Link } from 'react-router-dom';
import ModalDelete from 'components/Modals/ModalDelete.jsx';



function item(props) {

  const element = props.variables;
  const _id = element._id;
  const eliminarEmpresas = props.BorrarEmpresas;

  return (
    <>
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
          <ModalDelete Id={_id} BorrarEmpresas= {eliminarEmpresas} />
        </th>
      </tr>
    </>
  )
};

export default item;