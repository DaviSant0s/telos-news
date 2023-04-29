import React from 'react'
import './index.css'

export default function ColoredButton({height, width, fontSize}) {
  return (
    <button className='coloredButton' style={{width: `${width}px`, height: `${height}px`, fontSize: `${fontSize}px`}}>Ler Agora</button>
  )
}
