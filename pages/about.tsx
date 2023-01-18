import Head from 'next/head';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

import { MainLayout } from '../components/layouts/MainLayout';
import { DarkLayout } from '../components/layouts/DarkLayout';

const inter = Inter({ subsets: ['latin'] });

// Obligatorio que la paginas tengan exportacion por defecto
// No tiene relacion el nombre del archivo con el nombre del componente
// Admite archivos Tsx, js, jsx
// No van funcionar nombres capitalizados.
// El nombre del archivo es el nombre del path
// Rutas implicitas basadas en file sistems

export default function AboutPage() {
  return (
    <>
      <div className={styles.description}>
        <h1>About Page</h1>
        <h1>
          Ir a <Link href="/">Home</Link>
        </h1>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>pages/index.tsx</code>
        </p>
      </div>
    </>
  );
}

AboutPage.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
