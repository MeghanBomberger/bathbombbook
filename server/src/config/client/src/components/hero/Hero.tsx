import React from 'react'

import './Hero.scss'

import Nav from '../nav/Nav'

import logo from '../../assets/bombbombmaker.svg'

export default function Hero() {
  return (
    <header className="header">
      <Nav />
      <img
        className="logo"
        alt="bath bomb maker logo"
        title="Bath Bomb Maker"
        src={logo}
      />
    </header>
  )
}