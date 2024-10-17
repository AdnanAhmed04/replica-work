import { Link } from "react-router-dom";
import "./AllEssentials.css"; // Import the CSS for styling

const AllEssentials = () => {
  return (
    <div className="essentials-banner">
      <div className="essentials-content">
        <h1 className="off">-50% off</h1>
        <h1>All Essentials</h1>
      </div>
      <div className="essentials-links">
      <p>
        <a href="/Shop" className="link">WOMAN</a>
        </p>
        <p>

        <a href="/Shop" className="link">MAN</a>
        </p>
    
      </div>
    </div>
  );
};

export default AllEssentials;
