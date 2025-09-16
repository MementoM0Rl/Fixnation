import Link from 'next/link';
import styles from './TopBar.module.css';

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.logo}>
        <Link href="/">Fixnation</Link>
      </div>
      <div className={styles.nav}>
        <Link href="/about">About</Link>
        <Link href="/services">Donate</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default TopBar;
