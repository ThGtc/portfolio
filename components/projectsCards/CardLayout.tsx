'use client';
import React, {useRef, useState} from "react";

export const CardLayout = ({children}: {
    children: React.ReactNode
}) => {

    const divRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({x: 0, y: 0});
    const [opacity, setOpacity] = useState(0);
    let isDarkMode = false;
    //const randomColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, .1)`;

    if (typeof document !== 'undefined' && document.documentElement.classList.contains('dark')) {
        isDarkMode = true;
    }

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current || isFocused) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({x: e.clientX - rect.left, y: e.clientY - rect.top});
    };

    const handleFocus = () => {
        setIsFocused(true);
        setOpacity(1);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            //className="bg-white border border-gray-200  rounded-lg shadow  hover:bg-gray-100">
            className='no-scrollbar relative grid grid-rows-[0.25fr_1fr_0.5fr] overflow-hidden md:flex-row md:max-w-xl rounded-xl border border-gray-200 dark:border-slate-800 bg-gradient-to-r dark:from-gray-800 dark:to-slate-900 from-gray-100 to-slate-200 shadow-2xl'
        >
            <div
                className='pointer-events-none absolute -inset-px opacity-0 transition duration-300 overflow-hidden'
                style={{
                    opacity,
                    background: isDarkMode
                        ? `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255, 182, 255, .1), transparent 40%)`
                        : `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(163, 249, 62, .1), transparent 40%)`,
                }}
            />
            {children}
        </div>
    );


}