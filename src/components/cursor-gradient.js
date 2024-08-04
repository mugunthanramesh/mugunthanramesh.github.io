import React, { useState, useEffect } from 'react';

const CursorCircle = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(134, 160, 235, 0.1) 0%, rgba(134, 160, 235, 0) 70%)',
                transform: `translate(${position.x - 300}px, ${position.y - 300}px)`,
            }}
        />
    );
};

export default CursorCircle;