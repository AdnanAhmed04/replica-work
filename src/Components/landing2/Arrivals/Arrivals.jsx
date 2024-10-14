import React from 'react';
import './Arrivals.css'; // Import the CSS for styling
import { Link } from 'react-router-dom';

const Arrivals = () => {
    const products = [
        {
            id: 1,
            title: "Classic T-Shirt",
            price: "$75",
            image: "https://gatsby-ecommerce-theme.netlify.app/products/shirt1.jpg?imgcdn=true",
        },
        {
            id: 2,
            title: "Classic T-Shirt",
            price: "$75",
            image: "https://gatsby-ecommerce-theme.netlify.app/products/shirt2.jpg?imgcdn=true",
        },
        {
            id: 3,
            title: "Classic T-Shirt",
            price: "$75",
            image: "https://gatsby-ecommerce-theme.netlify.app/products/shirt3.jpg?imgcdn=true",
        },
    ];

    return (
        <div className="Arrivals_main_container">
            <div className='center_may'>
                <h1>New Arrivals</h1>
                <Link className='remove' to="/shop">

                    <p className='remove'>VIEW ALL</p>
                </Link>
            </div>

            <Link className='remove' to="/product/2">

                <div className="Arrivals_container">
                    {products.map(product => (
                        <div className="Arrivals_card" key={product.id}>
                            {/* <div className="card-icons">
                            <span className="favorite-icon">❤️</span>
                        </div> */}

                            <img src={product.image} alt={product.title} />
                            <div className='card_info'>

                                <h2>{product.title}</h2>
                                <p className="price">{product.price}</p>
                            </div>

                        </div>
                    ))}
                </div>
            </Link>

        </div>
    );
};

export default Arrivals;