import React from 'react'
import oneMillion from '../images/one-million.png'
import fiveYear from '../images/5-year-warranty.png'
import experience from '../images/best-customer-experience.png'
import location from '../images/location.png'
import installation from '../images/repair-tools.png'
import IconsDiv from './IconsDiv'



export default function IconsHomepage() {
const iconArray =[
   { img:oneMillion,
    text:'1 millions happy customers',
    icoNo:'1'},
   { img:experience,
    text:'4 Decades Experience',
    icoNo:'2'},
   { img:fiveYear,
    text:'5 Years Warranty',
    icoNo:'3'},
   { img:location,
    text:'Pan India Experience',
    icoNo:'4'},
   { img:installation,
    text:'Free Installation',
    icoNo:'5'}
]

    return (
        <div className='icons-homepage'>
            {
                iconArray.map((element)=> (<IconsDiv key={element.icoNo} img={element.img} text={element.text} />))
            }
           
        </div>
    )
}
