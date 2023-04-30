import React from 'react';
import Logo from '../logo';
import ButtonHeader from '../buttonHeader';
import './index.css';
import whiteLogo from './whiteLogo.png';

export default function HeaderNews() {
  return (
    <div className='container-news'>
        <div className='container-background'>
            <div className='content-news'>
                <Logo color={'white'} logo={whiteLogo}/>
                <ButtonHeader color={'white'} background={'transparent'}/>
            </div>
        </div>
        <div className='gradient'>
                sobreposição
        </div>
    </div>
  )
}
