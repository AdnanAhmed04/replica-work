import React from 'react';
import { Link } from 'react-scroll';
import './JournalNav.css'; // Import the CSS file

const JournalNav = () => {
  return (
    <nav className="nav">
      <ul className="ul">
        <li className="li">
          <Link
            activeClass="active"
            to="all-posts"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="link"
          >
            ALL POSTS
          </Link>
        </li>
        <li className="li">
          <Link
            activeClass="active"
            to="design"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="link"
          >
            DESIGN
          </Link>
        </li>
        <li className="li">
          <Link
            activeClass="active"
            to="collaboration"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="link"
          >
            COLLABORATION
          </Link>
        </li>
        <li className="li">
          <Link
            activeClass="active"
            to="interview"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="link"
          >
            INTERVIEW
          </Link>
        </li>
        <li className="li">
          <Link
            activeClass="active"
            to="news"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="link"
          >
            NEWS
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default JournalNav;
