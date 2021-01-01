import React, {useState} from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as Io5Icons from "react-icons/io5";


import { Link } from 'react-router-dom';

import {SidebarDataPlaces} from './SideBarDataPlaces'

import './PlacesNavBar.css';
import {IconContext} from 'react-icons';

function PlacesNavBar () {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    return (
    <>
    <IconContext.Provider value={{color: 'red'}}>
    <div className="navbar">
        
      <Link to='#' className='menu-bars' onClick={showSidebar} >
        <Io5Icons.IoPeopleCircleOutline  />
         Places
      </Link>
      
    </div>
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
                <Link to='#' className='menu-bars'>
                <AiIcons.AiFillCloseCircle />
                </Link>
            </li>
            {SidebarDataPlaces.map((item, index) => {
                return (
                    <li key={index} className={item.cName}>
                        <Link to={item.path}>
                           {item.icon}
                           <span>{item.title}</span> 
                        </Link>
                    </li>
                );
            })}
        </ul>
    </nav>
    </IconContext.Provider>
    </>  
  );
};

export default PlacesNavBar;