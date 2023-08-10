import React from 'react'
import { Link } from 'react-router-dom'

export default function ItemCards({ img, heading, mrp, costPrice, off, path }) {
    return (
        <div className='item-cards'>
            <Link to={`/${path}`} >
                <img src={img} alt='item-img' />
                <h4>{heading}</h4>
                <p>by FURNIGOODS</p>
                <h6>{off}off<span>{mrp}</span><strong>{costPrice}</strong></h6>
            </Link>
        </div>
    )
}
