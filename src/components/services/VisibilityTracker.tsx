import theme from '@/styles/theme';
import Fade from '@mui/material/Fade';
import Grow from '@mui/material/Grow';
import Slide from '@mui/material/Slide';
import React, { useRef, useEffect, useState } from 'react';

export enum AnimationType { FADE, GROW, NOANIMATION }

interface VisibilityTrackerprops {
    children: React.ReactNode
    animationType: AnimationType | string
}

const VisibilityTracker: React.FC<VisibilityTrackerprops> = ({ children, animationType }) => {
    const targetRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    // Element is in the viewport
                    // console.log('Element is visible');
                    // Call your function or trigger an action here
                    setIsVisible(true);
                    // yourFunctionToCall();
                } else {
                    // Element is not in the viewport
                    // console.log('Element is not visible');
                    setIsVisible(false);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.5,
            }
        );

        if (targetRef.current) {
            observer.observe(targetRef.current);
        }

        // Cleanup when the component unmounts
        return () => {
            if (targetRef.current) {
                observer.unobserve(targetRef.current);
            }
        };
    }, []);

    // const yourFunctionToCall = () => {
    //     // Replace this with the function you want to call when the element is visible
    //     console.log('Calling your function when element is visible');
    //     // You can perform any action or function call here
    //     return <div>

    //     </div>
    // };

    return (
        <div ref={targetRef}>
            {(() => {
                switch (animationType) {
                    case AnimationType.FADE:
                        return (
                            isVisible ? (
                                <Fade
                                    {...(isVisible ? { timeout: 1000 } : {})}
                                    in={isVisible}
                                    easing={{ enter: theme.transitions.easing.easeInOut, exit: theme.transitions.easing.easeInOut }}
                                >
                                    <div>{children}</div>
                                </Fade>
                            ) : <div>{children}</div>
                        );
                    case AnimationType.GROW:
                        return (
                            isVisible ? (
                                <Grow
                                    {...(isVisible ? { timeout: 1000 } : {})}
                                    in={isVisible}
                                    easing={{ enter: theme.transitions.easing.easeInOut, exit: theme.transitions.easing.easeInOut }}
                                >
                                    <div>{children}</div>
                                </Grow>
                            ) : <div>{children}</div>
                        );
                    case AnimationType.NOANIMATION:
                        return (
                            isVisible ?
                                <div>{children}</div>
                                : null);
                    default:
                        return <div>{children}</div>;
                }
            })()}
        </div>
    );
};

export default VisibilityTracker;
