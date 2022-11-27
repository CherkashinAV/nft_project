import React from 'react'
import { founders } from '../../assets/index'
import SwitchBanner from '../../components/SwitchBanner/SwitchBanner'
import './story.css'

const items = [
  {
    header: 'Our founders',
    img: founders,
    label: 'META record label was founded by Shaky Lake and Baky Hike in 2020 business accelerator.',
    text: [
      'Hac habitasse platea dictumst vestibulum rhoncus est. Sit amet dictum sit amet justo. Tortor aliquam nulla facilisi cras.',
      'Maecenas ultricies mi eget mauris pharetra. Sit amet consectetur adipiscing elit ut aliquam purus. Porta nibh venenatis cras sed felis. Aenean vel elit scelerisque mauris pellentesque pulvinar. Et malesuada fames ac turpis egestas sed tempus. Enim sit amet venenatis urna cursus eget.',
      'Maecenas ultricies mi eget mauris pharetra et ultrices. A condimentum vitae sapien pellentesque habitant morbi.'
    ]
  },
  {
    header: 'Partners',
    img: founders,
    label: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, blanditiis architecto.',
    text: [
      'Hac habitasse platea dictumst vestibulum rhoncus est. Sit amet dictum sit amet justo. Tortor aliquam nulla facilisi cras.',
      'Maecenas ultricies mi eget mauris pharetra. Sit amet consectetur adipiscing elit ut aliquam purus. Porta nibh venenatis cras sed felis. Aenean vel elit scelerisque mauris pellentesque pulvinar. Et malesuada fames ac turpis egestas sed tempus. Enim sit amet venenatis urna cursus eget.',
      'Maecenas ultricies mi eget mauris pharetra et ultrices. A condimentum vitae sapien pellentesque habitant morbi.'
    ]
  },
  {
    header: 'The future',
    img: founders,
    label: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque accusamus esse deserunt itaque alias.',
    text: [
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, excepturi!',
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid delectus animi labore omnis vero officia.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore laboriosam inventore facilis.'
    ]
  }
]

const Story = () => {
  return (
    <div className='story'>
      <h1>mrl.<span>the story</span></h1>
      <SwitchBanner items={items}/>
    </div>
  )
}

export default Story