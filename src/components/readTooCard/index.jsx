import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import image from './image.png';
import ColoredButton from '../coloredButton';

export default function ReadTooCard() {

  return (
    <Card sx={{ width: '100%', backgroundColor: '#F7F2FA', borderRadius: '20px' }}>
      <div style={{
        height: '3em',
        display: 'flex',
        alignItems: 'left',
      }}>

      <div style={{
        height: '1.5em',
        backgroundColor: 'transparent',
        margin: 'auto 0 auto 1.5em',
        display: 'flex'
      }}>
        <MoreVertIcon style={{color: '#3D3D3D', marginRight: '0.2em'}}/>
        <span style={{color: '#3D3D3D'}}>Leia também</span>
      </div>

      </div>
      <div style={{
        backgroundColor: '#DADCE0',
        height: '16em',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'

      }}>
        <CardMedia
          image={image}
          alt="card-leia-também"
          sx={{
            height: '15em',
            backgroundSize: 'contain',
          }}
        />
      </div>

      <div style={{textAlign: 'left', backgroundColor: 'transparent', paddingLeft: '1em'}}>
        <p style={{color: '#1D1B20', fontSize: '1em', fontWeight: '500', fontFamily: 'roboto'}}>Mercado de trabalho</p>
        <p>Como se comportar em uma entrevista online</p>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'end',
        backgroundColor: 'transparent',
        marginRight: '1em',
        marginTop: '2.3em'
      }}>
        <ColoredButton width={130} height={50} fontSize={15}/></div>
    </Card>
  );
}