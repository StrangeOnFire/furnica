import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';

export default function TopNavigation({firstLink,secondLink,thirdLink,fourthLink,activePage}) {
  return (
    <div className='top-navigation'>
        <Link to={'/'}><HomeIcon fontSize='small'/>Home</Link>
        {firstLink && <Link to={`/${firstLink}`}>{firstLink}</Link>}
        {secondLink && <Link to={`/${secondLink}`}>{secondLink}</Link> }
        {thirdLink && <Link to={`/${thirdLink}`}>{thirdLink}</Link>}
        {fourthLink && <Link to={`/${fourthLink}`}>{fourthLink}</Link>}
        <span>{activePage}</span>
    </div>
  )
}
