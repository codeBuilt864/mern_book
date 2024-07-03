import React from 'react'
import { FaCalendarAlt, FaClock, FaFire, FaFolderPlus, FaRegClock } from 'react-icons/fa'
import { MdOutlineFavorite } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom'

const SideBar = () => {
  return (
    <aside>
        <ul className='space-y-2'>
            <li>
                <NavLink to="/trending-books" className={`flex items-center space-x-2 px-5 py-3.5 rounded-lg`}>
                    <FaFire/>
                    <span>Trending</span>
                </NavLink>
            </li>

            <li>
                <NavLink to="/new-releases" className={`flex items-center space-x-2 px-5 py-3.5 rounded-lg`}>
                    <FaFolderPlus/>
                    <span>New Releases</span>
                </NavLink>
            </li>

            <li>
                <NavLink to="/upcoming-books" className={`flex items-center space-x-2 px-5 py-3.5 rounded-lg`}>
                    <FaCalendarAlt/>
                    <span>Upcoming Soon</span>
                </NavLink>
            </li>

            <li>
                <NavLink to="/favourite-books" className={`flex items-center space-x-2 px-5 py-3.5 rounded-lg`}>
                    <MdOutlineFavorite />
                    <span>Favourites</span>
                </NavLink>
            </li>

            <li>
                <Link className={`flex items-center space-x-2 px-5 py-3.5 rounded-lg`}>
                    <FaClock/>
                    <span>Watch Later</span>
                </Link>
            </li>
        </ul>
    </aside>
  )
}

export default SideBar