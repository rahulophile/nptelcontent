// src/components/Header.jsx
import React from 'react';
import LiveUsers from './LiveUsers'; // Naya component import karo
import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-content">
        <h1 className="title">Ethical Hacking</h1>
        <LiveUsers /> {/* Yahan component ko add kar diya */}
      </div>
    </header>
  );
};

export default Header;