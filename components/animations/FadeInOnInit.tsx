import { useEffect, useRef } from 'react';

interface FadeInSectionProps {
    children: React.ReactNode;
}

export default function FadeInSection({ children }: FadeInSectionProps) {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (sectionRef.current) {
            sectionRef.current.classList.add('opacity-100');
        }
    }, []);

    return (
        <div className="opacity-0 transition-opacity duration-[2500ms]" ref={sectionRef}>
            {children}
        </div>
    );
}