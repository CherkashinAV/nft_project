import React from 'react'
import './about.css'
import { NFTs } from '../../assets'

const About = () => {
  return (
	 <div className='about-section'>
		<div className='about-section__content'>
			<div className="about-section__content__text">
				<h1>meta record label</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
			</div>
			<div className="about-section__content__btn">
				<a href='#'>
					Learn More
				</a>
			</div>
		</div>
		<div className="about-section__img">
			<img src={NFTs} alt="nfts" />
		</div>
	 </div>
  )
}

export default About