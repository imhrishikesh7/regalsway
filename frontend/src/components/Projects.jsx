import Project1 from '../images/project1.jpg';
import Project2 from '../images/project2.jpg';
import Project3 from '../images/project3.jpg';
import React from 'react'

export default function Projects() {
    let projectImg={
        objectFit: "contain",
        filter: "brightness(0.4)"
    }

  return (
    <div className='container my-5 mb-5'>
        <h1 className='text-center'>Our Latest Projects</h1>
        <h4 className='mb-2 '>A fresh approach to financial services for entrepreneurs</h4>
        <div className='row justify-content-center'>

        <div className="col-sm-3 col-md-6 col-lg-4">
            <img className="img-fluid" style={projectImg} src={Project1} alt=""/>
            {/* <img className="img-fluid"  src={Project1} alt=""/> */}
        </div>
        <div className="col-sm-3 col-md-6 col-lg-4">
            <img className="img-fluid" style={projectImg} src={Project2} alt=""/>
            {/* <img className="img-fluid"  src={Project2} alt=""/> */}
        </div>
        <div className="col-sm-3 col-md-6 col-lg-4">
            <img className="img-fluid" style={projectImg} src={Project3} alt=""/>
            {/* <img className="img-fluid"  src={Project3} alt=""/> */}
        </div>
        </div>
    </div>
  )
}
