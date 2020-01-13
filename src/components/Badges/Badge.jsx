import React from "react";
import user from "users.png";
import {Card,CardBody,Col} from "reactstrap";



class Badge extends React.Component {


    crg_logo=({logo})=>{

        if(logo==='') return  <img alt="..." className="avatar border-gray" src={user}/>

        else return  <img alt="..." className="avatar border-gray" src={logo}/>
    }

    fileSelectedHandler = event => {
        this.props.selectedFile(event)
    }

    handleClick = (e) => {
        this.inputElement.click();
      }

    render() {
        var props = this.props.datos;
        return (
            <>
                <Col md="4">
                    <Card className="card-user">
                        <div className="image">
                        </div>
                        <CardBody>
                            <div className="author">
                                <a href="#pablo" onClick={e => e.preventDefault()}>
                                    {this.crg_logo(props)}
                                    <h5 className="title">{props.nombre}</h5>
                                </a>
                                <p className="description">{props.cedulajuridica}</p>
                            </div>
                            <p className="description text-center">
                                {props.correo}
                            </p>
                        </CardBody>
                        <hr />
                        <div className="button-container">
                            <input onChange={(event) => this.fileSelectedHandler(event)} style={{ display: 'none' }} type="file"
                                ref={input => this.inputElement = input} />
                            <button
                                className="btn btn-dark btn-lg btn-icon btn-round" href="#pablo"
                                onClick={this.handleClick}
                            >
                                <i className="fas fa-camera-retro" />
                            </button>
                        </div>
                    </Card>
                </Col>
            </>
        );
    }
}

export default Badge;

