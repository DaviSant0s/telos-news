import React from 'react'
import './index.css'
import LogoutIcon from '@mui/icons-material/Logout';

export default function ButtonHeader() {
  return (
    <button className='botao'>
      <LogoutIcon style={{height: "15px", width: "15px", marginRight: "15px"}}/>
      Entrar
    </button>
  )
}
