import React from 'react'
import './index.css'
import TransparentButton from '../transparentButton'
import ColoredButton from '../coloredButton'

export default function ButtonCard() {
  return (
    <div className='button-container'>
        <TransparentButton width={200} height={70} fontSize={25}/>
        <ColoredButton width={200} height={70} fontSize={25}/>
    </div>
  )
}
