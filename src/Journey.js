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

                <div data-aos="fade-right" data-aos-duration="1500" className="Journey__Experience grid gap-16 md:gap-8">
                    <h2 className='Experience__title 2xl:text-4xl xl:text-2xl md:text-base font-bold'>Work and Organization Experience!</h2>
                    <ul className='Experience__list list-disc list-inside'>
                        <li>
                        6 Months as Lab Assistant of Digital Image Processing in Institut Teknologi Nasional Bandung (Feb 2020 - Jul 2020)
                        </li>
                        <li>
                            Helping Road to PPI Program that Held by Perhimpunan Pelajar Indonesia in Hungary in Dec 2019 - Jan 2020
                        </li>
                        <li>
                            7 Months as Head Of Public Relations in Himpunan Mahasiswa Informatika Itenas (Jun 2020 - Jan 2021)
                        </li>
                        <li>
                            Study Abroad Scholarship awardee in 2019 to study in Szent Istvan University(Known as M.A.T.E Today) Godollo, Hungary. funded by Erasmus and Dikti Indonesia, Organized by Institut Teknologi Nasional Bandung
                        </li>
                        <li>
                            3 Months Internship as Web Deloper using Laravel Framework in PT Teknologi Wirausaha Bangsa (Jul 2020 - Sep 2020)
                        </li>
                        <li>
                            1 Years Internship as Student Internship in PT Hexadata Primakom (Mar 2021 - Feb 2022)
                        </li>
                        <li>
                            Currently Working as Helpdesk Remittance Operation Application Layer 1 in PT Pos Indonesia (Persero) for 1 year contract (Sep 2022 - August 2023)
                        </li>
                    </ul>
                </div>
                <div className="Journey__Skill__Content grid gap-8">
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
                    
                </div>
            </div>
        </section>
    );
}