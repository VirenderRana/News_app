import React, {Component, useRef} from 'react';
import Header from './HeaderComponent';
import NewsCard from './NewsCardComponent';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Navbar, Util, Nav, Jumbotron, Collapse, NavItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, NavbarText } from 'reactstrap';
import Logout from './Logout';


class Main extends Component {
    constructor (props){
        super(props);
        this.state = {
            articles: [],
            search1: "https://newsapi.org/v2/everything?q=",
            search2: "top-headlines",
            search3: "&language=en&from=2022-02-06&sortBy=publishedAt&apiKey=dfc8edad93664c258537049fff1415c6"
        };
        
    }
    
    componentDidMount(){
        fetch(this.state.search1+this.state.search2+this.state.search3)
        .then(response => response.json())
        .then(myJSON => {
            this.setState({
                articles: myJSON.articles});
        })
        
    }

    search() {
        var isbn = document.getElementById('search').value;
        fetch(this.state.search1+isbn+this.state.search3)
        .then(response => response.json())
        .then(myJSON => {
            this.setState({
                articles: myJSON.articles});
        })
    }
    
    render() {
        return(
            <div>
                <Jumbotron >
                    <div className="container">
                        <Logout />
                        <div className="row row-header">
                            <div className="col-12 col-md-6">
                                <h1 className="cur">Today's News</h1>
                                <p className="cur">Curated specially for you!</p>
                            </div>
                            <div className="col-12 col-md-6">
                            <Input type="text" id="search" name="search"
                             />
                            <Button value="sub" color="primary" onClick={() =>this.search()}>Search</Button>
                        {console.log("this.search.value")}
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <div className='container'>
                    <div className="row cur">
                        <NewsCard articles={this.state.articles} />      
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;