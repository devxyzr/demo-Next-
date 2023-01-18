import React from 'react';
import Navbar from '../Navbar';
import styles from './MainLayout.module.css';
import Head from 'next/head';
import Link from 'next/link';

export const MainLayout = ({ children }) => {
  return (
    // La etiqueta Head tiene la misma funcionalidad que head en HTML - Lo reemplaza.
    <>
      <Head>
        <title>Home - Ricardo</title>
        <meta name="description" content="Home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>{children}</main>
    </>
  );
};
