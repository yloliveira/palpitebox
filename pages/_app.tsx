import React from 'react';
import '../styles/global.css';
import { AppProps } from 'next/app';
import styles from '../styles/app.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function App({ Component, pageProps }: AppProps) {
  return (

    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>

  );
}

export default App;
