"use client";
import Link from 'next/link';
import styles from './TopBar.module.css';
import React, { useRef } from 'react';

const TopBar = () => {
  const menuImgRef = useRef<HTMLImageElement>(null);

  const handleMouseOver = () => {
    if (menuImgRef.current) {
      menuImgRef.current.src = "/images/fixnation-menu-hover.png";
    }
  };

  const handleMouseOut = () => {
    if (menuImgRef.current) {
      menuImgRef.current.src = "/images/fixnation-menu.png";
    }
  };

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
          <div
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            style={{ display: 'inline-block' }}
          >
            <img
              ref={menuImgRef}
              src="/images/fixnation-menu.png"
              className="w-20 h-20"
              alt="Menu"
            />
          </div>
        </Link>
        <button className="bg-amber-600 drop-shadow-black rounded-[50%] w-60 h-60"> </button>
      </div>
    </div>
  );
};

export default TopBar;
