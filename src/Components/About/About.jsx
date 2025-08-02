import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile from '../../assets/about_profile.jpg'
const About = () => {
  return (
    <div id='about' className='aboutme'>
      <div className="abouttitle">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="aboutsections">
        <div className="aboutleft">
          <img src={profile} alt="" />
        </div>
        <div className="aboutright">
          <div className="aboutpara">
            <p>I'm exploring opportunities where I can contribute meaningfully to impactful tech solutions while continuing to expand my skills in software development and artificial intelligence.</p>
            <p>I have more passion for Front End Development by using React.js</p>
          </div>
          <div className="aboutskills">
            <div className="aboutskill"><p>HTML & CSS</p><hr style={{width:"90%"}}/></div>
            <div className="aboutskill"><p>JavaScript</p><hr style={{width:"70%"}}/></div>
            <div className="aboutskill"><p>React.js</p><hr style={{width:"60%"}}/></div>
            <div className="aboutskill"><p>Node.js</p><hr style={{width:"75%"}}/></div>
            <div className="aboutskill"><p>AI and ML</p><hr style={{width:"65%"}}/></div>
          </div>
        </div>
      </div>
      <div className="aboutachievements">
        <div className="aboutachievement">
          <h1>1+</h1>
          <p>years of experience</p>
        </div>
        <hr />
        <div className="aboutachievement">
          <h1>3+</h1>
          <p>projects completed</p>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default About