import './Journal_cards.css';

const cardsData = [
  {
    image: 'https://gatsby-ecommerce-theme.netlify.app/blogs/blog1.png?imgcdn=true',
    altText: 'Alt text for image 1',
    heading: 'The new standard of Opening and Closing',
    subheading: 'Design',
    para:`London-based seasonal British flowers and UK producers in her beautiful and sustainable creations.
    This season, we worked with Flora to style Sunspel stores for Christmas, for which she produced eye-catching
     sustainably sourced wreaths.`,
  },
  {
    image: 'https://gatsby-ecommerce-theme.netlify.app/blogs/blog2.png?imgcdn=true',
    altText: 'Alt text for image 2',
    heading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    subheading: 'Design',
    para:`London-based seasonal British flowers and UK producers in her beautiful and sustainable creations.
    This season, we worked with Flora to style Sunspel stores for Christmas, for which she produced eye-catching
     sustainably sourced wreaths.`,
  },
  {
    image: 'https://gatsby-ecommerce-theme.netlify.app/blogs/blog3.png?imgcdn=true',
    altText: 'Alt text for image 3',
    heading: 'It is a long established fact that a reader by the readable',
    subheading: 'Design',
    para:`London-based seasonal British flowers and UK producers in her beautiful and sustainable creations.
     This season, we worked with Flora to style Sunspel stores for Christmas, for which she produced eye-catching
      sustainably sourced wreaths.`,
  },
];

const Journal_cards = () => {
  return (
    <div className="journal-cards-container">
      {cardsData.map((card, index) => (
        <div key={index} className="journal-card">
          <div className="journal-card-image">
            <img src={card.image} alt={card.altText} />
          </div>
          <div className="journal-card-content">
            <h4>{card.subheading}</h4>
            <h2>{card.heading}</h2>
            <p>{card.para}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Journal_cards;
