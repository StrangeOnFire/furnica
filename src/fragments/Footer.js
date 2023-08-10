import React, { useState } from 'react'
import FooterAccordion from './FooterAccordian'
import FooterDesktop from './FooterDesktop';
const footerArray = ['Terms Of Use', 'Privacy Policy', 'Sitemap']
export default function Footer() {
    const [toogleWidth] = useState(window.innerWidth <= 800 ? true : false);
    return (
        <>
           {toogleWidth ?  <FooterAccordion /> : <FooterDesktop/>}
            <div className='footer'>
                <p>©2023 FURNIGOODS, made by Ayush</p>
                <div className='footer-last-list'>{footerArray.map((element) => (<li key={element}>{element}</li>))}</div>
            </div>
        </>
    )
}
