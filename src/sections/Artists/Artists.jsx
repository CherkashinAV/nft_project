import React from 'react'
import './artists.css'
import { artist1, artist2, artist3, artist4, artist5, artist6, artist7} from '../../assets'

const artists = [
	{
		img: artist1,
		name: 'Mark Popson'
	},
	{
		img: artist2,
		name: 'Pete Bentz'
	}, 
	{
		img: artist3,
		name: 'Daniela Youth'
	},
	{
		img: artist4,
		name: 'Roman Gore'
	},
	{
		img: artist5,
		name: 'Tonya'
	},
	{
		img: artist6,
		name: 'Ivor'
	},
	{
		img: artist7,
		name: 'Somae Petit'
	},
]

const Artists = () => {
  return (
	 <div className='artists'>
		<div className="artists__label">
			<h1>artists</h1>
			<h1>artists</h1>
			<h1>artists</h1>
		</div>
	 </div>
  )
}

export default Artists