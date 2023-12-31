
import './App.css';
import React, { useEffect, useState } from 'react';
import citynight from "./assets/citynight.png"
import Profile from './Profile';
import Journey from './Journey';
import Project from './Project';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [isLightMode, setIsLightMode] = useState(false)

  const toggleLightMode = () => {
    setIsLightMode((prevMode) => !prevMode);
  };

  useEffect(() => {

    const JourneyElements = document.querySelectorAll('.Journey');
    const ProjectElements = document.querySelectorAll('.project');
    const buttonElements = document.querySelectorAll('.button-toggle');
    
    const textColor = isLightMode ? 'black' : 'white';
    const bgColor = isLightMode ? 'white' : 'black';
    const buttonTextcolor = isLightMode ?  'white' : 'black';
    const buttonBgColor = isLightMode ? 'black' : 'white';


    JourneyElements.forEach((element) => {
      element.style.transition = 'color 0.5s, background-color 0.5s';
      element.style.color = textColor;
      element.style.backgroundColor = bgColor;
    });

    ProjectElements.forEach((element) => {
      element.style.transition = 'color 0.5s, background-color 0.5s';
      element.style.color = textColor;
      element.style.backgroundColor = bgColor;
  
    });



    buttonElements.forEach((element) => {
      element.style.transition = 'color 0.5s, background-color 0.5s';
      element.style.color = buttonTextcolor;
      element.style.backgroundColor = buttonBgColor;
    })
    localStorage.setItem('lightMode', JSON.stringify(isLightMode));
  }, [isLightMode])

  useEffect(() => {
    const savedLightMode = JSON.parse(localStorage.getItem('lightMode'));
    setIsLightMode(savedLightMode || false);
    AOS.init();
  }, [])

  

  return (
    <>
      <img data-aos="fade-in" data-aos-duration="1000" className="profile__background sm:h-[970px] md:h-[970px] lg:h-[1000px] xl:h-[970px]" src={citynight} alt="background" />
      <div>
        <button className='btn button-toggle' onClick={toggleLightMode}>
          {isLightMode ? 'Switch to Dark Mode': 'Switch to Light Mode'}
        </button>
      </div>
      <div className="container">

        <Profile />
        <Journey />
        <Project />

      </div>
    </>
  );
}

export default App;
