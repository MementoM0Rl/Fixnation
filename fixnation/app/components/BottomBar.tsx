import React from 'react';

const BottomBar: React.FC = () => (
    <div
        style={{
            position: 'fixed',
            left: 0,
            bottom: -7,
            width: '100%',
            background: '#674636',
            color: '#FFFFFF',
            textAlign: 'center',
            padding: '12px 0',
            boxShadow: '0 -2px 8px rgba(0,0,0,0.1)',
            zIndex: 100,
        }}
    >
        © 2024 Fixnation. All rights reserved.
    </div>
);

export default BottomBar;