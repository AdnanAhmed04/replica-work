
// // Import your components with the correct paths
// // import Essentials from './Components/landing/Essentials/Essentials';


// // import Essentials from '../Essentials/Essentials'
// // import Collection from '../Collection/Collection'
// // import Knitwear from '../Knitwear/Knitwear'
// // import AllEssentials from '../All_Essentials/AllEssentials'
// // import Journal_cards from '../Journal/Journal'
// // import Sustainable from '../Sustainable/Sustainable'
// // import StyledByYou from '../Styled/Styled'
// // import Features from '../Features/Features'
// // import Arrivals from '../Arrivals/Arrivals'
// // import About from '../about_Sydney/about'


// // import About from '../../landing/about_Sydney/about'

// // Correcting this import
// import Essentials from '../../Components/landing2/Essentials/Essentials'
// import Collection from '../../Components/landing2/Collection/Collection'
// import Knitwear from '../../Components/landing2/Knitwear/Knitwear'
// import AllEssentials from '../../Components/landing2/All_Essentials/AllEssentials'
// import Journal_cards from '../../Components/landing2/Journal/Journal'
// import Sustainable from '../../Components/landing2/Sustainable/Sustainable'
// import StyledByYou from '../../Components/landing2/Styled/Styled'
// import Features from '../../Components/landing2/Features/Features'
// import Arrivals from '../../Components/landing2/Arrivals/Arrivals'
// import About from '../../Components/landing2/about_Sydney/about'
// import { useEffect } from 'react'
// import { useSearchParams } from 'react-router-dom'
// import { scroller } from 'react-scroll'
// const Landing = () => {
//   const [searchParams] = useSearchParams();
//     const scrollToSection = searchParams.get("scroll");
//   useEffect(()=>{
    
   
//       if (scrollToSection) {
//         scroller.scrollTo(scrollToSection, {
//           duration: 800,
//           delay: 0,
//           smooth: 'easeInOutQuart',
//           offset: -50, // Optional: Adjust if you have a fixed header
//           });
//     }
//   },[])

//   return (
//     <div>
//       <Essentials />
//       <Collection />
//       <Arrivals/>
//       <Knitwear />
//       <AllEssentials />
//       <About />
//       <Journal_cards />
//       <Sustainable />
//       <StyledByYou />
//       <Features />
//     </div>
//   );
// };

// export default Landing;
// src/Landing.js
import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { scroller, Element } from 'react-scroll';

// Import your components
import Essentials from '../../Components/landing2/Essentials/Essentials';
import Collection from '../../Components/landing2/Collection/Collection';
import Knitwear from '../../Components/landing2/Knitwear/Knitwear';
import AllEssentials from '../../Components/landing2/All_Essentials/AllEssentials';
import Journal_cards from '../../Components/landing2/Journal/Journal';
import Sustainable from '../../Components/landing2/Sustainable/Sustainable';
import StyledByYou from '../../Components/landing2/Styled/Styled';
import Features from '../../Components/landing2/Features/Features';
import Arrivals from '../../Components/landing2/Arrivals/Arrivals';
import About from '../../Components/landing2/about_Sydney/about';

const Landing = () => {
  const [searchParams] = useSearchParams();
  const scrollToSection = searchParams.get('scroll'); // E.g., 'Arrivals', 'Essentials'

  useEffect(() => {
    if (scrollToSection) {
      // Scroll to the matching section if it exists
      scroller.scrollTo(scrollToSection, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -50, // Adjust for fixed headers
      });
    }
  }, [scrollToSection]);

  return (
    <div>
      {/* Wrap each section with Element and give it a matching name */}
      <Element name="Essentials">
        <Essentials />
      </Element>

      <Element name="Collection">
        <Collection />
      </Element>

      <Element name="Arrivals">
        <Arrivals />
      </Element>

      <Element name="Knitwear">
        <Knitwear />
      </Element>

      <Element name="AllEssentials">
        <AllEssentials />
      </Element>

      <Element name="About">
        <About />
      </Element>

      <Element name="Journal">
        <Journal_cards />
      </Element>

      <Element name="Sustainable">
        <Sustainable />
      </Element>

      <Element name="Styled">
        <StyledByYou />
      </Element>

      <Element name="Features">
        <Features />
      </Element>
    </div>
  );
};

export default Landing;