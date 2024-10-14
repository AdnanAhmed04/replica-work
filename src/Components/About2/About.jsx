import React from 'react'


import BrandSection from './BrandSection'
import Found from './Found'
import Values from './Values'
import Sustainability from './Sustainability'
import Image_comp from './image_comp'
import AboutNav from './About_nav'

const About_page = () => {
  return (
    <div>
<BrandSection/>
<AboutNav/>

<Found/>
<Values/>
<Sustainability/>
<Image_comp/>
      
    </div>
  )
}

export default About_page
