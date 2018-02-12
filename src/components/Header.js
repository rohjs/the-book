import React from 'react'
import logo from '../assets/logo.svg'
import '../styles/Header.css'

const Header = () => {
  return (
    <header className='header'>
      <h1 className='logo'>
        <img
          src={logo}
          alt='책'
        />
      </h1>
      <p className='copyright'>
        Copyright &copy; 2018 Roh Woohyeon.
      </p>
    </header>
  )
}

export default Header