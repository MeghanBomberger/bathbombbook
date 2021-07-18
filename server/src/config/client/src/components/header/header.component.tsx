import React from 'react'
import { Link } from 'react-router-dom'

import './header.styles.scss'
import logo from '../../assets/logo.png'
import Nav from '../nav/Nav'

interface HeaderProps {
  title?: string
}

export const Header = ({
  title
}: HeaderProps) => {
  return (
    <header className="header">
      <Link to="/">
        <img
          alt="logo"
          className="logo"
          title="Bath Bomb Maker"
          src={logo}
        />
      </Link>
      {title && <h1>{title}</h1>}
      <Nav hover={false} />
    </header>
  )
}
