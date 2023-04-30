import React from 'react';
import Logo from '../logo';
import ButtonHeader from '../buttonHeader';
import './index.css';
import whiteLogo from './whiteLogo.png';

export default function HeaderNews() {
  return (
    <div className='container-news'>
        <Logo color={'white'} logo={whiteLogo}/>
        <ButtonHeader color={'white'} background={'transparent'}/>
    </div>
  )
}
