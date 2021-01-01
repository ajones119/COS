import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as Io5Icons from "react-icons/io5";
import * as GiIcons from "react-icons/gi";


export const SidebarDataPlaces = [
    
    {
        title: 'Barovia',
        path: '/places/Barovia',
        icon: <GiIcons.GiHolyWater />,
        cName: 'nav-text'
    },
    {
        title: 'Death House',
        path: '/places/DeathHouse',
        icon: <GiIcons.GiMagicSwirl />,
        cName: 'nav-text'
    },
    {
        title: 'Village of Barovia',
        path: '/places/VillageOfBarovia',
        icon: < GiIcons.GiFireDash/>,
        cName: 'nav-text'
    },

    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    }
]
