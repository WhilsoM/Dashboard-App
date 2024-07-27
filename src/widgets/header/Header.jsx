import React, { useEffect, useState } from 'react'

import s from './ui/Header.module.scss'

const months = {
	0: 'January',
	1: 'February',
	2: 'March',
	3: 'April',
	4: 'May',
	5: 'June',
	6: 'July',
	7: 'August',
	8: 'September',
	9: 'October',
	10: 'November',
	11: 'December',
}

const Header = () => {
	const [inputValue, setInputValue] = useState('')
	const [imgSrc, setImgSrc] = useState('search.svg')
	const date = new Date()

	useEffect(() => {
		if (inputValue.length !== 0) {
			setImgSrc('close.svg')
		} else {
			setImgSrc('search.svg')
		}
	}, [inputValue])

	const getWeek = (date) => {
		const week = [
			'Monday',
			'Tuesday',
			'Wendsday',
			'Thursday',
			'Friday',
			'Saturday',
			'Sunday',
		]

		return week[date.getDay()]
	}

	const handleChange = (e) => {
		const value = e.target.value

		setInputValue(value)
		console.log(value)
	}

	const clearInput = () => {
		setInputValue('')
	}

	return (
		<header className={s.header}>
			<div className={s.container}>
				<div className={s.header__wrapper}>
					<div className={s.input__wrapper}>
						<input
							type='text'
							className={s.wrapper__input}
							placeholder='Search'
							onChange={handleChange}
							value={inputValue}
						/>
						<img
							src={`/${imgSrc}`}
							alt={imgSrc}
							className={`
                ${s.wrapper__loupe}
                ${imgSrc === 'close.svg' ? s.close : ''}
                `}
							onClick={clearInput}
						/>
					</div>

					<div className={s.selectDay}>
						<p>
							{getWeek(date)}, {date.getDate()}th {months[date.getMonth()]}{' '}
						</p>
					</div>
				</div>

				<div className={s.switchCardList}>
					<button className={`${s.btn} ${s.active}`}>Card</button>
					<button className={`${s.btn}`}>List</button>
				</div>
			</div>
		</header>
	)
}

export default Header
