import React from 'react'
import { Link } from 'react-router-dom'

export default function LogoDes({img,text,path}) {
  return (
    <div className='logoDes'>
        <Link to={`${path}`} preventScrollReset={false} >
            <img src={img} alt='img' />
            <p>{text}</p>
        </Link>
    </div>
  )
}
