
import './App.css';
import React, { useEffect } from 'react';
import citynight from "./assets/citynight.png"
import Profile from './Profile';
import Journey from './Journey';
import Project from './Project';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <img data-aos="fade-down" data-aos-duration="1000" className="profile__background" src={citynight} alt="background" />
      <div className="container">
        <Profile />
        <Journey />
        <Project />
      </div>
    </>
  );
}

export default App;
