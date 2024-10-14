import './Collection.css'; // Import the CSS file for styling
import Card from './Cards';  // Import the Card component

const Collection = () => {
  // Sample card data
  const cardData = [
    {
      image: 'https://gatsby-ecommerce-theme.netlify.app/collections/collection1.png?imgcdn=true',
      title: 'Men',
      link: 'https://example.com/shop/product1'
    },
    {
      image: 'https://gatsby-ecommerce-theme.netlify.app/collections/collection2.png?imgcdn=true',
      title: 'Women',
      link: 'https://example.com/shop/product2'
    },
    {
      image: 'https://gatsby-ecommerce-theme.netlify.app/collections/collection3.png?imgcdn=true',
      title: 'Accessories',
      link: 'https://example.com/shop/product3'
    }
    , {
      image: 'https://gatsby-ecommerce-theme.netlify.app/collections/collection4.png?imgcdn=true',
      title: 'Simple Cotton',
      link: 'https://example.com/shop/product3'
    }
  ];

  return (
    <div className='Collection_div'>
      <div className='top_div_col'>
        <p className='para '>
          This is a demonstration of the Sydney theme for verse by <span className='uniq'>matter design.</span>
          Wear by <span className='uniq'> Sunspel </span>and<span className='uniq'> Scotch & Soda.</span>
        </p>
        <h1 className=''>New Collection</h1>
      </div>

      <div className="Collection_card">
        <div className="card-container">
          {cardData.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              title={card.title}
              link={card.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
