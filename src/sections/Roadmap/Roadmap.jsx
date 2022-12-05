import React from 'react'
import './roadmap.css'
import { redNft, blueNft, circles } from '../../assets'
import RoadmapCard from '../../components/RoadmapCard/RoadmapCard'

const cards = [
  {
    phaseText: 'phase 1 - completed',
    title: 'Spring 2022 - pre launch',
    tasks: ['Website 1.2', 'Discord community promotion', 'MINTING WAVE NFTs'],
    plan: ['WAVE NFTs will be 100% pre-minted and launched as an OpenOcean collection'],
    img: redNft,
    completed: true,
  },
  {
    phaseText: 'phase 2',
    title: 'Summer 2022 - GROWTH',
    tasks: ['Hiring for 10 positions in', 'Partnerships with main Metaverse players', 'Partnerships with WEB 2.0 music destribution channels'],
    plan: ['Onboarding 100 new artists', 'META Record Labels is holding the first screening of aspiring artists from the list of WAVE NFT holders'],
    img: blueNft,
    completed: false,
  },
  {
    phaseText: 'phase 3',
    title: 'Summer 2022 - your new stage',
    tasks: ['Onboarding new partners', 'First live concert in Sandjar', 'Live concert in Decentrafield'],
    plan: ['We secured dates for out artists to peform in front of the live audience of Metaverse. Check the concert schedule in our'],
    img: redNft,
    completed: false,
  }
]

const Roadmap = () => {
  return (
    <div className='roadmap'>
      <h1>roadmap</h1>
      <div className="roadmap__cards">
        {cards.map((el, index) => 
          <div className="roadmap__cards__container">
            <div className="roadmap__cards__container__circles">
              <img src={circles} alt="" />
            </div>
            <RoadmapCard 
              key={index} 
              index={index + 1}
              phaseText={el.phaseText}
              title={el.title}
              tasks={el.tasks}
              plan={el.plan}
              img={el.img}
              completed={el.completed}
              />
          </div>
        )}
      </div>
    </div>
  )
}

export default Roadmap