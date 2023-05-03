import React from 'react'
import NewsCard from '../../components/newsCard'
import MiniCard from '../../components/miniCard'
import ReadTooCard from '../../components/readTooCard'
import './index.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
      <div className='content-container'>
            <div className='absolute'><Link style={{color: 'white', backgroundColor: 'blue', textDecoration: 'none'}} to="/news">Notícias</Link></div>
          <NewsCard />
          <div className='mini-cards'>
              <div className='miniCard-content cards'><MiniCard/></div>
              <div className='readCard-content cards'><ReadTooCard/></div>
          </div>
      </div>
  )
}
