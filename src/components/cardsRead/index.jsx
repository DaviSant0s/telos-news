import React from 'react'
import './index.css'
import image1 from './image1.png'

export default function CardsRead() {
  return (
    <div className='card-content'>
        <img src={image1} alt="imagem1" />
        <div className='read'>
            <p>Mercado de trabalho</p>
            <p>Gamificação: saiba <br/>como ela pode… </p>
        </div>
    </div>
  )
}
