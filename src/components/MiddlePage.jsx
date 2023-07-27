import React from 'react'

import sobreMim from "../mocks/Description"

import imageDescription from "../img/backgroundimg.svg"

import '../styles/App.css'

export default function Content() {

  return (
    <div className='middle-container'>    
        <div className='middle-content'>
          <div className='description'>
            <h1>{sobreMim.title}</h1>
            <p>{sobreMim.paragraph}</p>
          </div>
          <div className='bg-image-middle'>
            <img className='background-image-links' src={imageDescription} alt="Homem em pé buscando um documento"/> 
          </div>
        </div>
    </div>
    
  )
}