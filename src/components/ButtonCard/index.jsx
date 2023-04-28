import React from 'react'
import Button from '@mui/material/Button';
import './index.css'

export default function ButtonCard() {
  return (
    <div className='button-container' style={{font: 'arial'}}>
        <Button style={{borderRadius: '20px'}} variant="outlined">Saiba Mais</Button>
        <Button style={{borderRadius: '20px', backgroundColor: '#6750A4'}} variant="contained">Ler Agora</Button>
    </div>
  )
}
