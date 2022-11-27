import React from 'react'
import './repeatedLabel.css'

const RepeatedLabel = ({gap, amount, children}) => {
  const text = new Array(amount);
  for (let i = 0; i < amount; i++) {
    text.push(<h1 key={i}>{children}</h1>)
  }
  return (
	 <div className='repeated-label' style={{gap: gap}}>
      {text}
   </div>
  )
}

export default RepeatedLabel