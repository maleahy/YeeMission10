import React from 'react';
import './App.css';
import Header from './Header';
import BowlerList from './Bowlers/BowlerList';

function App() {
  return (
    <div className="App">
      <Header
        title="Welcome to my website!"
        subtitle="This site shows bowler information for the Marlins
        and Sharks."
      />
      <BowlerList />
    </div>
  );
}

export default App;
