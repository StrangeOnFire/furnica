import React from 'react'
import CarvenLoungeChair from '../images/popular-images/Carven_lounge_chair_Maroon_replace_LP.png'
import Bayern from '../images/popular-images/Bayern_TV_Unit_Columbian_Walnut_LP.png'
import Bennis from '../images/popular-images/Bennis_Shoe_Rack_21_Pair_LP.png'
import austen from '../images/popular-images/FNTBST11MH30001_LP.png'
import Mika from '../images/popular-images/Mika_Chair_White_LP.png'
import Pashe from '../images/popular-images/Pashe_Dining_Chair_RT_00_LP.png'
import Venturi from '../images/popular-images/Venturi_New_LP.png'
import Zephyr from '../images/popular-images/Zephyr_Large_tv_MH_LP.png'
import PopularItemCards from './PopularItemCards'



export const PopularAcrossSiteArray = [
    {
        img: CarvenLoungeChair,
        heading: 'Carven Lounge Chair in Red Fabric',
        mrp: '₹31,699 ',
        cp: '₹15,532 ',
        off: '51%',
        path:'CarvenLoungeChair',
        parentLink:'dealZone'
    },
    {
        img: Bayern,
        heading: 'Bayern Wood Free Standing TV Unit ',
        mrp: '₹14,499 ',
        cp: '₹6,089 ',
        off: '58%',
        path:'Bayern',
        parentLink:'dealZone'
    },
    {
        img: Bennis,
        heading: 'Bennis Pair Shoe Rack in Dark Walnut Finish',
        mrp: '₹14,099',
        cp: '₹6,203 ',
        off: '56%',
        path:'Bennis',
        parentLink:'dealZone'
    },
    {
        img: austen,
        heading: 'Austen Solid Wood Study Table in Mahogany Finish',
        mrp: '₹17,899 ',
        cp: '₹10,023 ',
        off: '44%',
        path:'austen',
        parentLink:'dealZone'
    },
    {
        img: Mika,
        heading: 'Mika Leatherette Study Chair in White Colour',
        mrp: '₹25,599 ',
        cp: '₹9,215 ',
        off: '64%',
        path:'Mika',
        parentLink:'dealZone'
    },
    {
        img: Pashe,
        heading: 'Pashe Fabric Accent Chair in Rust Colour',
        mrp: '₹10,699 ',
        cp: '₹5,349 ',
        off: '50%',
        path:'Pashe',
        parentLink:'dealZone'
    },
    {
        img: Venturi,
        heading: 'Venturi Study Chair in Carbon Black Colour',
        mrp: '₹17,799 ',
        cp: '₹7,297 ',
        off: '59%',
        path:'Venturi',
        parentLink:'dealZone'
    },
    {
        img: Zephyr,
        heading: 'Zephyr Solid Wood Free Standing TV Unit ',
        mrp: '₹31,699 ',
        cp: '₹19,336 ',
        off: '39%',
        path:'Zephyr',
        parentLink:'dealZone'
    },
]

export default function PopularAcrossSite() {
   
    return (
        <div className='popular-across-site'>
            <h1>
                Popular Across Site
            </h1>
            <div className='popular-card-section'>
                {PopularAcrossSiteArray.map((element) => (
                    <PopularItemCards key={element.heading} img={element.img} path={element.path} heading={element.heading} mrp={element.mrp} costPrice={element.cp} off={element.off} />
                ))}
            </div>
        </div>
    )
}
