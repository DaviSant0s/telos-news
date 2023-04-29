import React from 'react'
import NewsCard from '../../components/newsCard'
import MiniCard from '../../components/miniCard'
import ReadTooCard from '../../components/readTooCard'
import './index.css';

export default function Home() {
  return (
      <div className='content-container'>
          <NewsCard />
          <div className='mini-cards'>
              <MiniCard />
              <ReadTooCard/>
          </div>
      </div>
  )
}
