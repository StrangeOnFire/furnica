import React from 'react'
import phoneImg from '../images/phone.png'
export default function Download() {
    return (
        <>
            <div className='download-section'>
                <div className='download-section-text'>
                    <h2>Never Sit Uncomfortable!</h2>
                    <h2>Download Our Mobile App</h2>
                    <h2>Get Good Furniture In Low Price</h2>
                    <p>Make online purchases,read customer reviews from buyers and earn points towards free goods. Furnigoods is a real-time online Furniture Store.</p>
                    <h3>
                        <button><i className="fa-brands fa-apple"></i><p>Download on the <b>Apple Store</b></p></button>
                        <button><i className="fa-brands fa-google-play" style={{color: '#005eff'}}></i><p>Download on the <b>Play Store</b></p></button>
                    </h3>
                </div>
                <div className='download-section-img'>
                    <img src={phoneImg} alt='phoneimg' />
                </div>
            </div>
        </>
    )
}
