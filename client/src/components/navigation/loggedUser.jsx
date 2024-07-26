import React from 'react'
import { useState } from 'react';
import profileImg from '../../assets/images/profile.png';
import { IoCreateOutline, IoApps, IoExitOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiUsers } from "react-icons/fi";
import { Link } from 'react-router-dom';

const LoggedUser = ({username}) => {

    const [showNav, setShowNav] = useState(false);
    const [showProfile, setShowProfile] = useState(false);

  return (
    <div onClick={() => { setShowProfile(current => !current), setShowNav(false) }} className='profile-container'>
    <img src={profileImg} className='user-profile'></img>
    <div className={`profile-content ${showProfile ? 'active-content' : ''}`}>
        <div className='profile-link-container'>
            <Link className='profile-link'>
                <img src={profileImg} width={50} height={50}></img>
                <p>{username}</p>
            </Link>
            <p className='separator'></p>

            <Link to="" className='created-offers'>
                <span id='mini-menu-span-bg'><IoApps /></span>
                <span >Created Offers</span>
            </Link>
        </div>
        <div>
            <Link href='' className='mini-menu'>
                <span id='mini-menu-span-bg'><IoCreateOutline className='mini-menu-icon' /></span>
                <span id='mini-menu-span'>Create Application</span>
            </Link>
            <Link href='' className='mini-menu'>
                <span id='mini-menu-span-bg'><FiUsers className='mini-menu-icon' /></span>
                <span id='mini-menu-span'>View Application</span>
            </Link>
            <Link to='' className='mini-menu'>
                <span id='mini-menu-span-bg'><IoMdNotificationsOutline className='mini-menu-icon' /></span>
                <span id='mini-menu-span'>Notifications</span>
            </Link>
            <Link to='' className='mini-menu'>
                <span id='mini-menu-span-bg'><IoExitOutline className='mini-menu-icon' /></span>
                <span id='mini-menu-span'>Logout</span>
            </Link>
        </div>
    </div>

</div>
  )
}

export default LoggedUser