import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function BuyNow({img, heading, mrp, costPrice, off ,path}) {

    const navigate =  useNavigate();

  return (
    <>


        <div className='buy-item-cards' >
           <img src={img} alt='item-img' onClick={()=> navigate(`/${path}`)}/>
            <h4>{heading}</h4>
            <p>by FURNIGOODS</p>
            <h6>{off}off<span>{mrp}</span><strong>{costPrice}</strong></h6>          
        </div>
    

    </>
  )
}
