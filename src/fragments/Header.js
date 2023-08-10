import React, { useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import {  Outlet } from 'react-router-dom';
import Footer from '../fragments/Footer';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import MenuIcon from '@mui/icons-material/Menu';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';


import logo from '../images/Picsart_23-07-08_12-59-27-796-removebg-preview.png'
import Navbar from './Navbar';
import InstallHeader from './InstallHeader';

const drawerWidth = 240;

export default function Header() {

  const {pathname} = useLocation();
  useEffect((()=>{
  window.scrollTo(0,0);
  }),[pathname])
  


  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <div onClick={handleDrawerToggle} >
      <Navbar/>
    </div>
  );



  const [toogleMenu, setToogleMenu] = useState(window.innerWidth <= 600 ? true : false);



  return (
    <>
      <div className='app-install-ad-header'>
        <InstallHeader />
        <button>INSTALL</button>
      </div>
      <div className='logo-and-details-header'>
        <div className='logo'>
        {toogleMenu && <span onClick={handleDrawerToggle}> <MenuIcon fontSize='large' /></span>}
          <Box component="nav">
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
              }}
            >
              {drawer}
            </Drawer>
          </Box>
          <img src={logo} alt='logo' />
          <h1>FURNIGOODS</h1>
        </div>
        <div className='search-bar'>
          <input type='search' placeholder='Search ' name='search' />
          <SearchIcon />
        </div>
        <div className='icons-header'>
          <HelpOutlineIcon />
          <FavoriteBorderIcon />
          <PersonIcon />
          <ShoppingCartIcon />
        </div>
      </div>

      {!toogleMenu && <Navbar  />}

      <Outlet />
      <Footer/>
    </>
  )
}
