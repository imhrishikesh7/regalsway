import Project1 from '../images/project1.jpg';
import Project2 from '../images/project2.jpg';
import Project3 from '../images/project3.jpg';
import React from 'react'

export default function Projects() {
    let projectImg={
        height: "55vh",
        width: "28vw",
        objectFit: "contain",
        filter: "brightness(0.6)"
    }
    // let fullBoxProjectImg={
    //     width: "90vw",
    //     height: "50vh"
    // }
  return (
    <div className='container my-5'>
        <p className='display-6'>Our Latest Projects</p>
        <h4 className='mb-0'>A fresh approach to financial services for entrepreneurs</h4>
        <div className='d-flex flex-row' >
            <img className="img-fluid" style={projectImg} src={Project1} alt=""/>
            <img className="img-fluid" style={projectImg} src={Project2} alt=""/>
            <img className="img-fluid" style={projectImg} src={Project3} alt=""/>
        </div>
    </div>
  )
}
