import React from 'react'
import './Values.css';

const Values = () => {
    return (
        <div className='Values_main' name="values">
            <div className='Values_heading'>
                <h2>Our Values</h2>
            </div>
            <div className='Values_info'>
                <p>
                Sunspel produced some of the world's earliest T-shirts. In the late 1800s the business made luxury tunics and undershirts 
                from lightweight Sea Island cotton for export to the Far East and other warm climates. While these garments initially had 
                silk buttoned plackets, these were removed in the early 1900s and replaced with simple bound necks to reduce manufacturing 
                costs - creating the T-shirt. We've supplied the world as the T-shirt has evolved from underwear to outerwear, from symbol 
                of youthful rebellion to everyday wardrobe staple, and we've spent decades refining its every last aspect.
                </p>
                <ol className='list'>
                    <li className='list'>Be an ecowear</li>
                    <li className='list'>Sophisticated and not mass-produced</li>
                    <li className='list'>Only natural materials
                    </li>
                </ol>
                <img className='Values_img' src="https://gatsby-ecommerce-theme.netlify.app/about2.png?imgcdn=true" alt="" />
            </div>
        </div>
    )
}

export default Values
