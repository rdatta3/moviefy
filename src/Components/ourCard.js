import React from "react";
 import { Card, Col } from "react-bootstrap";

 const OurCard = (props) => {
     const { movieItem } = props;
     let src=movieItem?.primaryImage?.url;
     if (!src){
        src=" https://cdn-icons-png.flaticon.com/512/4221/4221419.png";
     }
     return (
         <Col>
             <div>{
                <Card>
                <Card.Img variant="top" src={src} className="cardImage" />
                 <Card.Body>
                  <Card.Title>{movieItem.titleText.text}</Card.Title>
                   <Card.Text>
                     {movieItem?.primaryImage?.caption?.plainText}
                     </Card.Text>
                   </Card.Body>
             </Card>

             }

             </div>
         </Col>
     );
 };
 export default OurCard;