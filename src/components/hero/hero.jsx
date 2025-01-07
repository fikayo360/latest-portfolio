import { Link } from 'react-router-dom';
import './hero.css'
import { useState,useEffect,useRef } from 'react'
import AutoPlay from '../track/track';

const Hero = () => {
    const [isNavActive, setIsNavActive] = useState(false)

    const toggleNav = () => {
        setIsNavActive((prev) => !prev)
    }

    return (
        <section id='hero'>
            
            { isNavActive? <div id='navMobile'>
                <div id='nMobileWrap'>
                    <div id='nMobileHead'><h1 className='fs-500'>fikayo.</h1><img src='close.png' onClick={toggleNav}/></div>
                    <ul>
                    <li className='fs-700'><Link to="/articles">articles</Link></li>
                    <li className='fs-700'><a href="/#projects">projects</a></li>
                    <li className='fs-700'><a href='/#skills'>skills</a></li>
                    </ul>
                </div>
            </div>:null }

            <div id='heroWrap'>
                <nav>
                    <div id='navWrap'>
                        <h1 className='fs-400'>Fikayo</h1>
                        <ul>
                            <li><Link to="/articles">articles</Link></li>
                            <li><a>projects</a></li>
                            <li><a>skills</a></li>
                        </ul>
                        <img src='burger.png' onClick={toggleNav}/>
                    </div>

                </nav>
                
                <div class="text-track-container">
                <div class="text-track">Frontend  <span className='fadeTrack'>Backend</span>  Mobile-apps  <span className='fadeTrack'>Web scrapping</span> Automations
                React <span className='fadeTrack'>NodeJs</span> typescript <span className='fadeTrack'>javascript</span> relationalDB <span className='fadeTrack'></span>scaling 
                deployment</div>
                </div>

                <p className='fs-800'>Hi, I’m Fikayo, a Nigerian software engineer currently residing in Lagos state Nigeria. with experience in building and deploying web applications, mobile applications, and 
                server side applications (APis, Clis, and bots), Web scrapping and browser automation. I love to push myself and I am always looking for new challenges and opportunities to learn and grow.
                So, whether you're looking for a skilled developer to tackle your next project or simply someone passionate about the future of web development, I'd love to connect.
                </p>

            </div>
        </section>
    )
}

export default Hero