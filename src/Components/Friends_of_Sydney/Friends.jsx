import React from 'react';
import './Friends.css';
import { CiTwitter, CiFacebook } from "react-icons/ci";
import { PiLetterCircleP } from "react-icons/pi";

const Friends = () => {
    return (
        <div className="container">
            <div className="header-text">
                <p>Design</p>
                <h1>Friends of Sydney: Flora Fricker</h1>
            </div>

            <div className="section">
                <img
                    className="main-image"
                    src="https://gatsby-ecommerce-theme.netlify.app/blogFeatured.png?imgcdn=true"
                    alt="Flora Fricker"
                />
                <div className="friend_info">
                    <h2>London-based floral designer Flora Fricker champions seasonal British flowers and UK producers
                        in her beautiful and sustainable creations. This season, we worked with Flora to style Sunspel
                        stores for Christmas, for which she produced eye-catching sustainably sourced wreaths.</h2>
                    <p>Delaware limited liability company (The Sydney) collects personal information that you voluntarily provide
                        when applying or registering for an account with The Upside or making a purchase on The Upside website;
                        www.theupside.com (the Website).</p>

                    <p>This Privacy Policy (Privacy Policy) outlines how your information is collected, used and
                        disclosed when you access or use our Services as defined in our Terms. This information
                        is collected, used and disclosed in accordance with the Privacy Act 1988 (Cth) (Privacy Act).</p>

                    <p>This Privacy Policy is incorporated by reference into our Terms. Any capitalized terms
                        not defined in this Policy are defined in the Terms. You agree to comply with all
                        Terms when accessing or using our Services, including this Privacy Policy.</p>
                </div>
            </div>

            <div className="image-row">
                <img className="friend_image" src="https://gatsby-ecommerce-theme.netlify.app/cloth.png?imgcdn=true" alt="Cloth Image" />
                <img className="friend_image" src="https://gatsby-ecommerce-theme.netlify.app/collections/collection1.png?imgcdn=true" alt="Model Image" />
            </div>

            <div className="section2">
                <h2>2. Lorem ipsum</h2>
                <p>Our Services, including but not limited to the registration of an account with us or placing of an order,
                    is not intended to be used by children under the age of 13. When a visitor indicates an age under 13,
                    the registration process for The Upside website cannot be completed, and no personally identifying
                    information is collected in conjunction with that attempted submission except that we retain e-mail
                    addresses of such persons (and record of access attempts) for purposes of denying registration.
                    Otherwise, we do not knowingly collect personally identifiable information from visitors under the
                    age of 13.</p>

                <p>If you are under 18, any use of our Services must be with the involvement of a parent or
                    guardian. By accessing or using our Website, you warrant and represent to us that you are over the
                    age of 18 years and you have the right, authority and legal capacity to enter into a legally binding
                    agreement and to abide by this Privacy Policy.</p>

                <p>The Upside collects, uses and discloses information regarding users aged 13-18 in the same manner
                    as it does for adults.</p>
            </div>
            <div className="lower">
                <p>Share with:</p>
                <div className="friend_icon">
                    <CiTwitter />
                    <CiFacebook />
                    <PiLetterCircleP />
                </div>
                <button className="friend_btn">BACK TO BLOG</button>
            </div>
        </div>
    );
};

export default Friends;
