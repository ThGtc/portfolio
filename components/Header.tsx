import Link from "next/link";
import React, {useEffect, useState} from "react"
import {useTheme} from "next-themes";
import MobileMenu from "@/components/MobileMenu";

export const Header = () => {

    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            <header
                className="sticky top-0 left-0 w-full z-50 max-w-6xl mx-auto mb-10 px-4 py-10 md:py-20 backdrop-filter backdrop-blur-md shadow-sm">
                <div className="flex md:flex-row justify-between items-center">
                    <div className="flex flex-col">
                        <Link href="/">
                            <h1 className="font-semibold text-4xl text-gray-900 dark:text-gray-100">
                                {"Thibaut Gentric"}
                            </h1>
                            <p className="text-2xl font-light text-gray-500 dark:text-gray-300">
                                {"Développeur web"}
                            </p>
                        </Link>
                    </div>

                    <MobileMenu/>

                    <nav className="space-x-8 hidden md:flex">
                        <Link
                            href="/projects"
                            className="text-base font-normal text-gray-600 dark:text-gray-300"
                        >
                            Projets
                        </Link>
                        <Link
                            href="/technos"
                            className="text-base font-normal text-gray-600 dark:text-gray-300"
                        >
                            Technos
                        </Link>
                        <Link
                            href="/contact"
                            className="text-base font-normal text-gray-600 dark:text-gray-300"
                        >
                            Contact
                        </Link>
                    </nav>

                    <div className="space-x-4 flex flex-row items-center">
                        <button
                            aria-label="Activer thème sombre"
                            type="button"
                            className="w-10 h-10 p-3 rounded focus:outline-none"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        >
                            {mounted && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    className="w-4 h-4 text-yellow-500 dark:text-yellow-500"
                                >
                                    {theme === "dark" ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                        />
                                    )}
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}