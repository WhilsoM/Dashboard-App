import React from 'react'

import { NavLink } from 'react-router-dom'
import s from './ui/Sidebar.module.scss'


const isActiveLink = ({ isActive }) => ({
  display: 'block',
  fontSize: '1.2rem',
  color: isActive ? '#fff' : '',
  borderRadius: '50px',
  padding: isActive ? '15px' : '',
  backgroundColor: isActive ? "#333" : "",
  marginLeft: isActive ? '-15px' : ''
})


const Sidebar = () => {
	return (
		<aside className={s.sidebar}>
			<div className={s.sidebar__wrapper}>
				<div className={s.logo}>
					<span>BRESS</span>
				</div>
				<nav className={s.menu}>
					<ul>
						<li>
							<NavLink 
                style={isActiveLink}
                to='/'
              >
                Dashboard
              </NavLink>
						</li>
						<li>
							<NavLink
                style={isActiveLink}
                to='/projects'
              >
                Projects
              </NavLink>
						</li>
						<li>
              <NavLink 
                style={isActiveLink}
                to='/task-list'
              >
                Task list
              </NavLink>
            </li>
						<li>
							<NavLink
                style={isActiveLink}
                to='/services'
              >
                Services
              </NavLink>
						</li>
						<li>
							<NavLink
                style={isActiveLink}
                to='/notifications'
              >
                Notifications
              </NavLink>
						</li>
						<li>
							<NavLink
                style={isActiveLink}
                to='/chat'
              >
                Chat
              </NavLink>
						</li>
					</ul>
				</nav>
			</div>

			<div className={s.profile}>
				<img src='profile.jpg' alt='Emily Jonson' />
				<div className={s.profileInfo}>
					<p>Emily Jonson</p>
					<p>jonson@bress.com</p>
				</div>
			</div>
		</aside>
	)
}

export default Sidebar
