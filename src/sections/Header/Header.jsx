import React from 'react'
import './header.css'
import { logo, discord, youtube, twitter, telegram } from '../../assets'
import { motion } from 'framer-motion'
import { socialsVariants } from '../../animations'

const Header = () => {
  return (
	 <div className='header'>
		<div className="header__nav">
			<motion.div 
				className="header__nav__logo"
				initial={{opacity: 0}}
				animate={{opacity: 1}}
				transition={{delay: 0.8}}>
				<img src={logo} alt="logo" />
			</motion.div>
			<ul className='header__nav__nav-links'>
				<motion.li
					initial={{opacity: 0}}
					animate={{opacity: 1, transition: {delay: 0.9}}}
					whileHover={{scale: 1.2}}>
					<a href='#'>
						Wave NFTs
					</a>
				</motion.li>
				<motion.li
					initial={{opacity: 0}}
					animate={{opacity: 1, transition: {delay: 0.9}}}
					whileHover={{scale: 1.2}}
					>
					<a href='#'>
						Stories
					</a>
				</motion.li>
				<motion.li
					initial={{opacity: 0}}
					animate={{opacity: 1, transition: {delay: 0.9}}}
					whileHover={{scale: 1.2}}>
					<a href='#'>
						Contact
					</a>
				</motion.li>
			</ul>
		</div>
		<div className="header__socials">
			<motion.div 
				className="header__socials__twitter"
				initial='hidden'
				animate='visible'
				whileHover='hover'
				ease={'easeIn'}
				custom={1.2}
				variants={socialsVariants}
				>
				<a href='#'><img src={twitter} alt="twitter link" /></a>
			</motion.div>
			<motion.div 
				className="header__socials__discord"
				initial='hidden'
				animate='visible'
				whileHover='hover'
				ease={'easeIn'}
				custom={1.7}
				variants={socialsVariants}>
				<a href="#"><img src={discord} alt="discord link" /></a>
			</motion.div>
			<motion.div 
				className="header__socials__youtube"
				initial='hidden'
				animate='visible'
				whileHover='hover'
				ease={'easeIn'}
				custom={2.2}
				variants={socialsVariants}>
				<a href="#"><img src={youtube} alt="youTube link" /></a>
			</motion.div>
			<motion.div 
				className="header__socials__telegram"
				initial='hidden'
				animate='visible'
				whileHover='hover'
				ease={'easeIn'}
				custom={2.7}
				variants={socialsVariants}>
				<a href="#"><img src={telegram} alt="telegram link" /></a>
			</motion.div>
		</div>
	 </div>
  )
}

export default Header