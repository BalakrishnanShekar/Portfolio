import React from 'react'
import './Footer.css'
import footer from '../../assets/footer_logo.svg'
import user from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footertop">
            <div className="footertopleft">
                <img src={footer} alt="" />
                <p>I am a software developer with 2 years of experience in India.</p>
            </div>
            <div className="footertopright">
                <div className="footeremailinput">
                    <img src={user} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footersubscribe">
                    Subscribe
                </div>
            </div>
        </div>
        <hr />
        <div className="footerbottom">
            <p className="footerbottomleft">
                &copy; 2025 Balakrishnan - All rights reserved
            </p>
            <div className="footerbottomright">
                <p>Terms of Services</p>
                <p>Privacy Policy</p>
                <p>Connect With Me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer