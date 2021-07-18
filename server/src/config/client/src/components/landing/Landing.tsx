import React from 'react'

import './Landing.scss'

import Nav from '../nav/Nav'
import logo from '../../assets/bombbombmaker.svg'

export const Landing = () => {
  return (
    <main className="landing">
      <Nav hover={true} />
      <img
        className="big-logo"
        alt="bath bomb maker logo"
        title="Bath Bomb Maker"
        src={logo}
      />
    </main>
  )
}
