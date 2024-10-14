import './journal.css';


import Standard from './Standard'
import Journal_cards from './Journal_cards';

import JournalNav from './Journalnav';


import Friends from '../Friends_of_Sydney/Friends';

const cardsData = [
  {
    image: 'https://gatsby-ecommerce-theme.netlify.app/blogs/blog1.png?imgcdn=true',
    heading: 'Design',
    subheading: 'The new standard of Opening and Closing',
    description: `London-based seasonal British flowers and UK producers in her beautiful and sustainable 
    creations. This season, we worked with Flora to style Sunspel stores for Christmas, for which she 
     eye-catching sustainably sourced wreaths.`,
  },
  {
    image: 'https://gatsby-ecommerce-theme.netlify.app/blogs/blog2.png?imgcdn=true',
    heading: 'Design',
    subheading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    description: `London-based seasonal British flowers and UK producers in her beautiful and sustainable 
    creations. This season, we worked with Flora to style Sunspel stores for Christmas, for which she 
     eye-catching sustainably sourced wreaths.`,
  },
  {
    image: 'https://gatsby-ecommerce-theme.netlify.app/blogs/blog3.png?imgcdn=true',
    heading: 'Design',
    subheading: 'It is a long established fact that a reader by the readable',
    description: `London-based seasonal British flowers and UK producers in her beautiful and sustainable 
    creations. This season, we worked with Flora to style Sunspel stores for Christmas, for which she 
     eye-catching sustainably sourced wreaths.`,  },
     {
      image: 'https://gatsby-ecommerce-theme.netlify.app/blogs/blog1.png?imgcdn=true',
      heading: 'Design',
      subheading: 'The new standard of Opening and Closing',
      description: `London-based seasonal British flowers and UK producers in her beautiful and sustainable 
      creations. This season, we worked with Flora to style Sunspel stores for Christmas, for which she 
       eye-catching sustainably sourced wreaths.`,
    },
    {
      image: 'https://gatsby-ecommerce-theme.netlify.app/blogs/blog2.png?imgcdn=true',
      heading: 'Design',
      subheading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      description: `London-based seasonal British flowers and UK producers in her beautiful and sustainable 
      creations. This season, we worked with Flora to style Sunspel stores for Christmas, for which she 
       eye-catching sustainably sourced wreaths.`,
    },
    {
      image: 'https://gatsby-ecommerce-theme.netlify.app/blogs/blog3.png?imgcdn=true',
      heading: 'Design',
      subheading: 'It is a long established fact that a reader by the readable',
      description: `London-based seasonal British flowers and UK producers in her beautiful and sustainable 
      creations. This season, we worked with Flora to style Sunspel stores for Christmas, for which she 
       eye-catching sustainably sourced wreaths.`,  },
];

const Journal = () => {
  return (
    <div>
      {/* <Standard/>
      <JournalNav/>
      <Journal_cards cardsData={cardsData} /> */}
      <Friends/>

    </div>
  )
}

export default Journal
