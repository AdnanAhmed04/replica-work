import React from 'react';
import { Link } from 'react-router-dom';
import './css_file.css';

const products = [
  { id: 1, name: 'Relaxed-fit graphic T-shirt', price: '$13.90', colors: '2 colors', image: 'https://gatsby-ecommerce-theme.netlify.app/products/woman1.jpeg?imgcdn=true' },
  { id: 2, name: 'Crew Neck Sweater', price: '$15.90', colors: '7 colors', image: 'https://gatsby-ecommerce-theme.netlify.app/products/woman2.jpeg?imgcdn=true' },
  { id: 3, name: 'Button-up Sweater', price: '$30.90', colors: '4 colors', image: 'https://gatsby-ecommerce-theme.netlify.app/products/woman3.jpeg?imgcdn=true' },
  { id: 4, name: 'Knit Sweater', price: '$25.90', colors: '5 colors', image: 'https://gatsby-ecommerce-theme.netlify.app/products/woman5.jpeg?imgcdn=true' },
  { id: 5, name: 'Cable-knit Sweater', price: '$55.90', colors: '1 color', image: 'https://gatsby-ecommerce-theme.netlify.app/products/woman4.jpeg?imgcdn=true' },
  { id: 6, name: 'Basic Long-sleeve', price: '$18.90', colors: '8 colors', image: 'https://gatsby-ecommerce-theme.netlify.app/products/woman6.jpeg?imgcdn=true' },
];

const ProductList = () => {
  return (
    <div className="product-list">
      <div className='bg-color'>

      <h1>Women's Sweaters</h1>
      <p className='para_center_product'>
        Look to our women’s sweaters for modern takes on one-and-done dressing. From midis in bold prints to dramatic floor-sweeping styles and easy all-in-ones, our edit covers every mood.
      </p>
      </div>

      <div className="filter-section">
        <p>476 items</p>
        <div className='btn_div'>
          <p className='btn_product'>XS</p>
          <p className='btn_product'>S</p>
          <p className='btn_product'>M</p>
          <p className='btn_product'>L</p>
          <p className='btn_product'>XL</p>
          <p className='btn_product'>XXL</p>
        </div>
      </div>
      <div className="products">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} className="product-card">
            <div className='pro_card'>
              <img src={product.image} alt={product.name} />
              <div className='info'>
              <h2>{product.name}</h2>
              <p>{product.price}</p>
              <p>{product.colors}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className='lower_div_product'>
        <p>1 of 10</p>
        <button className='Load_more'>Load More</button>
      </div>
    </div>
  );
};

export default ProductList;