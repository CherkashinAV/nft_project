import React from 'react'
import { twitter,  linkedIn} from '../../assets'
import './teamCard.css'

const TeamCard = ({img, name, profession, twitterLink, linkedInLink, text}) => {
  return (
	 <div className='team-card'>
		<div className="team-card__img">
			<img src={img} alt="" />
		</div>
		<h2>{name}</h2>
		<p className='team-card__profession'>{profession}</p>
		<div className="team-card__socials">
			<div className="team-card__socials__twitter">
				<a href={twitterLink}><img src={twitter} alt="" /></a>
			</div>
			<div className="team-card__socials__linked-in">
				<a href={linkedInLink}><img src={linkedIn} alt="" /></a>
			</div>
		</div>
		<div className="team-card__text">
			<p>{text}</p>
		</div>
	 </div>
  )
}

export default TeamCard