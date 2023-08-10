import React, { useEffect, useState } from 'react'
import TopNavigation from './TopNavigation';
import PopularAcrossSite from './PopularAcrossSite';
import PhotoCameraFrontIcon from '@mui/icons-material/PhotoCameraFront';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import ItemAccordion from './ItemAccordian';
import ConstructionIcon from '@mui/icons-material/Construction';



export default function ItemDetails({ pageHeading, activePageHeading, img, ToFirstLInk, ToSecondLink, ToThirdLink, mrp, parent,costPrice,off }) {
useEffect(()=>{
  document.body.style.paddingBottom = '40px'
},[])


  const [seeMore, setSeemore] = useState(false);
  const listArray = [
    {
      strong: 'Sold By',
      des: ' :Furnigoods Retail Limited, 3rd Floor, Court House, Lokmanya Tilak Marg, Dhobi Talao, Bihar-400002'
    },
    {
      strong: 'Consumer Care Details',
      des: ' : Furnigoods Retail Limited, 1st, 2nd & 3rd Floor, No. 259 and 276 Amarjyothi, Basaveshwara HBCS Layout, Domlur, Bihar, 560071, Telephone No.: 080-1234567, Email ID: hello@furnigoods.com'
    },
    {
      strong: 'Marketed By',
      des: ' : Furnigoods Retail Limited, 3rd Floor, Court House, Lokmanya Tilak Marg, Dhobi Talao, Bihar-400002'
    },
    {
      strong: 'Manufactured By',
      des: ' :  Furnigoods Enterprises,No.9/A, 1St Floor,Gottigare Road,Bihar-560062'
    },
    {
      strong: 'MRP',
      des: ` ${mrp}.00 (Incl. of all taxes)`
    },
  ]
  return (
    <>
      <TopNavigation firstLink={ToFirstLInk} secondLink={ToSecondLink} thirdLink={ToThirdLink} activePage={`${activePageHeading}...`} />
      <div className='item-detail'>
        <img src={img} alt='img' />
        <div className='item-detail-top item-detail-div'>
          <h1>{pageHeading}</h1>
          <h6>by Furnigoods</h6>
          <h5>Best Seller</h5>
          <h3>{off}off<span>{mrp}</span><strong>{costPrice}</strong></h3>
     
        </div>
        <div className='item-detail-detail item-detail-div'>
          <h3>PRODUCT DETAILS</h3>
          <ul>
            <li><strong>Country of Origin</strong> : INDIA</li>
            <li><strong>Sub Category</strong> : {parent}</li>
            <li><strong>Product Dimensiond</strong> : 34.2cm H * 14.8cm W * 76.4cm L</li>
            <li><strong>Net Quantity</strong> : 1N</li>
            {seeMore && listArray.map((item) => (<li key={item.des}><strong>{item.strong}</strong>{item.des}</li>))}
          </ul>
          <p onClick={() => setSeemore(!seeMore)}>{!seeMore ? '+ More Information' : '- Less Information'}</p>
        </div>

        <div className='item-detail-div item-detail-videocall '>
          <PhotoCameraFrontIcon fontSize='large' />
          <div>
            <h4>Want a closer look?</h4>
            <p>Get on a video call with our Design Consultant </p>
            <button>SCHEDULE A CALL NOW</button>
          </div>
        </div>

        <p className='item-detail-discount item-detail-div'>
          *All discounts are dynamic and can be subject to change at any time.
        </p>

        <div className='item-detail-warranty item-detail-div'>
          <VerifiedUserIcon />
          <p><strong>12 month warranty</strong> on this product <span>Know more</span></p>
        </div>

        <div className='item-detail-delivery '>
          <div className='item-detail-warranty'>
            <LocationOnIcon />
            <p>Bihar - 851133</p>
          </div>
          <div className='item-detail-warranty'>
            <AirportShuttleIcon/>
            <p>Delivery within <strong> 2-3 Days</strong></p>
          </div>
          <li>You can cancel your order before shipped, and a full refund will be initiated.</li>
        </div>
        <div className='item-detail-weoffer item-detail-div'>
          <h5>We offer</h5>
          <div>
            <div>
              <ConstructionIcon fontSize='large' />
              <p>Free Installation</p>
            </div>
            <div>
            <AirportShuttleIcon fontSize='large'/>
              <p>Free Delivery</p>
            </div>
            
          </div>
        </div>
        <ItemAccordion />
      </div>
      <PopularAcrossSite />
      <div className='item-buy'>
        <button className='item-to-cart'>
          Add To Cart
        </button>
        <button className='item-to-buy'>
          Buy Now
        </button>
      </div>
    </>
  )
}










