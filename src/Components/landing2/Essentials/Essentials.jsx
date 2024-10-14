import { Link } from 'react-router-dom';
import './Essentials.css';

const Essentials = () => {
  return (
    <div className="essentials-container">
      <div className="background-image" />
      <div className="overlay">
        <h1>Essentials for a cold winter</h1>
        <p>Discover Autumn Winter 2021</p>
        <Link to="/shop">
    <button>SHOP NOW</button>
</Link>
      </div>
    </div>
  );
};

export default Essentials;
