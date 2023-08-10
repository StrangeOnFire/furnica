import React from 'react'
import { Link } from 'react-router-dom';

const navItems = ['Wardrobes','Dining','Beds','Studying','Lightning','Sofas','ShoeRacks'];
const aboutUsArray = ['About Us', 'Contact Us', 'Address', 'Material Glossary', 'Bulk Orders', 'Careers', 'Customer Reviews'];
const deliveryArray = ['Ahmedabad', 'Aurangabad', 'Bengaluru', 'Bharuch', 'Boisar', 'Chandigarh', 'Chennai',
    'Coimbatore', 'Dehradun', 'Delhi', 'Faridabad', 'Ghitorni', 'Gorakhpur', 'Hooghly', 'Hyderabad', 'Indore', 'Jaipur', 'Jamshedpur', 'Kanpur', 'Kolkata', 'Lucknow', 'Ludhiana', 'Mumbai', 'Noida', 'Palghar', 'Patna', 'Prayagraj', 'Pondicherry', 'Pune', 'Raipur', 'Ranchi', 'Thane', 'Vadodara']
const helpArray = ['Privacy Policy', 'Fees and Payment', 'Shipping & Delivery', 'Terms and Conditions',
    'Warranty, Return and Refund', 'EMI on Credit Cards']

export default function FooterDesktop() {
    return (
        <div className='FooterDesktop'>
            <div className='about-us-desktop'>
                <h5>The Company:</h5>
                <ul>
                    {aboutUsArray.map((element) => (<li key={element}>{element}</li>))}
                </ul>
            </div>
            <div className='furniture-desktop'>
                <h5>Furniture Categories</h5>
                <ul>
                {navItems.map((element) => (<li key={element}><Link to={`/${element}`}>{element}</Link></li>))}
                </ul>
            </div>
            <div className='help-desktop'>
                <h5>Need help?</h5>
                <ul>
                    {helpArray.map((element) => (<li key={element}>{element}</li>))}
                </ul>
            </div>
            <div className='delivery-desktop'>
                <h5>We Deliver To</h5>
                <ul>
                    {deliveryArray.map((element) => (<li key={element}>{element}</li>))}
                </ul>
            </div>
        </div>
    )
}
