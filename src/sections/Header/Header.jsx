import React from 'react'
import './header.css'
import { logo, discord, youtube, twitter, telegram } from '../../assets'

const Header = () => {
  return (
	 <div className='header'>
		<div className="header__nav">
			<div className="header__nav__logo">
				<img src={logo} alt="logo" />
			</div>
			<ul className='header__nav__nav-links'>
				<li>
					<a href='#'>
						Wave NFTs
					</a>
				</li>
				<li>
					<a href='#'>
						Stories
					</a>
				</li>
				<li>
					<a href='#'>
						Contact
					</a>
				</li>
			</ul>
		</div>
		<div className="header__socials">
			<div className="header__socials__twitter">
				<a href='#'><img src={twitter} alt="twitter link" /></a>
			</div>
			<div className="header__socials__discord">
				<a href="#"><img src={discord} alt="discord link" /></a>
			</div>
			<div className="header__socials__youtube">
				<a href="#"><img src={youtube} alt="youTube link" /></a>
			</div>
			<div className="header__socials__telegram">
				<a href="#"><img src={telegram} alt="telegram link" /></a>
			</div>
		</div>
	 </div>
  )
}

export default Header