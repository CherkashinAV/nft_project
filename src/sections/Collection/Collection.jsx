import React from 'react'
import './collection.css'
import {blueNft} from '../../assets'

const Collection = () => {
  return (
	 <div className='collection'>
		<div className="collection__title">
			<div className="collection__title__label">
				<h1>wave nft <span>Collection of 777</span></h1>
				<div className="collection__title__img">
					<img src={blueNft} alt="" />
				</div>
			</div>
		</div>
		<div className="collection__content">
			<div className="collection__content__what-is-meta">
				<p>META WAVE NFT is your pass to Meta Record Label ecosystem. It is your access to our industry experts, established artists, and partners.</p>
			</div>
			<div className="collection__content__text">
				<p>Hac habitasse platea dictumst vestibulum rhoncus est. Sit amet dictum sit amet justo. Tortor aliquam nulla facilisi cras.</p>
				<p>Maecenas ultricies mi eget mauris pharetra. Sit amet consectetur adipiscing elit ut aliquam purus. Porta nibh venenatis cras sed felis. Aenean vel elit scelerisque mauris pellentesque pulvinar. Et malesuada fames ac turpis egestas sed tempus. Enim sit amet venenatis urna cursus eget.</p>
				<p>Maecenas ultricies mi eget mauris pharetra et ultrices. A condimentum vitae sapien pellentesque habitant morbi.</p>
			</div>
			<div className="collection__content__button">
				<a href='#'>Get one on OpenSea</a>
			</div>
		</div>
	 </div>
  )
}

export default Collection