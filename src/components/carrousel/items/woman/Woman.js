import React from 'react'
import styles from './woman.module.css'
import image from './woman.jpg'

const Woman = () => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="" />
      <div className={[styles.text, styles.text1].join(" ")}>ES TIEMPO DE UN CABELLO</div>
      <div className={[styles.text, styles.text2].join(" ")}>HERMOSO</div>
    </div>
  )
}

export default Woman