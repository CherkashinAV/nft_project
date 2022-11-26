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
    header: 'a',
    img: founders,
    label: 'a',
    text: [
      'Hac habitasse platea dictumst vestibulum rhoncus est. Sit amet dictum sit amet justo. Tortor aliquam nulla facilisi cras.',
      'Maecenas ultricies mi eget mauris pharetra. Sit amet consectetur adipiscing elit ut aliquam purus. Porta nibh venenatis cras sed felis. Aenean vel elit scelerisque mauris pellentesque pulvinar. Et malesuada fames ac turpis egestas sed tempus. Enim sit amet venenatis urna cursus eget.',
      'Maecenas ultricies mi eget mauris pharetra et ultrices. A condimentum vitae sapien pellentesque habitant morbi.'
    ]
  },
  {
    header: 'b',
    img: founders,
    label: 'b',
    text: [
      'Hac habitasse platea dictumst vestibulum rhoncus est. Sit amet dictum sit amet justo. Tortor aliquam nulla facilisi cras.',
      'Maecenas ultricies mi eget mauris pharetra. Sit amet consectetur adipiscing elit ut aliquam purus. Porta nibh venenatis cras sed felis. Aenean vel elit scelerisque mauris pellentesque pulvinar. Et malesuada fames ac turpis egestas sed tempus. Enim sit amet venenatis urna cursus eget.',
      'Maecenas ultricies mi eget mauris pharetra et ultrices. A condimentum vitae sapien pellentesque habitant morbi.'
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