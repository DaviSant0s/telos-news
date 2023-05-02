import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import './index.css';

export default function SocialMedia() {
  return (
    <div className='container-social'>
      <InstagramIcon className='logo-social'/>
      <LinkedInIcon className='logo-social'/>
      <YouTubeIcon className='logo-social'/>
      <ChatBubbleIcon className='logo-social'/>
    </div>
  )
}
