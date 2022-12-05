import React from 'react'
import { redNft } from '../../assets'
import Question from '../../components/Question/Question'
import './questions.css'

const questions = [
  {
    question: 'How can I get into Meta RL?',
    text: ['Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius corrupti vero sint minima aliquid voluptas eaque facilis quisquam, maxime voluptatum?', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, magni!']
  },
  {
    question: 'When is the NFT launch?',
    text: ['Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati asperiores vero nulla modi, culpa inventore quaerat corrupti maiores. Fugiat maxime minus error commodi velit delectus quae similique totam. Reprehenderit eius ullam dolorum quis officia repellendus fuga enim rem similique ipsum laudantium earum, rerum molestias, magnam corrupti fugiat, id sit sequi.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla reiciendis cum unde sequi magnam! Aspernatur?']
  },
  {
    question: 'Where can I get a WAVE NFT?',
    text: ['Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet sunt maxime, inventore quibusdam quo cum.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sed nesciunt tempora totam neque at provident enim maiores laboriosam ad?', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, sed?']
  },
]

const Questions = () => {
  return (
	 <div className='questions'>
      <div className="questions__title">
        <h1>Frequently <span>asked</span> questions</h1>
        <div className="questions__title__img">
          <img src={redNft} alt="" />
        </div>
      </div>
      <div className="questions__content">
        {questions.map((el, index) => <Question key={index} question={el.question} text={el.text}/>)}
      </div>
   </div>
  )
}

export default Questions