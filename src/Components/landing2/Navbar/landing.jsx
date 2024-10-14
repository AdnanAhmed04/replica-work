
// Import your components with the correct paths
// import Essentials from './Components/landing/Essentials/Essentials';


import Essentials from '../Essentials/Essentials'
import Collection from '../Collection/Collection'
import Knitwear from '../Knitwear/Knitwear'
import AllEssentials from '../All_Essentials/AllEssentials'
import Journal_cards from '../Journal/Journal'
import Sustainable from '../Sustainable/Sustainable'
import StyledByYou from '../Styled/Styled'
import Features from '../Features/Features'
import Arrivals from '../Arrivals/Arrivals'


// import About from '../../landing/about_Sydney/about'

// Correcting this import

const Landing = () => {
  ;

  return (
    <div>
      <Essentials />
      {/* <Collection /> */}
      <Arrivals/>
      <Knitwear />
      <AllEssentials />
      {/* <About /> */}
      <Journal_cards />
      <Sustainable />
      <StyledByYou />
      <Features />
    </div>
  );
};

export default Landing;
