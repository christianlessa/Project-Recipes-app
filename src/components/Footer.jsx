import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  return (
    <footer
      style={ { position: 'fixed', bottom: '0px' } }
      data-testid="footer"
    >
      <Link to="/drinks">
        <img
          data-testid="drinks-bottom-btn"
          src={ drinkIcon }
          alt="drinkIcon"
        />
      </Link>

      <Link to="/explore">
        <img
          data-testid="explore-bottom-btn"
          src={ exploreIcon }
          alt="exploreIcon"
        />
      </Link>

      <Link to="/foods">
        <img
          data-testid="food-bottom-btn"
          src={ mealIcon }
          alt="mealIcon"
        />
      </Link>
    </footer>
  );
}

export default Footer;
