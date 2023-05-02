import React from 'react'
import SocialMedia from '../../components/socialMedia'
import News from '../../components/news'
import './index.css'
import CardsRead from '../../components/cardsRead'

export default function PostNews() {
  return (
    <div className='post-container'>
        <div className='post-content'>
            {/* <SocialMedia/> */}
            <News/>
            <CardsRead/>
        </div>
    </div>
  )
}
