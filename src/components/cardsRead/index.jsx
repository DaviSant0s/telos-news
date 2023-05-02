import React from 'react'
import './index.css'
import image1 from './image1.png'
import image2 from './image2.png'
import image3 from './image3.png'
import image4 from './image4.png'

export default function CardsRead() {
  return (
    <div className='card-content'>
        <div className='title-read'>Leia também</div>
        <div className='image1 img-card'>
            <img src={image1} alt="imagem1" />
            <div className='read'>
                <p style={{color: '#517BB3'}} className='title'>Mercado de trabalho</p>
                <p>Gamificação: saiba <br/>como ela pode… </p>
            </div>
        </div>
        <div className='image2 img-card'>
            <img src={image2} alt="imagem2" />
            <div className='read'>
                <p style={{color: '#958186'}} className='title'>Negócios</p>
                <p>Por que trabalhar <br/>com propósito ?</p>
            </div>
        </div>
        <div className='image3 img-card'>
            <img src={image3} alt="imagem3" />
            <div className='read'>
                <p className='title'>Educação</p>
                <p>Por que contratar <br/>treinamentos…</p>
            </div>
        </div>
        <div className='image4 img-card'>
            <img src={image4} alt="imagem4" />
            <div className='read'>
                <p className='title'>Educação</p>
                <p>O que levar em <br/>consideração…</p>
            </div>
        </div>
    </div>
  )
}
