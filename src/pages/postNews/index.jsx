import React from 'react'
import SocialMedia from '../../components/socialMedia'
import News from '../../components/news'
import './index.css'
import CardsRead from '../../components/cardsRead'
import { Link } from 'react-router-dom'

export default function PostNews() {
  return (
    <div className='post-container'>
        <div className='post-content'>
          <div className='absoluto'><Link style={{color: 'white', backgroundColor: 'blue', textDecoration: 'none'}} to="/">Home</Link></div>
            <SocialMedia/>
            <News/>
            <CardsRead/>
        </div>
    </div>
  )
}
