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
import React from "react";
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
  }`;

class PanelHeader extends React.Component {
  render() {
    //  console.log(this.props);
    return (
      <div
        className={
          "panel-header " +
          (this.props.size !== undefined
            ? "panel-header-" + this.props.size
            : "")
        }
      >
        {this.props.content}
      </div>
    );
  }
}

export default graphql(getEmpresas)(PanelHeader);
// export default PanelHeader;
