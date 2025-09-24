"use client";
import Link from 'next/link';
import styles from './TopBar.module.css';
import React from 'react';

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.logo}>
        <img src="/images/fixnation-logo.jpg" className="w-45 h-30" />
      </div>
      <div className={styles.nav}>
        <span style={{ margin: '0 36px' }}></span>
        <Link href="#">
          <img src="/Images/fixnation-language.png" className="w-20 h-20" alt="Language" />
        </Link>
        <span style={{ margin: '0 36px' }}></span>
        <Link href="https://fixnation.org/">
          <img
            src="/images/fixnation-menu.png"
            className="w-20 h-20"
            alt="Menu"
          />
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
