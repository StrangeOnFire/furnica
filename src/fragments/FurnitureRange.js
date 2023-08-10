import React, { useState } from 'react';

import deal from '../images/discount.png'
import bestseller from '../images/bestseller.png'
import bookshelves from '../images/bookshelves.png'
import dining from '../images/chair.png'
import wardrobes from '../images/closet.png'
import coffeeTable from '../images/coffee-table.png'
import sofas from '../images/couch.png'
import beds from '../images/double-bed.png'
import lightning from '../images/floor-lamp.png'
import mattress from '../images/mattress.png'
import recliner from '../images/recliner.png'
import downArrow from '../images/arrow-down.png'
import upArrow from '../images/arrow-up.png'
import shoeRack from '../images/shoe-rack.png'
import studying from '../images/studying.png'
import tvUnit from '../images/tv-unit.png'
import sofaBeds from '../images/working-at-home.png'

import LogoDes from './LogoDes';

export default function FurnitureRange() {
    const [toogleMore] = useState(window.innerWidth <= 500 ? true : false);
    const [expandClick, setExpandClick] = useState(false);
    const defaultLogo = [
        {
            img: deal,
            text: 'Deal Zone',
            path: 'dealZone'
        },
        {
            img: bookshelves,
            text: 'Bookshelves',
            path: 'bookshelves'
        },
        {
            img: dining,
            text: 'Dining',
            path: 'Dining'
        },
        {
            img: wardrobes,
            text: 'Wardrobes',
            path: `Wardrobes`
        },
        {
            img: coffeeTable,
            text: 'Coffee Table',
            path: `coffeeTable`,
        },
        {
            img: studying,
            text: 'Studying',
            path: `Studying`,
        },
        {
            img: sofaBeds,
            text: 'Sofa Beds',
            path:'sofaBeds'
        },
    ]
    let addedLogo = [
        {
            img: recliner,
            text: 'Recliner',
            path:'recliner'
        },
        {
            img: mattress,
            text: 'Mattress',
            path:'mattress'
        },
        {
            img: tvUnit,
            text: 'TV Unit',
            path:'TvUnit'
        },
        {
            img: shoeRack,
            text: 'Shoe Rack',
            path:'ShoeRacks'
        },
        {
            img: sofas,
            text: 'Sofas',
            path: '/sofas',
        },
        {
            img: lightning,
            text: 'Lightning',
            path:'Lightning'
        },
        {
            img: beds,
            text: 'Beds',
            path:'Beds'
        },
        {
            img: bestseller,
            text: 'Bestseller',
            path:'Bestsellers'
        },
    ]


    return (
        <>
            <h2 className='furniture-range-h2'>Explore Our Furniture range</h2>
            <div className='furniture-range'>
                {defaultLogo.map((element) => {
                    return <LogoDes key={element.text} path={element.path} img={element.img} text={element.text} />
                })}
                {addedLogo.map((element) => {
                    return (!toogleMore || expandClick) && <LogoDes path={element.path} key={element.text} img={element.img} text={element.text} />
                })}

                <div onClick={() => setExpandClick(!expandClick)}>
                    {toogleMore && <LogoDes img={expandClick ? upArrow : downArrow} path={'/'} text={expandClick ? 'Show less' : '+8 More'} />}
                </div>
            </div>
            {toogleMore && <button className='furniture-range-button' style={{ color: 'white' }}>
                EXPLORE COMPLETE CATALOGUE
            </button>}
        </>
    )
}
