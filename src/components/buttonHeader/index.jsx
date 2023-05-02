import React from 'react'
import './index.css'
import LogoutIcon from '@mui/icons-material/Logout';

export default function ButtonHeader({color, background}) {
  return (
    <button style={{color: `${color}`, backgroundColor: `${background}`, cursor: 'pointer'}} className='botao'>
      <LogoutIcon style={{height: "15px", width: "15px", marginRight: "15px", color: `${color}`}}/>
      Entrar
    </button>
  )
}
