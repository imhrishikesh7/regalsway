
import BgImage from '../images/bg1.jpg'
import React from 'react'
export default function HeadBg() {
  let bgStyle={
      height: "70vh",
      width: "100vw",
      objectFit: "cover",
      filter: "brightness(0.4)",
      marginTop: "0",
      backgroundRepeat:"no-repeat",
      zIndex: "-1",
      overflow: "hidden"
  
  }
  return (
    <img className='img-fluid'  style={bgStyle} alt='' src={BgImage}/>
  )
}
