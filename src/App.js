import React from 'react';
import Header from './components/Header/Header';
import AboutUs from './components/AboutUs/AboutUs';
import Price from './components/Price/Price';
import Advantages from './components/Advantages/Advantages';
import Reviews from './components/Reviews/Reviews';
import Contacts from './components/Contacts/Contacts';
import "./App.css"

const App = () => {
  return (
    <div>
      <Header />
      <AboutUs />
      <Price />
      <Advantages/>
      <Reviews />
      <Contacts />
    </div>
  );
};

export default App;