import React, {useRef, useEffect} from 'react';
import emailjs from '@emailjs/browser';
import './footer.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect (()=>{
    Aos.init({duration: 2000})
  }, [])

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_41kviao', 'template_au501es', form.current, 'olNfhe9UfHduFwJWo')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <section className='footer container section' id='contact'>
      <div className="secTitle">
        <h3 data-aos="fade-right" className='title'>
          Contact
        </h3>
      </div>

      <div data-aos="fade-up" className="footerParagraph">
        Do not hesistate to contact me through the form here or by direct email on olaiyakayode0@gmail.com regardless of the subject
      </div>


      <div data-aos="fade-down" className="form" >
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" id='name'  placeholder='Full name' name="user_name" required></input>
          
            <input type="email" id='email'  placeholder='Enter Email Address' name="user_email" required></input>
          
            <input type="text" id='subject' placeholder='Subject' name="subject"></input>
          
            <textarea rows="6" id='message' placeholder="Type Your Message Here" name="message" required />
           
            <button className="btn" type="submit">SUBMIT</button>
        </form>
    </div>
      
    </section>
  )
}

export default Footer