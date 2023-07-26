import React from 'react'

import imageDescription from "../img/avatartransparentbg.png"

import '../styles/App.css'

const Content = () => {
  return (
    <div className='middle-container'>   
      <h1>Seja bem vindo ao meu portifólio</h1>
      <h2>Em breve irei trazer mais atualizações</h2> 
        <div className='middle-content'>
          <img className='background-image-links' src={imageDescription} alt="Homem Sentado ao lado de uma impressora"/> 
        </div>
    </div>
    
  )
}

export default Content;