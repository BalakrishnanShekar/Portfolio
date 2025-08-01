import React from 'react'
import './MyWork.css'
import theme from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow from '../../assets/arrow_icon.svg'
const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="myworktitle">
          <h1>My Works</h1>
          <img src={theme} alt="" />
        </div>
        <div className="myworkcontainer">
          {mywork_data.map((work,index)=>(
            <img key={index} src={work.w_img} alt='Work image ${index+1}' />
          ))}
        </div>
        <div className="myworkshowmore">
          <p>Read More</p>
          <img src={arrow} alt="" />
        </div>
    </div>
  )
}

export default MyWork