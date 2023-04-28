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
    <Card sx={{ maxWidth: 345, padding: '0.3em'}}>
      <CardMedia
        sx={{ height: 140 }}
        image= {image}
        title="news"
      />
        <div className='tech'>Tecnologia</div>
      <CardContent>

        <Typography variant="body2" color="text.secondary" style={{fontSize: '0.8em'}}>
        Entenda como a tecnologia vem alterando os mais diversos tipos de relações pessoais e profissionais
        </Typography>
      </CardContent>
      <CardActions>
        <ButtonCard/>
      </CardActions>
    </Card>
  )
}
