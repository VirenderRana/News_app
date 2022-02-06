import React, {Component} from 'react';
import { Navbar, Util, Nav, Jumbotron, Collapse, NavItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, NavbarText } from 'reactstrap';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
        
    }
    

    render() {
        return(
        <Jumbotron className="fixed">
            <div className="container">
                <div className="row row-header">
                    <div className="col-12 col-sm-6">
                        <h1>Today's News</h1>
                        <p>Curated specially for you!</p>
                    </div>
                    <div className="col-12 col-sm-6">
                        <Input></Input><Button type="submit" className="bg-primary size-lg" />
                    </div>
                </div>
            </div>
        </Jumbotron>
        
            
        );
    }
}

export default Header;