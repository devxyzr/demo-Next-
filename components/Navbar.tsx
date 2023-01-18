//Componentes capitalizados la primera en mayusculas

import Link from 'next/link';
import styles from './Navbar.module.css';
import ActiveLink from './ActiveLink';

const Navbar = () => {
  return (
    <nav className={styles.menu}>
      <ActiveLink text="Home" href="/" />
      <ActiveLink text="About" href="/about" />
      <ActiveLink text="Contact" href="/contact" />
    </nav>
  );
};

export default Navbar;
