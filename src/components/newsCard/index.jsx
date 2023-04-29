import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import image from './image.png'
import './index.css'
import ButtonCard from '../ButtonCard';

export default function NewsCard() {
  return (
    <Card sx={{
      paddingTop: '10px', 
      paddingLeft: '10px', 
      width: '50%', 
      height: '47em', 
      borderRadius: '0px 0px 30px 30px',
      backgroundColor: '#F7F2FA',
      boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)'
      }}>

      <CardMedia
        sx={{ height: '25em', 
        borderRadius: '30px'
      }}
        image= {image}
        title="news"
      />

        <div className='tech'>Tecnologia</div>
      <CardContent>

        <Typography variant="body2" style={{fontSize: '25px', margin: '2em 0 2em 0', color: '#49454F', textAlign: 'left'}}>
        Entenda como a tecnologia vem alterando os mais diversos tipos de relações pessoais e profissionais
        </Typography>
      </CardContent>
      <CardActions>
        <ButtonCard/>
      </CardActions>
    </Card>
  )
}
