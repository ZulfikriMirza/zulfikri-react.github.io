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
                    <h1 data-aos="fade-down" data-aos-duration="1500" className="project__title">LAST PROJECT THAT I MADE</h1>
                    <div className="project__card">
                        <div data-aos="fade-down" data-aos-duration="800" className="card">
                            <img src={not} className="card-img-top" alt="notfound" />
                            <h3>On Developing Progress</h3>
                        </div>

                        <div data-aos="fade-down" data-aos-duration="600" className="card">
                            <img src={not} className="card-img-top" alt="notfound" />
                            <h3>On Developing Progress</h3>
                        </div>

                        <div data-aos="fade-down" data-aos-duration="400" className="card">
                            <img src={not} className="card-img-top" alt="notfound" />
                            <h3>On Developing Progress</h3>
                        </div>


                    </div>
                    <div data-aos="fade-down" data-aos-duration="200" className="project__button">
                        <div className='project__btn'>
                        <a href="https://google.com" class="button">Check More on my Github!
                        <img src={github} alt="github" />
                        </a>
                        </div>
                    </div>
                </div>


                </section>
        </>
    );

}