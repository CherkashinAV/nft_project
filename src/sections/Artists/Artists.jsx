import React from 'react'
import './artists.css'
import { artist1, artist2, artist3, artist4, artist5, artist6, artist7} from '../../assets'
import RepeatedLabel from '../../components/RepeatedLabel/RepeatedLabel'

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
		<RepeatedLabel gap={'394px'} amount={3}>artists</RepeatedLabel>
		<div className="artists__introduction">
			{
				artists.map((el) => {
					return (
						<div className="artists__introduction__artist">
							<div className="artists__introduction__artist__img" key={el.name}>
								<img src={el.img} alt={el.name} />
							</div>
							<span>{el.name}</span>
						</div>
					);
				})
			}
		</div>
	 </div>
  )
}

export default Artists