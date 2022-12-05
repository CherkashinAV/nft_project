import React from 'react'
import './footer.css'
import { logo, twitter, discord, youtube, telegram } from '../../assets'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__logo">
        <img src={logo} alt="" />
        <p>©2022 All rights reserved</p>
      </div>
      <div className="footer__links">
        <a href="#">Wave NFTs</a>
        <a href="#">Stories</a>
        <a href="#">Contact</a>
        <a href="#">Licencing</a>
        <a href="#">Style Guide</a>
        <a href="#">Changelog</a>
      </div>
      <div className="footer__developer-info">
        <p>Developed by Andrey Ch.</p>
        <p>Designed by Anastasiia G.</p>
      </div>
      <div className="footer__socials">
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
    </footer>
  )
}

export default Footer