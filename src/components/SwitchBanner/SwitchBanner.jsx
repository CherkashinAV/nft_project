import React, { useEffect, useRef, useState } from 'react'
import './switchBanner.css'

const Banner = ({label, text, img}) => {
	return (
		<div className='banner'>
			<div className="banner__img">
				<img src={img} alt="" />
			</div>
			<div className="banner__content">
				<div className="banner__content__label">
					<p>{label}</p>
				</div>
				<div className="banner__content__text">
					{text.map((el, index) => <p key={index}>{el}</p>)}
				</div>
			</div>
		</div>
	)
}

const SwitchBanner = ({items}) => {
	const [curItem, setCurItem] = useState(0);
	const headersRef = useRef(null);

	function clickHandler(index) {
		setCurItem(index);
	}

	useEffect(() => {
		let len = headersRef.current.children.length;
		for (let i = 0; i < len; i++) {
			headersRef.current.children[i].className = '';
		}
		headersRef.current.children[curItem].className='active';
	}, [curItem])

	return (
		<div className='switch-banner'>
			<div className="switch-banner__headers" ref={headersRef}>
				{items.map((el, index) => 
					<div 
					className={index === 0 ? 'active' : ''}
					key={el.header} 
					onClick={(e) => clickHandler(index)}>
						{el.header}
					</div>)}
			</div>
			<Banner 
				label={items[curItem].label}
				text={items[curItem].text}
				img={items[curItem].img}/>
		</div>
	)
}

export default SwitchBanner