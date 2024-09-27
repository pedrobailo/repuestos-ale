import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <picture>
      <source media="(max-width: 600px)" srcSet="/images/banner_cut.jpg" />
      <img className="header-banner" src="/images/banner_cut_web.jpg" alt="Banner" />
    </picture>
  );
}

export default Header;
