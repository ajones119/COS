import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as Io5Icons from "react-icons/io5";
import * as GiIcons from "react-icons/gi";


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Player Characters',
        path: '/playerCharacters',
        icon: <Io5Icons.IoPeopleCircleOutline />,
        cName: 'nav-text'
    },
    {
        title: 'Places Visited',
        path: '/places',
        icon: <GiIcons.GiMountainRoad />,
        cName: 'nav-text'
    },
    {
        title: 'Enemies Encoutered',
        path: '/enemiesEncountered',
        icon: <GiIcons.GiBadGnome />,
        cName: 'nav-text'
    },
    {
        title: 'Story So Far',
        path: '/storySoFar',
        icon: <GiIcons.GiBookCover />,
        cName: 'nav-text'
    },

]
