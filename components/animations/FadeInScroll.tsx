import { useEffect, useRef, useState } from 'react';
interface FadeInOnScrollProps {
    children: React.ReactNode;
}

export default function FadeInOnScroll({ children }: FadeInOnScrollProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const sectionElement = sectionRef.current;

        const handleScroll = () => {
            if (sectionElement) {
                const { top, bottom, height } = sectionElement.getBoundingClientRect();
                const { innerHeight } = window;
                const visibilityThreshold = innerWidth < 768 ? height * 0.05 : height * 0.4;
                if (top < innerHeight - visibilityThreshold && bottom > visibilityThreshold) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const fadeOutStyle = {
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 2500ms',
    };


    return (
        <div style={fadeOutStyle} ref={sectionRef}>
            {children}
        </div>
    );
}