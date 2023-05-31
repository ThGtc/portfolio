import Link from "next/link";
import React, {useState} from "react";

export default function MobileMenu() {

    const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

    return (
        <>
            <section className="flex md:hidden">
                <div
                    className="space-y-2"
                    onClick={() => setIsNavOpen((prev) => !prev)}
                >
                    <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                    <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                    <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                </div>

                <nav
                    className={isNavOpen ? "absolute w-full h-screen top-0 left-0 z-10 flex flex-col items-center justify-evenly bg-gray-100 dark:bg-gray-800" : "hidden"}>
                    <div
                        className="absolute top-0 right-0 px-8 py-8"
                        onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
                    >
                        <svg
                            className="h-8 w-8 text-black"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18"/>
                            <line x1="6" y1="6" x2="18" y2="18"/>
                        </svg>
                    </div>
                    <ul className="flex flex-col items-center justify-between min-h-[250px] text-3xl">
                        <Link
                            href="/projects"
                            className="border-b border-gray-400 my-8 font-normal text-gray-600 dark:text-gray-300"
                        >
                            Projets
                        </Link>
                        <Link
                            href="/technos"
                            className="border-b border-gray-400 my-8 font-normal text-gray-600 dark:text-gray-300"
                        >
                            Technos
                        </Link>
                        <Link
                            href="/contact"
                            className="border-b border-gray-400 my-8 font-normal text-gray-600 dark:text-gray-300"
                        >
                            Contact
                        </Link>
                    </ul>
                </nav>
            </section>
        </>
    )
}