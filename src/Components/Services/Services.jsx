import React from 'react'
import './Services.css'
import theme from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow from '../../assets/arrow_icon.svg'
const Services = () => {
  return (
    <div id='service' className='service'>
        <div className="servicetitle">
            <h1>My Services</h1>
            <img src={theme} alt="" />
        </div>
        <div className="servicecontainer">
            {Services_Data.map((service,index)=>{
                return <div key={index} className="servicesformat">
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <div className="servicereadmore">
                        <p>Read More</p>
                        <img src={arrow} alt="" />
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Services