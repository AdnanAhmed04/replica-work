import React from 'react';
import { Link } from 'react-scroll';
import './AboutNav.css'; // Import the CSS file

const AboutNav = () => {
  return (
    <nav className="nav">
      <ul className="ul">
        <li className="li">
          <Link
            activeClass="active"
            to="history"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="link_about"
          >
            HISTORY
          </Link>
        </li>
        <li className="li">
          <Link
            activeClass="active"
            to="values"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="link_about"
          >
            VALUES
          </Link>
        </li>
        <li className="li">
          <Link
            activeClass="active"
            to="sustainability"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="link_about"
          >
            SUSTAINABILITY
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AboutNav;
