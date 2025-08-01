import React from 'react'
import './Contact.css'
import theme from '../../assets/theme_pattern.svg'
import mail from '../../assets/mail_icon.svg'
import location from '../../assets/location_icon.svg'
import call from '../../assets/call_icon.svg'
const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d1f4784e-2a88-447d-b35e-35e132539ec7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      console.log("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      console.log(data.message);
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contacttitle">
        <h1>Get in Touch</h1>
        <img src={theme} alt="" />
      </div>
      <div className="contactsection">
        <div className="contactleft">
          <h1>Lets talk</h1>
          <p>I'm currently available to take on new projects,so feel free to send me a message for new project to work on.U can contact anytime.</p>
          <div className="contactdetails">
            <div className="contactdetail">
              <img src={mail} alt="" /><p>ksbalu67@gmail.com</p>
            </div>
            <div className="contactdetail">
              <img src={call} alt="" /><p>+91 6282087768</p>
            </div>
            <div className="contactdetail">
              <img src={location} alt="" /><p>CBE,India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contactright">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' />
          <label htmlFor="">Your Email</label>
          <input type="text" placeholder='Enter your email' name='email' />
          <label htmlFor="">Write your message here</label>
          <textarea name="message"  rows="8" placeholder='Enter your message'></textarea>
          <button type='submit' className='contactsubmit'>Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact