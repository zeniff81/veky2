import React from 'react'
import styles from './header.module.css'
import MenuButton from './MenuButton'

const Header = () => {
  return (
    <div className={styles.header}>
      <img src="/img/logo.png" alt="main logo" />
      <MenuButton />
    </div>
  )
}

export default Header