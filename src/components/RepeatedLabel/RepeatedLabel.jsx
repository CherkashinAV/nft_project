import React from 'react'
import './repeatedLabel.css'

const RepeatedLabel = ({gap, amount, children}) => {
  const text = new Array(amount).fill(<h1>{children}</h1>);
  return (
	 <div className='repeated-label' style={{gap: gap}}>
      {text}
   </div>
  )
}

export default RepeatedLabel