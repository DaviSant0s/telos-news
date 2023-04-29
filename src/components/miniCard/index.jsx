import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import image from './image.png';
import ColoredButton from '../coloredButton';



export default function MiniCard() {
  return (
    <Card  sx={{ width: '100%', height: '30em', boxShadow: 'none', backgroundColor: 'transparent' }}>
      
      <div style={{
        width: '93%',
        height: '14.5em',
        backgroundColor: '#F1F0EF',
        paddingBottom: '0.4em',
        paddingTop: '0.4em',
        borderRadius: '17.9749px',
        margin: 'auto',
        marginBottom: '0.8em',
        position: 'relative'


      }}>
        <CardMedia
          image={image}
          alt="leia mais"
          sx={{
            backgroundPosition: 'center center',
            height: '100%',
            width: '100%',
            backgroundSize: 'contain',

          }}
        />
        <span style={{
          
          
          textAlign: 'left',
          position: 'absolute', 
          top: '70%',
          left: '2%',

          color: '#252423',

          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: '23.9665px',
          lineHeight: '28px',
          letterSpacing: '-0.05em',
          
        }}>
          Porque trabalhar com <br/> propósito?
        </span>
      </div>

      <div style={{
        backgroundColor: 'transparent', 
        borderTop: '1px solid #CAC4D0', 
        display: 'flex', 
        justifyContent: 'left',
        padding: '1em 0 0 1em',
        height: '100px'
        }}>

      <ColoredButton width={130} height={50} fontSize={15}/>
      </div>
      
    </Card>
    
  );
}