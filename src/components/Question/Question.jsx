import React, { useState } from 'react'
import './question.css'

const Question = ({question, text}) => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<div className={isOpen ? 'question active' : 'question'}>
			<h2>{question}</h2>
			<button onClick={() => setIsOpen(prev => !prev)}></button>
			{isOpen 
				?
				<div className="question__text">
					{text.map((el, index) => <p key={index}>{el}</p>)}
				</div>
				:
				<div className="question__text">
					<p>{text[0].slice(0, 150) + '...'}</p>
				</div>
			}
		</div>
	)
}

export default Question