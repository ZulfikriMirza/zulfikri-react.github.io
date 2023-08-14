import React, { useEffect } from 'react';

import './Journey.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Journey() {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <section className="Journey">
            <h1 className='Journey__title 2xl:text-8xl xl:text-4xl md:text-base' data-aos="fade-down" data-aos-duration="1000">My Life Journey !</h1>
            <div className="Journey__content flex justify-center ">

                <div className="Journey__Experience grid gap-16 md:gap-8">
                    <h2 data-aos="fade-down" data-aos-duration="1000" className='Experience__title 2xl:text-4xl xl:text-2xl md:text-base font-bold'>Work and Organization Experience!</h2>
                    <div className='timeline'>    
                        <ul className='Experience__list list-disc list-inside'>
                            <li>
                                <div className='timeline-content' data-aos="fade-right" data-aos-duration="1000">
                                    <h2 className='date'>Sep 2019 - Feb 2020</h2>
                                    <h1>Study Abroad Scholarship awardee</h1>
                                    <p>Study in Szent Istvan University(Known as M.A.T.E Today) Godollo, Hungary. funded by Erasmus and Dikti Indonesia,<br />Organized by Institut Teknologi Nasional Bandung</p>
                                    <p>Skill : English</p>
                                </div>
                            </li>
                            <li>
                                <div className='timeline-content' data-aos="fade-left" data-aos-duration="1000">
                                    <h2 className='date'>Dec 2019 - Jan 2020</h2>
                                    <h1>Leader of Food and Beverages Division in Road to PPI Program</h1>
                                    <p>Helping Road to PPI Program that Held by Perhimpunan Pelajar Indonesia in Hungary</p>
                                    <p>Skill : English, Communication</p>
                                </div>
                            </li>

                            <li>
                                <div className='timeline-content' data-aos="fade-right" data-aos-duration="1000">
                                    <h2 className='date'>Feb 2020 - Jul 2020</h2>
                                    <h1>Lab Assistant of Digital Image Processing</h1>
                                    <p>Teaching Informatics Students Digital Image Processing in Institut Teknologi Nasional Bandung</p>
                                    <p>Skill : Python, Deep Learning</p>
                                </div>
                            </li>

                            <li>
                                <div className='timeline-content' data-aos="fade-left" data-aos-duration="1000">
                                    <h2 className='date'>Jul 2020 - Sep 2020</h2>
                                    <h1>Internship as Web Deloper</h1>
                                    <p>Developing UntukMasarin.com using Laravel Framework in PT Teknologi Wirausaha Bangsa</p>
                                    <p>Skill : Laravel, HTML, CSS</p>
                                </div>
                            </li>

                            <li>
                                <div className='timeline-content' data-aos="fade-right" data-aos-duration="1000">
                                    <h2 className='date'>Jun 2020 - Jan 2021</h2>
                                    <h1>Head Of Public Relations Division</h1>
                                    <p>Himpunan Mahasiswa Informatika Itenas</p>
                                    <p>Skill : Communication</p>
                                </div>
                            </li>

                            <li>
                                <div className='timeline-content' data-aos="fade-left" data-aos-duration="1000">
                                    <h2 className='date'>Mar 2021 - Feb 2022</h2>
                                    <h1>Student Internship</h1>
                                    <p>Internship in PT Hexadata Primakom</p>
                                    <p>Skill : SQL</p>
                                </div>
                            </li>

                            <li>
                                <div className='timeline-content' data-aos="fade-right" data-aos-duration="1000">
                                    <h2 className='date'>Sep 2022 - August 2023</h2>
                                    <h1>Helpdesk Remittance Operation Application</h1>
                                    <p>Currently Working in PT Pos Indonesia (Persero) Under Outsourcing contract</p>
                                    <p>Skill : SQLServer, Analyzing Big Data</p>
                                </div>
                            </li>
                        
                        </ul>
                    </div>
                </div>

                {/* <div className="Journey__Skill__Content grid gap-8">
                    <div data-aos="fade-left" data-aos-duration="2000" className="Journey__Skill ">
                        <h2 className='Skill__title 2xl:text-4xl xl:text-2xl md:text-base font-bold'>My Current Skill!</h2>
                        <ul className='Skill__list list-disc list-inside mt-8'>
                            <li>
                            Programming Language: Python, PHP, SQL
                            </li>
                            <li>
                            Web Developing: Laravel Framework, Bootstrap, HTML, CSS, JS
                            </li>
                            <li>
                            Other: VSCode, Git, Microsoft SQL Management Studio
                            </li>
                        </ul>
                    </div>
                    
                </div> */}
            </div>
        </section>
    );
}