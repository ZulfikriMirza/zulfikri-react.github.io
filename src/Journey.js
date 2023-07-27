import React, { useEffect } from 'react';
import instagram from "./assets/instagram.png"
import linkedln from "./assets/linkedln-white.png"
import './Journey.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Journey() {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <section className="Journey">
            <h1 data-aos="fade-down" data-aos-duration="1000">My Life Journey !</h1>
            <div className="Journey__content">

                <div data-aos="fade-right" data-aos-duration="1500" className="Journey__Experience">
                    <h2>Work and Organization Experience!</h2>
                    <ul>
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
                <div className="Journey__Skill__Content">
                    <div data-aos="fade-left" data-aos-duration="2000" className="Journey__Skill">
                    <h2>My Current Skill!</h2>
                    <ul>
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
                    <div data-aos="fade-left" data-aos-duration="2500">
                        <h2>My Media Social Account !</h2>
                        <div className="Jourey__Contact">

                        <li>
                            <img src={instagram} alt='Instagram'></img>
                        </li>
                        <li>
                            <img src={linkedln} alt='Linkedln'></img>
                        </li>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}