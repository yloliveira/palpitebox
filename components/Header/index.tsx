import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css';

const Header = () => (
  <>
    <div className={styles.wrapper}>
      <img className={styles.logo} src="/logo.png" alt="PalpiteBox" />
    </div>
    <div className={styles.menuWrapper}>
      <Link href="/">
        <a className={styles.link}>Home</a>
      </Link>
      <Link href="/about">
        <a className={styles.link}>Sobre</a>
      </Link>
      <Link href="/contact">
        <a className={styles.link}>Contato</a>
      </Link>
      <Link href="/search">
        <a className={styles.link}>Pesquisa</a>
      </Link>
    </div>
  </>
);

export default Header;
