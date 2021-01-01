import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as Io5Icons from "react-icons/io5";
import * as GiIcons from "react-icons/gi";


export const SidebarDataCharacters = [
    
    {
        title: 'Kandis',
        path: '/playerCharacters/Kandis',
        icon: <GiIcons.GiHolyWater />,
        cName: 'nav-text'
    },
    {
        title: 'Garyx',
        path: '/playerCharacters/Garyx',
        icon: <GiIcons.GiMagicSwirl />,
        cName: 'nav-text'
    },
    {
        title: 'Florence',
        path: '/playerCharacters/Florence',
        icon: < GiIcons.GiFireDash/>,
        cName: 'nav-text'
    },
    {
        title: 'Sanja',
        path: '/playerCharacters/Sanja',
        icon: <GiIcons.GiAncientSword />,
        cName: 'nav-text'
    },
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    }
]
