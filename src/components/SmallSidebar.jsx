import React from 'react'
import Wrapper from '../assets/wrappers/SmallSidebar'
import { useDashBoardContext } from '../pages/DashboardLayout'
import { FaTimes } from 'react-icons/fa'
import Logo from './Logo'
import links from '../utils/links'
import { NavLink } from 'react-router-dom'

const SmallSidebar = () => {
  const data = useDashBoardContext()
  // console.log(data)
  return (
    <Wrapper>
      <div className='sidebar-container show-sidebar'>
        <div className='content'>
          <button className='close-btn'>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <div className='nav-links'>
            {links.map((link) => {
              const { text, path, icon } = link

              return (
                <NavLink
                  to={path}
                  key={text}
                  className='nav-link'
                  onClick={() => {}}
                >
                  <span className='icon'>{icon}</span>
                  {text}
                </NavLink>
              )
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default SmallSidebar
