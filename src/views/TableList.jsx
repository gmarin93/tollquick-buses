
import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Row,
  Col
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.jsx";
import TableList from 'components/Empresa/EmpresaList.jsx';



class RegularTables extends React.Component {

 
  render() {
    return (  
      <>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Empresas registradas</CardTitle>
                </CardHeader>
                <CardBody>
                  <TableList />
                </CardBody>
              </Card>
            </Col>
            <Col xs={12}>
              <Card className="card-plain">
                <CardHeader>
                  <CardTitle tag="h4">Table on Plain Background</CardTitle>
                  <p className="category"> Here is a subtitle for this table</p>
                </CardHeader>
                <CardBody>
                  <TableList/>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default RegularTables;
// export default graphql(getEmpresas)(RegularTables);