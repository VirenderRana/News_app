import React from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';


const NewsCard = (props) => {
  const news = props.articles.map((item) => {
    return(
      <div className='col-12 col-md-4 d-flex align-items-stretch mb-5'>
        <Card key={item.content.length+item.description.length}>
          <a href={item.url}>
            <CardImg className="mb-2" src={item.urlToImage} />
              <CardTitle>{item.title}</CardTitle>
              <CardBody>
                {item.description}
              </CardBody>
          </a>
        </Card>
      </div>
    );
    });

  return(
    <div className="row row-content match-height">
      {news} 
    </div>
     
  );
};

export default NewsCard;