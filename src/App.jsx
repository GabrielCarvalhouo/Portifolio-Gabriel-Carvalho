import React from 'react'

import "./styles/App.css"

import Header from './components/Header'
import BtnMenu from './components/BtnMenu'

const App = () => {
  return (
    <div className='app'>
        <Header className='header'/>
        <BtnMenu/>
    </div>
  )
}

export default App