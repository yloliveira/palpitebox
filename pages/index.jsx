import React from 'react';
import Link from 'next/link';

const Home = () => (
  <div>
    <h1>Home</h1>
    <Link href="/about">
      <a>Sobre</a>
    </Link>
    <Link href="/contact">
      <a>Contato</a>
    </Link>
    <Link href="/search">
      <a>Pesquisa</a>
    </Link>
  </div>
);

export default Home;
