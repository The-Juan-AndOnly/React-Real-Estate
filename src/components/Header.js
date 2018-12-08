import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="logo">Logo</div>
      <nav>
        <a href="/">Create Ads</a>
        <a href="/">About Us</a>
        <a href="/">Login</a>
        <button>Register</button>
      </nav>
    </header>
  );
};

export default Header;
