import React from 'react'

import BtnLinks from './BtnLinks'

import '../styles/Header.css'

const Header = () => {
  return (
    <div className='container-header'>
        <div className='content-header'>
            <div className='menu'>
                <h1 className='name'>Gabriel Carvalho</h1> 
            </div>
            <div className='btn-menu'>
                <BtnLinks/>
            </div>
        </div>  
    </div>
  )
}

export default Header
