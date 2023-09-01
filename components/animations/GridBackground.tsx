import * as React from "react";
// @ts-ignore
import anime from "animejs";

export const DotGrid = () => {
    const GRID_WIDTH = 25;
    const GRID_HEIGHT = 20;

    const dots = [];

    const handleDotClick = (e: any) => {
        anime({
            targets: ".dot-point",
            scale: [
                {value: 1.35, easing: "easeOutSine", duration: 250},
                {value: 1, easing: "easeInOutQuad", duration: 500},
            ],
            translateY: [
                {value: -15, easing: "easeOutSine", duration: 250},
                {value: 1, easing: "easeInOutQuad", duration: 500},
            ],
            opacity: [
                {value: 0.7, easing: "easeOutSine", duration: 250},
                {value: 0.35, easing: "easeInOutQuad", duration: 500},
            ],
            delay: anime.stagger(100, {
                grid: [GRID_WIDTH, GRID_HEIGHT],
                from: e.currentTarget.dataset.index,
            }),
        });
    }

    let index = 0;

    for (let i = 0; i < GRID_WIDTH; i++) {
        for (let j = 0; j < GRID_HEIGHT; j++) {
            dots.push(
                <div
                    onClick={handleDotClick}
                    className="group cursor-crosshair rounded-lg p-2 transition-colors hover:bg-slate-600"
                    data-index={index}
                    key={`${i}-${j}`}
                >
                    <div
                        className="dot-point h-2 w-2 rounded-full bg-gradient-to-b from-slate-700 to-slate-400 opacity-20 group-hover:from-indigo-600 group-hover:to-white"
                        data-index={index}
                    />
                </div>
            );
            index++;
        }
    }

    return (
        <div
            style={{gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)`}}
            className="absolute max-w-[75%] max-h-48 grid z-0 right-[-5.6rem] -inset-y-3">
            {dots.map((dot) => dot)}
        </div>
    );
};