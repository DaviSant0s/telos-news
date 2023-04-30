import React from 'react';
import "./index.css";

export default function Logo({color, logo}) {
  return (
    <div className='logo'>
        <img src={logo} alt="logo"/>
        <span style={{color: `${color}`}}>télos</span>
    </div>
  )
}
