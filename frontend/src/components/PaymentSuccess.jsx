import React from 'react'
import SuccessImg from "../images/payment_success.png"
import { useSearchParams } from 'react-router-dom'


export default function PaymentSuccess() {
  const searchQuery = useSearchParams()[0]
  const referenceNum = searchQuery.get("reference")  

    return (
    <div className='container-fluid  text-center'>
        <img className='img-fluid' src={SuccessImg} alt="" srcSet="" />
        <p>Reference no: {referenceNum} </p>
    </div>
  )
}
