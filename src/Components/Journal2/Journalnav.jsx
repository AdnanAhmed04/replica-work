import React from 'react';

import './JournalNav.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const JournalNav = () => {
  return (
    <nav className="nav">
      <ul className="ul">
        <li className="journal_nav_li">
          <Link
            to="/friends"
            className="link"
          >
            ALL POSTS
          </Link>
        </li>
        <li className="li">
          <Link
            to="/friends"
            className="link"
          >
            DESIGN
          </Link>
        </li>
        <li className="li">
          <Link
            to="/friends"
            className="link"
          >
            COLLABORATION
          </Link>
        </li>
        <li className="li">
          <Link
            to="/friends"
            className="link"
          >
            INTERVIEW
          </Link>
        </li>
        <li className="li">
          <Link
            to="/friends"
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
