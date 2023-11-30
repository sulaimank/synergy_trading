import React from "react";
import "../App.css";
export const SingleProduct = () => {
  return (
    <div className="productContainer">
      <div className="products">
        <Card>
          <Card.Img variant="top" src={prod.image} alt={prod.name} />
          <Card.Body>
            <Card.Title>{prod.name}</Card.Title>
            <Card.Subtitle style={{ paddingBottom: 10 }}>
              <span>$ {prod.price.split(".")[0]}</span>
            </Card.Subtitle>
            <Button variant="danger">Remove from Cart</Button>) : (
            <Button>Stock</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
