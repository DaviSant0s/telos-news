import React from 'react';
import brand from './brand.png';
import "./index.css";

export default function Logo() {
  return (
    <div className='logo'>
        <img src={brand} alt="logo" />
        <span>télos</span>
    </div>
  )
}
