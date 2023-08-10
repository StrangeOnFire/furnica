import React from 'react'
import { Link } from 'react-router-dom'
import moreSofas from '../images/moretoexplore1.webp';
import moreChair from '../images/moretoexplore3.webp';
import moreStudyDesk from '../images/moretoexplore4.webp';
export default function MoreToExplore() {
    return (
        <>
       
        <div className='more-to-explore'>
            <h2>More To Explore</h2>
            <div className='more-to-explore-img'>
               <Link to={'/Sofas'} >
               <img src={moreSofas} alt='img'/>
               </Link>
               <Link to={'/recliner'} >
               <img src={moreChair} alt='img'/>
               </Link>
               <Link to={'/Studying'} >
               <img src={moreStudyDesk} alt='img'/>
               </Link>

            </div>
        </div>
        
        </>
    )
}



