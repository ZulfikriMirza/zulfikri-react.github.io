import React, { useEffect } from 'react';
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

                <div className = "profile__content">
                <h1 className="profile__title">ZULFIKRI MIRZA</h1>
                </div>
            </section>
        </>
    );
}