import React, {useEffect} from 'react';
import './main.css';
import img from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import javascript from '../../assets/javascript.png';
import react from '../../assets/react.png';
import sass from '../../assets/sass.png';
import bootstrap from '../../assets/bootstrap.png';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Matour Travel and Tour",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita vitae id amet totam in ratione voluptatibus cum. Esse in nihil quae temporibus quod, ipsam cum explicabo cupiditate sit quam iure.",
    view: "https://matour.netlify.app/"
  },

  {
    id: 2,
    imgSrc: img2,
    destTitle: "Data Finance App",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita vitae id amet totam in ratione voluptatibus cum. Esse in nihil quae temporibus quod, ipsam cum explicabo cupiditate sit quam iure.",
    view: "https://kayodedata.netlify.app/"
  },

  {
    id: 3,
    imgSrc: img3,
    destTitle: "ZeeLive Javascript Clock",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita vitae id amet totam in ratione voluptatibus cum. Esse in nihil quae temporibus quod, ipsam cum explicabo cupiditate sit quam iure.",
    view: "https://zeeliveclock.netlify.app/"
  },
]

const Main = () => {

  useEffect (()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className='main container section' id='project'>
      <div className="secTitle" >
        <h3 data-aos="fade-down" className='title' >
          Projects
        </h3>
      </div>

      <div data-aos="fade-right" className="projectParagraph">
          Check out a few of the main projects I have worked on.    
      </div>

      <div className="secContent grid">
      {
           Data.map(({id, imgSrc, destTitle, description, view})=> {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button  className="btn flex">
                    <a href={view} target='_blank' rel="noreferrer">VIEW</a> 
                  </button>
                </div>
              </div>
            )
           })    
        }
      </div>

      <div className="secTitle2" id='about'>
        <h3 data-aos="fade-right" className='title2'>
          About
        </h3>
      </div>
      <div data-aos="fade-up" className="aboutParagraph">
        My name is Olaiya Kayode Azeez. I live in Lagos, Nigeria, and I'm a self-taught front-end developer. I enjoy the constant change in the technologies used in the area and I love diving into new frameworks and technologies
      </div>

      <div data-aos="fade-up" className="iTech flex">
        Tech I Enjoy
      </div>
      <div data-aos="fade-up" className='aboutImg'>
        <img src={html} alt="" className='tech' />
        <img src={css} alt="" className='tech' />
        <img src={javascript} alt="" className='tech' />
        <img src={react} alt="" className='tech' />
        <img src={sass} alt="" className='tech' />
        <img src={bootstrap} alt="" className='tech' />
      </div>
    </section>
  )
}

export default Main