import React from 'react';
import not from "./assets/not.png"
import github from "./assets/github.png"
import './Project.css'

export default function Project() {
    return(
        <>
            <section className="project">

                <div className = "project__content">
                    <h1 className="project__title">LAST PROJECT THAT I MADE</h1>
                    <div className="project__card">
                        <div className="card">
                        <img src={not} className="card-img-top" alt="notfound" />
                        <h3>On Developing Progress</h3>
                        </div>

                        <div className="card">
                        <img src={not} className="card-img-top" alt="notfound" />
                        <h3>On Developing Progress</h3>
                        </div>

                        <div className="card">
                        <img src={not} className="card-img-top" alt="notfound" />
                        <h3>On Developing Progress</h3>
                        </div>


                    </div>
                    <div className="project__button">
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