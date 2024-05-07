import React, { useState } from 'react'
import Wrapper from '../assets/wrappers/LogoutContainer'
import { useDashBoardContext } from '../pages/DashboardLayout'
import { FaCaretDown, FaUserCircle } from 'react-icons/fa'

const LogoutContainer = () => {
  const [showLogout, setShowLogout] = useState(false)
  const { user, logoutUser } = useDashBoardContext()
  return (
    <Wrapper>
      <button
        type='button'
        className='btn logout-btn'
        onClick={() => {
          setShowLogout(!showLogout)
        }}
      >
        <FaUserCircle />
        {user?.name}
        <FaCaretDown />
      </button>
      <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
        <button type='button' className='dropdown-btn' onClick={logoutUser}>
          logout
        </button>
      </div>
    </Wrapper>
  )
}

export default LogoutContainer
