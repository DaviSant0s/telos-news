import React from 'react';
import Logo from '../logo';
import ButtonHeader from '../buttonHeader';
import './index.css';
import whiteLogo from './whiteLogo.png';
import ButtonMenu from '../buttonMenu';
import usuario from './usuario.png'

export default function HeaderNews() {
  return (
    <div className='container-news'>
        <div className='container-background'>
            <div className='content-news'>
                <div className='botao-menu'>
                    <ButtonMenu color={'white'} background={'transparent'}/>
                </div>
                <div className='logo'>
                    <Logo color={'white'} logo={whiteLogo}/>
                </div>
                <div className='botao-entrar'>
                    <ButtonHeader color={'white'} background={'transparent'}/>
                </div>
            </div>
            <div className='burnout'>
                Burnout: você sabe lidar com o <br/>esgotamento profissional?
            </div>
        </div>
        <div className='gradient'>
                
        </div>
        <div className='usuario'>
            <img src={usuario} alt="usuario" />
            <p className='nome'>John Doe</p>
            <p className='duracao'>Tempo de leitura: 10 minutos</p>
        </div>
    </div>
  )
}
