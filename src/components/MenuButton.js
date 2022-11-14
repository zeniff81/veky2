import React, { useState } from 'react';
import styles from './menubutton.module.css';

const MenuButton = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive((prev) => !prev);
  };
  return (
    <div className={styles.menu} onClick={handleClick}>
      <div
        className={styles.line}
        style={{
          transform: `rotate(${active ? 45 : 0}deg) ${active ? 'translate(4px, 5px)' : ''}`,
        }}
      ></div>
      <div
        className={styles.line}
        style={{
          transform: `translateX(${active ? -22 : 0}px)`,
          opacity: `${active ? '0' : 1}`
        }}
      ></div>
      <div
        className={styles.line}
        style={{
          transform: `rotate(${active ? -45 : 0}deg) ${active ? 'translate(4px, -5px)' : ''}`,
        }}
      ></div>
    </div>
  );
};

export default MenuButton;
