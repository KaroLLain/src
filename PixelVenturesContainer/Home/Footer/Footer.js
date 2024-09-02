import React from 'react'
import './Footer.css'

export default function Footer () {
  return (
    <footer className='footer'>
      <div className='footerWrapper'>
        <p className='footerText'>
          CopyRight © <span className='footer__date'>2024</span> KaroLain | All
          Rights Reserved
        </p>
        <div className='faWrapper'>
          <a className='faWrapperItem' href='https://github.com/KaroLLain'>
            <i className='fa fa-github-square' />
          </a>
          <a
            className='faWrapperItem'
            href='https://www.linkedin.com/in/karolina-knap-parzychowska-65b4a112b/'
          >
            <i className='fa fa-linkedin-square' />
          </a>
        </div>
      </div>
    </footer>
  )
}
