import React from 'react'
import './index.css'
import Menu from '@mui/icons-material/Menu';

export default function ButtonMenu({color, background}) {
  return (
    <button style={{color: `${color}`, backgroundColor: `${background}`, cursor: 'pointer'}} className='botao'>
      <Menu style={{height: "15px", width: "15px", marginRight: "15px", color: `${color}`}}/>
      Menu
    </button>
  )
}