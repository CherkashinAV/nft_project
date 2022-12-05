import React from 'react'
import './partners.css'
import { logoholder } from '../../assets'

const Partners = () => {
  const partnersList = Array(6).fill(logoholder)
  return (
	 <div className='partners'>
      <h1>our partners</h1>
      <div className="partners__list">
        {partnersList.map((el, index) => 
          <div key={index}>
            <img src={el} alt="" />
          </div>
        )}
      </div>
   </div>
  )
}

export default Partners