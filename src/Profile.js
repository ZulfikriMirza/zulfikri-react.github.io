import React, { useEffect, useState } from 'react';
import './Profile.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import instagram from "./assets/instagram.png"
import linkedln from "./assets/linkedln-white.png"


export default function Profile() {

  

    useEffect(() => {
        AOS.init();
      }, [])
      
    return (
        <>
            <section  className="profile">
                <div className='notes'>
                        <p>all resource assets are from Google, if you feel offended because i use your art/what you made, i am sorry
                            <br/>feel free to email me on zulfikrimirza3@gmail.com, i will remove it immediately
                        </p>
                </div>
                <div className="profile__content">

                        <h1 className="profile__title 2xl:text-4xl md:text-base xl:text-2xl font-serif">
                            ZULFIKRI MIRZA
                        </h1>
                        <p className='profile__opening 2xl:text-xl xl:text-base md:text-sm font-serif'>Highly motivated and diligent software engineer with a strong will to succeed and a passion for continuous learning. Equipped with a genuine curiosity for emerging technologies, I am always eager to expand my knowledge base.</p>
                        <div data-aos="fade-left" data-aos-duration="2500">
                            <div className="Profile__Contact ">

                                <a href="https://www.instagram.com/fikri.mirzaa3/" target="_blank" className='instagram__button rounded-lg'>
                                    <img src={instagram} alt='Instagram'></img>
                                </a>

                                <a href="https://www.linkedin.com/in/zulfikri-mirza-11a7061a2/" target="_blank" className="linkedln__button rounded-lg">
                                    <img src={linkedln} alt='Linkedln'></img>
                                </a>

                            </div>
                    </div>
                </div>


            </section>
        </>
    );
}