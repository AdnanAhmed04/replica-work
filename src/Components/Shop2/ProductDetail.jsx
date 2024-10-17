import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';
// import ProductList from './ProductList';
import { CiHeart } from "react-icons/ci";
// import Arrivals from '../landing2/Arrivals/Arrivals';


const products = [
    {
        
        id: 1, img1: 'https://gatsby-ecommerce-theme.netlify.app/products/pdp1.jpeg?imgcdn=true',
        img2: 'https://gatsby-ecommerce-theme.netlify.app/products/pdp2.jpeg?imgcdn=true',
        img3: 'https://gatsby-ecommerce-theme.netlify.app/products/pdp3.jpeg?imgcdn=true',
        img4: 'https://gatsby-ecommerce-theme.netlify.app/products/pdp4.jpeg?imgcdn=true',
        name: 'Lambswool Crew Neck Jumper', price: '$13.90', colors: '2 colors',
        description: 'Details about product 1', description2: 'This soft lambswool jumper is knitted in Scotland, using yarn from one of the world\'s oldest spinners based in Fife. Once knitted, the garment is washed in Scottish spring water to make it beautifully soft.'
    },
    {
        id: 2, img1: 'https://gatsby-ecommerce-theme.netlify.app/products/pdp1.jpeg?imgcdn=true',
        img2: 'https://gatsby-ecommerce-theme.netlify.app/products/pdp2.jpeg?imgcdn=true',
        img3: 'https://gatsby-ecommerce-theme.netlify.app/products/pdp3.jpeg?imgcdn=true',
        img4: 'https://gatsby-ecommerce-theme.netlify.app/products/pdp4.jpeg?imgcdn=true',
        name: 'Lambswool Crew Neck Jumper', price: '$15.90', colors: '2 colors',
        description: 'Details about product 2', description2: 'This soft lambswool jumper is knitted in Scotland, using yarn from one of the world\'s oldest spinners based in Fife. Once knitted, the garment is washed in Scottish spring water to make it beautifully soft.'
    },
    {
        id: 3, img1: 'https://gatsby-ecommerce-theme.netlify.app/products/pdp1.jpeg?imgcdn=true',
        img2: 'https://gatsby-ecommerce-theme.netlify.app/products/pdp2.jpeg?imgcdn=true',
        img3: 'https://gatsby-ecommerce-theme.netlify.app/products/pdp3.jpeg?imgcdn=true',
        img4: 'https://gatsby-ecommerce-theme.netlify.app/products/pdp4.jpeg?imgcdn=true',
        name: 'Lambswool Crew Neck Jumper', price: '$13.90', colors: '2 colors',
        description: 'Details about product 3', description2: 'This soft lambswool jumper is knitted in Scotland, using yarn from one of the world\'s oldest spinners based in Fife. Once knitted, the garment is washed in Scottish spring water to make it beautifully soft.'
    },
];

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find((prod) => prod.id === parseInt(id));

    const [quantity, setQuantity] = useState(0);
    const [openAccordion, setOpenAccordion] = useState(null); // state for accordion

    const handleQuantityChange = (change) => {
        setQuantity((prevQuantity) => Math.max(0, prevQuantity + change));
    };

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    if (!product) {
        return <p>Product not found!</p>;
    }

    return (
        <div>
            <div className="product-detail">
                <div className='product_img_div'>
                    <img className='img_product' src={product.img1} alt={product.name} />
                    <img className='img_product' src={product.img2} alt={product.name} />
                    <img className='img_product' src={product.img3} alt={product.name} />
                    <img className='img_product' src={product.img4} alt={product.name} />
                </div>
                <div className='product_info'>
                    <h1>{product.name}</h1>
                    <p>Price: {product.price}</p>
                    <p>{product.colors}</p>
                    <p>{product.description}</p>
                    <p className='desc2'>{product.description2}</p>
                    <div className='btn_size'>
                        <p><b>Size :</b> </p>
                        <div className='row_size'>
                            <p>XS</p>
                            <p>S</p>
                            <p>M</p>
                            <p>L</p>
                            <p>XL</p>
                            <p>XXL</p>
                        </div>
                    </div>
                    <div className=''>
                        <div className="quantity-container">
                            <button className="quantity-button" onClick={() => handleQuantityChange(-1)}>
                                –
                            </button>
                            <span className="quantity-display">{quantity}</span>
                            <button className="quantity-button" onClick={() => handleQuantityChange(1)}>
                                +
                            </button>
                        </div>
                        <div className="add-to-cart">
                            <button className="wishlist-button">
                                Add to Wishlist <CiHeart className='heart' />
                            </button>
                        </div>
                    </div>
                    <div className="accordion">
                        <div className="accordion-item">
                            <button className="accordion-title" onClick={() => toggleAccordion(0)}>
                                COMPOSITION & CARE
                            </button>
                            {openAccordion === 0 && (
                                <div className="accordion-content">
                                    <p>This soft lambswool jumper is knitted in Scotland, using yarn from one of the world's oldest spinners based in Fife. Once knitted, the garment is washed in Scottish spring water to make it beautifully soft.</p>
                                </div>
                            )}
                        </div>

                        <div className="accordion-item">
                            <button className="accordion-title" onClick={() => toggleAccordion(1)}>
                                DELIVERY & RETURNS
                            </button>
                            {openAccordion === 1 && (
                                <div className="accordion-content">
                                    <p>Details about delivery and returns go here.</p>
                                </div>
                            )}
                        </div>

                        <div className="accordion-item">
                            <button className="accordion-title" onClick={() => toggleAccordion(2)}>
                                HELP
                            </button>
                            {openAccordion === 2 && (
                                <div className="accordion-content">
                                    <p>Information about help and support goes here.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </div>
            {/* <div>
                <h2>You may also like</h2>
                    <ProductList/>
                </div> */}
                {/* <Arrivals/> */}
        </div>
    );
};

export default ProductDetail;
