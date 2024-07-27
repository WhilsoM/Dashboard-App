import React from 'react'
import Header from '../../widgets/header/Header'
import Sidebar from '../../widgets/sidebar/Sidebar'

const Layout = () => {
	return (
		<>
			<div className='wrapper'>
				<Sidebar />
				<main className='main-content'>
					<Header />
					<section className='tasks'>
						<h2>Last tasks</h2>
					</section>
					<section className='productivity'>
						<h2>Productivity</h2>
					</section>
					<section className='projects-in-progress'>
						<h2>Projects in progress</h2>
					</section>
				</main>
			</div>
		</>
	)
}

export default Layout
