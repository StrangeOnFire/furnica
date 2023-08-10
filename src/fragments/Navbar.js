
import React,{ useState } from 'react'
import logo from '../images/Picsart_23-07-08_12-59-27-796-removebg-preview.png'
import { Link } from 'react-router-dom'
export default function Navbar() {
  const [listToogleMenu] = useState(window.innerWidth >=900 ? true : false);
  const [tooogleMenu] = useState(window.innerWidth <=600 ? true : false);
  const navItems = ['Wardrobes','Dining','Beds','Studying','Lightning','Sofas','ShoeRacks'];

  return (
    <>
      <div >
       {tooogleMenu && <div className='navbar-heading'>
          <img id='navbar-heading-img' src={logo} alt='logo' />
          <h1 >FURNIGOODS</h1>
        </div>}
        <ul className='navbar' >
          <li><Link to={'/'}>Home</Link></li>
          {listToogleMenu && <li><Link to={'/dealZone'}>Deal Zone</Link></li>}
          {navItems.map((element)=>( <li key={element}><Link to={`/${element}`}>{element}</Link></li>))}
          {listToogleMenu || tooogleMenu &&  <li><Link to={'TvUnit'}>TV Units</Link></li>}
          {listToogleMenu || tooogleMenu &&  <li><Link to={'Bestsellers'}>Bestsellers</Link></li>}
        </ul>
      </div>
    </>
  )
}





