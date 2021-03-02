import React from 'react';
import styles from './styles.module.css';

const Footer = () => (
  <div className={styles.wrapper}>
    <div>
      <p>Projeto desenvolvido por: Yan Oliveira</p>
    </div>
    <div className={styles.imagesWrapper}>
      <img className={styles.image} src="/fsm.png" alt="FullStack Master" />
      <img className={styles.image} src="/devpleno.png" alt="DevPleno" />
    </div>
  </div>
);

export default Footer;
