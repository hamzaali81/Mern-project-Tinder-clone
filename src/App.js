import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import SwipeButton from './Components/SwipeButton/SwipeButton';
import TinderCards from './Components/TinderCards/TinderCards';


function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* TinderCards */}
      <TinderCards /> 
      {/* SwipeButtons */}
      <SwipeButton />
    </div>
  );
}

export default App;
