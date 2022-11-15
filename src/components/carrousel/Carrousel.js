import React, { useEffect, useState } from "react";
import styles from "./carrousel.module.css";
import LeftArrow from '@mui/icons-material/KeyboardDoubleArrowLeft';
import RightArrow from '@mui/icons-material/KeyboardDoubleArrowRight';
import { useCallback } from 'react';
import items from './items/items'

const Carrousel = () => {
  const [current, setCurrent] = useState(0)
  const [translateItem, setTranslateItem] = useState(0)
  const [opacityItem, setOpacityItem] = useState(1)


  const changeItem = useCallback(num => {
    if (items.length === 0) return

    let newCurrent = current + num
    if (newCurrent > items.length - 1) newCurrent = 0
    if (newCurrent < 0) newCurrent = items.length - 1

    setTranslateItem(num === 1 ? '100vh' : '-100vh')
    setOpacityItem(0)
    setTimeout(() => {
      setTranslateItem(num === 1 ? '-100vh' : '100vh')
      setCurrent(newCurrent)


      setTimeout(() => {
        setTranslateItem(0)
        setOpacityItem(1)
      }, 200)
    }, 200);

  }, [current])

  useEffect(() => {
    const interval = setInterval(() => {
      changeItem(1)
    }, 7000)

    return () => {
      clearInterval(interval)
    }
  }, [changeItem])



  return <div className={styles.container}>
    <div className={styles.display} style={{ transform: `translateX(${translateItem})`, opacity: `${opacityItem}` }}>
      {items.length > 0 && items[current]()}
    </div>
    <div className={styles.navButons}>
      <button className={styles.navButton} onClick={() => changeItem(-1)}><LeftArrow /></button>
      <button className={styles.navButton} onClick={() => changeItem(1)}><RightArrow /></button>
    </div>
  </div>;
};

export default Carrousel;
