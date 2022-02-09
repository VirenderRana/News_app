import React, {Component} from 'react';
import NewsCard from './NewsCardComponent';
import { Jumbotron, Button, Input } from 'reactstrap';
import Logout from './Logout';


class Main extends Component {
    constructor (props){
        super(props);
        let newDate = new Date();
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        this.state = {
            articles: [],
            search1: "https://newsapi.org/v2/everything?q=",
            search2: "top-headlines",
            search3: `&language=en&from=${year}-${month}-${date}&sortBy=publishedAt&apiKey=dfc8edad93664c258537049fff1415c6`
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
                <Logout />
                    <div className="container">
                        <div className="col col-12">
                            <p className="cur">Welcome {this.props.user.name}!</p>
                        </div>
                        <div className="row row-header">
                            <div className="col-12 col-md-6">
                                <h1 className="cur">Today's News</h1>
                                <p className="cur">from our best sources!</p>
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