import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';

class NewsCard extends Component  {
  constructor(props) {
    super(props);
    this.goToUrl = this.goToUrl.bind(this);
  }
  goToUrl(url) {
    return(
      <a href={url} />
    );
  }

  render() {
    const news = this.props.articles.map((item) => {
      return(
        <div className='col-12 col-md-4 d-flex align-items-stretch mb-5'>
            <Card key={item.content.length+item.description.length} onClick={this.goToUrl(item.url)}>
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
  } 
}

export default NewsCard;