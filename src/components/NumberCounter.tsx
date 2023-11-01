import React, { useState, useEffect } from 'react';

interface NumberCounterProps {
    targetNumber: number;
    duration: number; // Animation duration in milliseconds
}

const NumberCounter: React.FC<NumberCounterProps> = ({ targetNumber, duration }) => {
    const [count, setCount] = useState(0);
    const styles: React.CSSProperties = {
        display:'inline',
    }
    useEffect(() => {
        const startTimestamp = Date.now();
        const endTimestamp = startTimestamp + duration;
        let animationFrameId: number;

        const updateCount = () => {
            const currentTimestamp = Date.now();
            const elapsedTime = currentTimestamp - startTimestamp;

            if (elapsedTime < duration) {
                const progress = elapsedTime / duration;
                const nextCount = Math.floor(progress * targetNumber);
                setCount(nextCount);
                animationFrameId = requestAnimationFrame(updateCount);
            } else {
                setCount(targetNumber);
            }
        };

        updateCount();

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [targetNumber, duration]);

    return <div style={styles} >{count}</div>;
};

export default NumberCounter;