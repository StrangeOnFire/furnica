import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function PopularItemCards({ img, heading, mrp, costPrice, off ,path}) {
    const navigate =  useNavigate();
    return (
        <div className='popular-item-cards' onClick={()=> navigate(`/${path}`)}>
           <img src={img} alt='item-img' />
            <h4>{heading}</h4>
            <p>by FURNIGOODS</p>
            <h6>{off}off<span>{mrp}</span><strong>{costPrice}</strong></h6>          
        </div>
    )
}
