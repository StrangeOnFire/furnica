import React from 'react'

import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';


export default function InstallHeader() {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
    <StarIcon style={{ color: 'white' }} fontSize="inherit" />
    <StarIcon style={{ color: 'white' }} fontSize="inherit" />
    <StarIcon style={{ color: 'white' }} fontSize="inherit" />
    <StarIcon style={{ color: 'white' }} fontSize="inherit" />
    <StarHalfIcon style={{ color: 'white' }} fontSize="inherit" />
    <p style={{ margin: '0 .5rem' }}>India's highest rated furniture app </p>
  </div>
  )
}
