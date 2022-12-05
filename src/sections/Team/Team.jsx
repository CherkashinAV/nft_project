import React from 'react'
import RepeatedLabel from '../../components/RepeatedLabel/RepeatedLabel'
import './team.css'
import { team1, team2, team3 } from '../../assets'
import TeamCard from '../../components/TeamCard/TeamCard'

const team = [
  {
    img: team1,
    name: 'Shaky Lake',
    profession: 'Founder',
    twitterLink: '#',
    linkedInLink: '#',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
  },
  {
    img: team2,
    name: 'Baky Hike',
    profession: 'Co-founder',
    twitterLink: '#',
    linkedInLink: '#',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
  },
  {
    img: team3,
    name: 'Vania Do',
    profession: 'Producer',
    twitterLink: '#',
    linkedInLink: '#',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
  }
]

const Team = () => {
  return (
	 <div className='team'>
      <RepeatedLabel gap='255px' amount={4}>team</RepeatedLabel>
      <div className="team__content">
        {team.map(el => 
          <TeamCard 
            key={el.name}
            img={el.img} 
            name={el.name} 
            profession={el.profession} 
            twitterLink={el.twitterLink} 
            linkedInLink={el.linkedInLink}
            text={el.text}/>
          )
        }
      </div>
   </div>
  )
}

export default Team