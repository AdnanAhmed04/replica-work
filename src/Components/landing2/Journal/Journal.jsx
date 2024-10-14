import { Link } from 'react-router-dom';
import './Journal.css';

const journalData = [
  {
    id: 1,
    imgSrc: 'https://gatsby-ecommerce-theme.netlify.app/blogs/blog1.png?imgcdn=true', // Replace with actual image URL
    title: 'The new standard of Opening and Closing',
    category: 'Design',
  },
  {
    id: 2,
    imgSrc: 'https://gatsby-ecommerce-theme.netlify.app/blogs/blog2.png?imgcdn=true', // Replace with actual image URL
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    category: 'Design',
  },
  {
    id: 3,
    imgSrc: 'https://gatsby-ecommerce-theme.netlify.app/blogs/blog3.png?imgcdn=true', // Replace with actual image URL
    title: 'It is a long established fact that a reader by the readable',
    category: 'Design',
  },
];

const Journal = () => {
  return (
    <>

      <div className="journal-container">
        <h2 className="journal-heading">Journal</h2>
        <p className="journal-subheading">Notes on life and style</p>
        <Link className="journal_main" to="/Friends">

          <div className="journal-grid">
            {journalData.map((item) => (
              <div className="journal-item" key={item.id}>
                <img src={item.imgSrc} alt={item.title} className="journal-image" />
                <p className="journal-category">{item.category}</p>
                <h1 className="journal-title">{item.title}</h1>
              </div>
            ))}
          </div>
          </Link >

      </div>

    </>
  );
};

export default Journal;
