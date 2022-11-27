import React from 'react'
import './roadmapCard.css'

const RoadmapCard = ({index, phaseText, title, tasks, plan, img, completed}) => {
  return (
	 <div className='roadmap-card'>
		<div className="roadmap-card__heading">
			<div className="roadmap-card__heading__index">
				<span>{index}</span>
			</div>
			<div className="roadmap-card__heading__content">
				<p>{phaseText}</p>
				<h2>{title}</h2>
			</div>
		</div>
		<div className="roadmap-card__content">
			<div className="roadmap-card__content__text">
				<div className="roadmap-card__content__text__tasks">
					{tasks.map((el, index) => <p key={index}>el</p>)}
				</div>
				<div className="roadmap-card__content__text__plan">
					{plan.map((el, index) => <p key={index}>el</p>)}
				</div>
			</div>
			<div className="roadmap-card__content__img">
				<img src={img} alt="" />
			</div>
		</div>
	 </div>
  )
}

export default RoadmapCard