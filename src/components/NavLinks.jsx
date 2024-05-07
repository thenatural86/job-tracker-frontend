import React from 'react'
import { useDashBoardContext } from '../pages/DashboardLayout'
import links from '../utils/links'
import { NavLink } from 'react-router-dom'

const NavLinks = () => {
  const { toggleSidebar, user } = useDashBoardContext()
  return (
    <div className='nav-links'>
      {links.map((link) => {
        const { text, path, icon } = link

        return (
          <NavLink
            to={path}
            key={text}
            className='nav-link'
            onClick={toggleSidebar}
            end
          >
            <span className='icon'>{icon}</span>
            {text}
          </NavLink>
        )
      })}
    </div>
  )
}

export default NavLinks
