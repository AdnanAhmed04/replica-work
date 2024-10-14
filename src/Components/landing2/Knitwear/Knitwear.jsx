// import React from 'react'
import { Link } from 'react-router-dom';
import './Knitwear.css';

const Knitwear = () => {
    return (
        <div className='Knitwear_main'>
            <div>
                <img className='Knitwear_main_img1' src="https://gatsby-ecommerce-theme.netlify.app/highlight.png?imgcdn=true" alt="" />
            </div>
            <div className='div2'>
                <h1>Luxury Knitwear
                </h1>
                <p className='para_center'>This soft lambswool jumper is knitted in Scotland, using yarn from one of the
                    world`s oldest spinners based in Fife</p>
                    <p className='shop_para'>
    <Link className='shop_para' to={"/shop"}>
        <u>SHOP NOW</u>
    </Link>
</p>


                <img className='Knitwear_main_img2' src='https://gatsby-ecommerce-theme.netlify.app/highlightmin.png?imgcdn=true'></img>
            </div>
        </div>
    )
}

export default Knitwear
