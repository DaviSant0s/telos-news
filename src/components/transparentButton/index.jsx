import React from 'react'
import './index.css'

export default function TransparentButton({height, width, fontSize}) {
  return (
    <button className='transparentButton' style={{width: `${width}px`, height: `${height}px`, fontSize: `${fontSize}px`}}>Saiba mais</button>
  )
}
