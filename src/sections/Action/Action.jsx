import React from 'react'
import { discord, redNft } from '../../assets'
import './action.css'

const Action = () => {
  return (
	 <div className='action'>
      <div className="action__content">
        <h1>Join our <span>Discord</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
        <a href='#'>
          <img src={discord} alt="" />
          <p>Join Discord</p>
        </a>
      </div>
      <div className="action__img">
        <img src={redNft} alt="" />
      </div>
   </div>
  )
}

export default Action