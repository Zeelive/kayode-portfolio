import React, {useEffect} from 'react';
import './home.css';
import { FiFacebook } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

  useEffect (()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section classname="home">
      
      <div className='homeContent container'>
        <div data-aos="zoom-in" className='textDiv'>
          <span className='smallText'>
            Hi, my name is
          </span>

          <h1 className='homeTitle'>
            Olaiya Kayode
          </h1>
          <p>I'm a full-time frontend developer with a passion for great design and user experience</p>
        </div>

        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="homeFooterIcons">
          <div  className="rightIcons">
            <a href="https://www.facebook.com/kayode.olaiya.12" target='_blank' rel="noreferrer"  className='social'>
              <FiFacebook className="icon" />
            </a>
            <a href="https://www.twitter.com/realbig_zee" target='_blank' rel="noreferrer"  className='social'>
              <FiTwitter className="icon" />
            </a>
            <a href="https://www.instagram.com/i.m_zee/" target='_blank' rel="noreferrer"  className='social'>
              <FiInstagram className="icon" />
            </a>
            <a href="https://linkedin.com/in/kayode-olaiya-0a0148196" target='_blank' rel="noreferrer"  className='social'>
              <FiLinkedin className="icon" />
            </a>
          </div>
        </div>
      </div>


    </section>
  )
}

export default Home