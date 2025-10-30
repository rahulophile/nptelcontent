// src/components/Header.jsx
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo-container">
        {/* Title ko update kar diya hai aur subtitle hata diya hai */}
        <h1 className="title">Ethical Hacking</h1>
      </div>
    </header>
  );
};

export default Header;