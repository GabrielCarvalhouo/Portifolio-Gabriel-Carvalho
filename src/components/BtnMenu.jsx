import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import '../styles/Button.css'

import { MenuOutlined } from '@ant-design/icons'

const BtnMenu = () => {

    const isMobile = useMediaQuery({ maxWidth: 630 });
    const [isExpanded, setExpanded] = useState(false);
    
    const clickBtn = () => {
        setExpanded(!isExpanded);
    }

  return (
    <div className="expanding-button-container">
        {isMobile ? (
            <button className="expanding-button" onClick={clickBtn}>
                <MenuOutlined/>
            </button>
        ) : (
            <div className="expanded-links">
                <a href="#">Sobre mim</a>
                <a target="_blank" href="https://github.com/GabrielCarvalhouo">github</a>
                <a target="_blank" href="https://www.linkedin.com/in/gabriel-carvalho-a110371a1/">linkedin</a>
            </div>
        )}
        {isExpanded && (
            <div className="expanded-links">
                <a href="#">Sobre mim</a>
                <a target="_blank" href="https://github.com/GabrielCarvalhouo">github</a>
                <a target="_blank" href="https://www.linkedin.com/in/gabriel-carvalho-a110371a1/">linkedin</a>
            </div>
        )}
    </div>
  )
}

export default BtnMenu