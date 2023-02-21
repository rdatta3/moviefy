import React from "react";
 import { Card, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
 const OurCard = (props) => {
     const { movieItem } = props;
     let src=movieItem?.primaryImage?.url;
     if (!src){
        src=" https://cdn-icons-png.flaticon.com/512/4221/4221419.png";
     }
     return (
         <Col>
             <div className="card-container">{
             <Link to={`/movies/${movieItem.id}`} >
                <Card >
                <Card.Img variant="top" src={src} className="cardImage"/>
                 <Card.Body>
                  <Card.Title>{movieItem.titleText.text}</Card.Title>
                   <Card.Text>
                     {movieItem?.primaryImage?.caption?.plainText}
                   </Card.Text>
                  </Card.Body>
                </Card>
             </Link>

             }

             </div>
         </Col>
     );
 };
 export default OurCard;