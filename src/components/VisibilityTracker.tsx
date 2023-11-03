import theme from '@/styles/theme';
import { Fade, Grow, Collapse, Slide, Box } from '@mui/material';

import React, { useRef, useEffect, useState } from 'react';

export enum AnimationType { FADE, GROW, NOANIMATION, SLIDE, COLLAPSE }
export enum CollapseOrientation { HORIZONTAL, VERTICAL }

interface VisibilityTrackerprops {
    children: React.ReactNode
    animationType: AnimationType | string
    timeout?: number
    reLoadOnScroll?: boolean
    collapseOrientation?: CollapseOrientation
}

const VisibilityTracker: React.FC<VisibilityTrackerprops> = ({ children, animationType, timeout = 1000, reLoadOnScroll: reLoadOnScroll = false, collapseOrientation = CollapseOrientation.VERTICAL }) => {
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
                    if (reLoadOnScroll) {
                        // console.log('Element is not visible');
                        setIsVisible(false);
                    }
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
                            reLoadOnScroll ? null : (isVisible ? (
                                <Fade
                                    {...(isVisible ? { timeout: timeout } : {})}
                                    in={isVisible}
                                // easing={{ enter: theme.transitions.easing.easeInOut, exit: theme.transitions.easing.easeInOut }}
                                >
                                    <div>{children}</div>
                                </Fade>
                            ) : null)
                        );
                    case AnimationType.GROW:
                        return (
                            reLoadOnScroll ? null : (isVisible ? (
                                <Grow
                                    {...(isVisible ? { timeout: timeout } : {})}
                                    in={isVisible}
                                    easing={{ enter: theme.transitions.easing.easeInOut, exit: theme.transitions.easing.easeInOut }}
                                >
                                    <div>{children}</div>
                                </Grow>
                            ) : null)
                        );
                    case AnimationType.NOANIMATION:
                        return (
                            isVisible ?
                                <div>{children}</div>
                                : null);
                    case AnimationType.COLLAPSE:
                        return (
                            <Collapse orientation={collapseOrientation == CollapseOrientation.VERTICAL ? "vertical" : "horizontal"} in={isVisible} timeout={timeout}>
                                <div>{children}</div>
                            </Collapse>

                        );
                    default:
                        return <div>{children}</div>;
                }
            })()}
        </div>
    );
};

export default VisibilityTracker;
