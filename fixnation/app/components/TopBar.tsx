import Link from 'next/link';
import styles from './TopBar.module.css';

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.logo}>
        <img src="/images/fixnation-logo.jpg"
        className="
        w-45 h-30"
        />
        
    
      </div>
      <div className={styles.nav}>
        <Link href="/about">About</Link>
        <Link href="/about">Donate</Link>
      </div>
    </div>
  );
};

export default TopBar;
