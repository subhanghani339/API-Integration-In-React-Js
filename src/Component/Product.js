import React from "react";

const Product = ({ content }) => {
  return (
    <div className="card">
      <img src={content.image} width="100%" height="300px" alt="New Images" />
      <h3>{content.title}</h3>
      <p><strong>${content.price}</strong></p>
      <div style={{display: 'flex', gap:'5px'}}>
        <p>RATING: {content.rating.rate}</p>
        <p>({content.rating.count})</p>
      </div>
    </div>
  );
};

export default Product;
