import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../widgets/header/Header'
import Sidebar from '../../widgets/sidebar/Sidebar'

const Layout = () => {
	return (
		<>
			<div className='wrapper'>
				<Sidebar />

				<main className='main-content'>
					<Header />

					<Outlet />
				</main>
			</div>
		</>
	)
}

export default Layout
