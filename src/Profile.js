import React, { useEffect, useState } from 'react';
import './Profile.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Profile() {

  

    useEffect(() => {
        AOS.init();
      }, [])
      
    return (
        <>
            <section data-aos="fade-down" data-aos-duration="1500" className="profile">
                <div className='notes'>
                        <p>all resource assets are from Google, if you feel offended because i use your art/what you made, i am sorry
                            <br/>feel free to email me on zulfikrimirza3@gmail.com, i will remove it immediately
                        </p>
                </div>
                <div className="profile__content">
                    <div className="typing-animation">
                        <h1 className="profile__title 2xl:text-4xl md:text-base xl:text-2xl">
                            ZULFIKRI MIRZA
                        </h1>

                        <span className='text-lg font-semibold'></span>
                        <span className='cursor'>&nbsp;</span>
                    </div>
                </div>

            </section>
        </>
    );
}