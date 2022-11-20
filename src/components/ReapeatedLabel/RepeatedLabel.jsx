import React from 'react'

const RepeatedLabel = ({gap, amount, children}) => {
  const text = new Array(amount).fill(children);
  return (
	 <div className='repeated-label' style={{gap: gap, }}>
      {text}
   </div>
  )
}

export default RepeatedLabel