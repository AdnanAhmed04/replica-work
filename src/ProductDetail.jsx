// ProductDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import products from "./App"; // Import your array of products here

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} className="detail-image" />
      <h2>{product.title}</h2>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <p>{product.colors}</p>
      <button>Add to Bag</button>
    </div>
  );
};

export default ProductDetail;
