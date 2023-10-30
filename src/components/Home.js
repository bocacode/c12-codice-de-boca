import { useState, useEffect } from 'react'

function SingleMenuComponent(props) {
	console.log('props ->', props)
	return (
		<div className='menu-item'>
			<h3>{props.title}</h3>
			<p>{props.description}</p>
		</div>
	)
}

export default function Home() {
	const [menuItems, setMenuItems] = useState() // = [stateVar, setter]

	useEffect(() => {
		fetch('https://codice-boca.web.app/menu')
			.then(res => res.json()) // contacting the API
			.then(data => setMenuItems(data)) // get clean data form res
			.catch(x => console.error(x))
	}, [])

	return (
		<section className='menu-items'>
			{!menuItems
					// if no menu items, show Loading...
					? <h3>Loading...</h3>
					// otherwise show menu items
					: menuItems.map(singleItem => {
							return (
									<SingleMenuComponent
										title={singleItem.title}
										description={singleItem.description} />
							)
						})
			}
		</section>
	)
}
