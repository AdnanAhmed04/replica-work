import './StyledByYou.css';

const StyledByYou = () => {
  const styledData = [
    {
      id: 1,
      imageUrl: 'https://gatsby-ecommerce-theme.netlify.app/social/socialMedia1.png?imgcdn=true',
      altText: 'Styled Look 1'
    },
    {
      id: 2,
      imageUrl: 'https://gatsby-ecommerce-theme.netlify.app/social/socialMedia2.png?imgcdn=true',
      altText: 'Styled Look 2'
    },
    {
      id: 3,
      imageUrl: 'https://gatsby-ecommerce-theme.netlify.app/social/socialMedia3.png?imgcdn=true',
      altText: 'Styled Look 3'
    },
    {
      id: 4,
      imageUrl: 'https://gatsby-ecommerce-theme.netlify.app/social/socialMedia4.png?imgcdn=true',
      altText: 'Styled Look 4'
    }
  ];

  return (
    <div className="styled-container">
      <h2>Styled by You</h2>
      <p>Tag @sydney to be featured.</p>
      <div className="styled-images-container">
        {styledData.map(item => (
          <div key={item.id}>
            <img src={item.imageUrl} alt={item.altText} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StyledByYou;
