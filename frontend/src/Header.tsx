import React from 'react';
import './App.css';

function Header(props: any) {
  return (
    <header>
      <h1>{props.title}</h1>
      <h3>{props.subtitle}</h3>
    </header>
  );
}

export default Header;
