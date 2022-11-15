import React from 'react'
import image from './image.png'
import styles from './products.module.css'

const Products = () => {
  return (
    <div className={styles.container}>
      <img className={styles.imagebackground} src={image} alt="" />
      <img className={styles.image} src={image} alt="" />
    </div>
  )
}

export default Products