import {gql} from 'apollo-boost'
import {graphql} from 'react-apollo';


const getEmpresas= 
gql`
{
  empresas{
    nombre,
    distrito,
    correo,
    canton,
    provincia
    }
  }
  `;


  const getEmpresasAll= 
gql`
{
  empresas{
    _id,
    nombre,
    distrito,
    correo,
    canton,
    provincia,
    direccion,
    telefono,
    cedulajuridica,
    logo
    }
  }
  `;



  const addEmpresa= 
gql`
mutation addEmpresa{ 
  addListing(
  nombre:String,
  distrito: String,
  correo: String,
  provincia:String,
  canton:String,
  direccion:String,
  telefono:String

  ){
    nombre,distrito,correo,provincia,canton,direccion,telefono
  }
}
  `;


  const addEmpresas= 
gql`
mutation addEmpresa($nombre:String!,$direccion:String!, $distrito: String!,$correo: String!,$provincia:String!,$canton:String!,$telefono:String!,$cedulajuridica:String!,$logo:String!)
{ 
  addListing(
  nombre:$nombre,
  direccion:$direccion,
  distrito: $distrito,
  correo: $correo,
  provincia:$provincia,
  canton:$canton,
  telefono:$telefono
  cedulajuridica:$cedulajuridica,
  logo:$logo
  ){
    nombre,direccion,distrito,correo,provincia,canton,telefono,cedulajuridica,logo
  }
}
  `;

  const getEmpresa=

    gql` 
      query empresa($Id: String!)
       {
        empresa(Id:$Id){
          _id,
          nombre,
          direccion,
          distrito,
          correo,
          canton,
          provincia,
          telefono,
          cedulajuridica,
          logo
        }
      }
    `;

    // const updateEmpresa=

    // gql` 
    //   mutation empresa($Id: String!,$nombre:String!,$direccion:String!, $distrito: String!,$correo: String!,$provincia:String!,$canton:String!,$telefono:String!,$cedulajuridica:String!)
    //    {
    //     updateEmpresa(
    //       Id:$Id,
    //       nombre:$nombre,
    //       cedulajuridica:$cedulajuridica,
    //       distrito:$distrito,
    //       correo:$correo,
    //       canton:$canton,
    //       provincia:$provincia,
    //       telefono:$telefono,
    //       direccion:$direccion
    //     )
    //     {
    //       Id,nombre,direccion,distrito,correo,provincia,canton,telefono,cedulajuridica
    //     }
    //   }
    // `;
    const updateEmpresa=

    gql` 
      mutation empresa($Id: String!,$nombre:String!,$direccion:String!, $distrito: String!,$correo: String!,$provincia:String!,$canton:String!,$telefono:String!,$cedulajuridica:String!,$logo:String)
       {
        updateEmpresa(
          _id:$Id,
          nombre:$nombre,
          cedulajuridica:$cedulajuridica,
          distrito:$distrito,
          correo:$correo,
          canton:$canton,
          provincia:$provincia,
          telefono:$telefono,
          direccion:$direccion
          logo:$logo
        )
        {
          _id,nombre,direccion,distrito,correo,provincia,canton,telefono,cedulajuridica,logo
        }
      }
    `;

    const deleteEmpresa=
    gql`
      
    mutation empresa($_id: String!) {
      deleteEmpresa(_id: $_id) {
        _id
      }
    }
    
    `



  
  export default ({getEmpresasAll,getEmpresas,addEmpresas,getEmpresa,updateEmpresa,deleteEmpresa});

  