"use client";
import Link from 'next/link';
import styles from './footer.module.css';
import React from 'react';

const BottomBar: React.FC = () => (
    <div
        style={{
            position: 'fixed',
            left: 0,
            bottom: 0,
            width: '100%',
            background: '#674636',
            color: '#FFFFFF',
            padding: '18px 0',
            boxShadow: '0 -2px 8px rgba(0,0,0,0.1)',
            zIndex: 100,
        }}
    >
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 24px',
            }}
        >
            <div style={{ display: 'flex', gap: '16px' }}>
                <Link href="/aboutus" style={{ color: '#FFFFFF', textDecoration: 'none' }}>
                    ABOUT US
                </Link>
                <Link href="/contactus" style={{ color: '#FFFFFF', textDecoration: 'none' }}>
                    CONTACT US
                </Link>
            </div>
            <div style={{ textAlign: 'right' }}>
                © 2025 Fixnation. All rights reserved.
            </div>
        </div>
    </div>
);
export default BottomBar;