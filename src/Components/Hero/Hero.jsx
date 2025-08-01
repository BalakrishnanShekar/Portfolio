import React from 'react'
import './Hero.css'
import profile from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile} alt='' />
      <h1><span>I'm Balakrishnan</span>,Software Engineer Fresher and Engineering Graduate in India.</h1>
      <p>I'm a passionate and versatile developer with hands-on experience in Python, Java, C, Web Development, Android app Development, Machine Learning, and Deep Learning. I enjoy building innovative solutions that merge technology with creativity, whether it's crafting intuitive mobile apps, developing robust web applications, or diving deep into data to uncover patterns and insights.</p>
      <div className="heroaction">
        <div className="heroconnect"><AnchorLink className='anchorlink' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <div className="heroresume"><a href='./Resume.pdf' target='_blank' rel='noopener noreferrer'>My Resume</a></div>
      </div>
    </div>
  )
}

export default Hero