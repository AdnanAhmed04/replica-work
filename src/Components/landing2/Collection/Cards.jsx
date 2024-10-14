import { Link } from 'react-router-dom';
import './Collection.css'; // Use the same CSS for styling

// Card component that accepts props for image, title, and link
const Card = ({ image, title, link }) => {
  return (
    <>
    <Link to={"/shop"}>
    <div className="card image-container" style={{ backgroundImage: `url(${image})` }}>
      <div className="card-content ">
        <h2 className="card-title">{title}</h2>
        <div href={link} className="shop-now-link" target="_blank" rel="noopener noreferrer">
          Shop Now
        </div>
      </div>
    </div>
    </Link>
    </>
  );
};

export default Card;
