import React from 'react'

import s from './ui/Sidebar.module.scss'

const Sidebar = () => {
	return (
		<aside className={s.sidebar}>
			<div className={s.sidebar__wrapper}>
				<div className={s.logo}>
					<span>BRESS</span>
				</div>
				<nav className={s.menu}>
					<ul>
						<li>Dashboard</li>
						<li>Projects</li>
						<li className={s.active}>Task list</li>
						<li>Services</li>
						<li>Notifications</li>
						<li>Chat</li>
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
