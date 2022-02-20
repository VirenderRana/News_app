import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCardComponent';
import { Jumbotron, Button, Input } from 'reactstrap';
import Logout from './Logout';



const Main = (props) => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    const [topic, setTopic] = useState('top-headlines'); 
    const [articles, setArticles] = useState([]);
    const [url, setUrl] = useState(`https://newsapi.org/v2/everything?q=${topic}&language=en&from=${year}-${month}-${date}&sortBy=publishedAt&apiKey=dfc8edad93664c258537049fff1415c6`);

    useEffect(() => {
        fetch(url)
        .then(response => {
            if (response.ok) {
              return response;
            } 
            else {
              var error = new Error('Error ' + response.status + ': ' + response.statusText);
              error.response = response;
              throw error;
            }
          },
          error => {
                throw error;
          })
        .then(response => response.json())
        .then(myJSON => {
            setArticles(myJSON.articles);
        })
        .catch(error =>  { console.log('Articles', error.message); alert('Failed to fetch articles from the server\nError: '+error.message); });
        
        }, [articles]);

    function search(){
        let t = document.getElementById('search').value;
        setUrl(`https://newsapi.org/v2/everything?q=${t}&language=en&from=${year}-${month}-${date}&sortBy=publishedAt&apiKey=dfc8edad93664c258537049fff1415c6`);
        fetch(url)
        .then(response => {
            if (response.ok) {
                return response;
            } 
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
            },
            error => {
                throw error;
            })
        .then(response => response.json())
        .then(myJSON => {
            setArticles(myJSON.articles);
        })
        .catch(error =>  { console.log('Articles', error.message); alert('Failed to fetch articles from the server\nError: '+error.message); });
    }
  return (
    <div>
        <Jumbotron >
                <Logout />
                    <div className="container">
                        <div className="col col-12">
                            <p className="cur">Welcome {props.user.name}!</p>
                        </div>
                        <div className="row row-header">
                            <div className="col-12 col-md-6">
                                <h1 className="cur">Today's News</h1>
                                <p className="cur">from our best sources!</p>
                            </div>
                            <div className="col-12 col-md-6">
                            <Input type="text" id="search" name="search" 
                            />
                            <Button value="sub" color="primary" onClick={() =>search()}>Search</Button>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <div className='container'>
                    <div className="row cur">
                        <NewsCard articles={articles} />      
                    </div>
                </div>
    </div>
  )
}

export default Main