import React, { useEffect } from 'react';
import not from "./assets/not.png"
import github from "./assets/github.png"
import './Project.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Project() {
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <>
            <section className="project">

                <div className = "project__content">
                    <h1 data-aos="fade-down" data-aos-duration="1500" className="project__title 2xl:text-4xl xl:text-2xl md:text-base">LAST PROJECT THAT I MADE</h1>
                    <div className="project__card">
                        <div data-aos="fade-down" data-aos-duration="800" className="card">
                            <img src={not} className="card-img-top" alt="notfound" />
                            <h3 className='2xl:text-4xl xl:text-2xl md:text-base'>On Developing Progress</h3>
                        </div>

                        <div data-aos="fade-down" data-aos-duration="600" className="card">
                            <img src={not} className="card-img-top" alt="notfound" />
                            <h3 className='2xl:text-4xl xl:text-2xl md:text-base'>On Developing Progress</h3>
                        </div>

                        <div data-aos="fade-down" data-aos-duration="400" className="card">
                            <img src={not} className="card-img-top" alt="notfound" />
                            <h3 className='2xl:text-4xl xl:text-2xl md:text-base'>On Developing Progress</h3>
                        </div>


                    </div>
                    <div data-aos="fade-down" data-aos-duration="200" className="project__button">
                        <div className='project__btn'>
                            <a href="https://github.com/ZulfikriMirza" target="_blank" className="w-[150px] h-[50px] flex justify-center align-center">
                                <img src={github} alt="github"/>
                            </a>
                        </div>
                    </div>
                </div>


                </section>
        </>
    );

}