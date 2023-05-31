import {Inter} from "next/font/google";
import {siteTitle} from "@/components/Layout";
import React from "react";
import InterhopProject from "@/components/projectsCards/InterhopCard";
import EniSortirProject from "@/components/projectsCards/EniSortirCard";
import EniEncheresProject from "@/components/projectsCards/EniEncheresCard";
import SportsProject from "@/components/projectsCards/SportsCard";
import OdinProject from "@/components/projectsCards/OdinProjectCard";
import PortfolioProject from "@/components/projectsCards/Portfolio";

const inter = Inter({subsets: ['latin']})
const title = siteTitle + "Projets";

export default function ProjectsCompo() {
    return (
        <>
            <section id='devProjects' className="max-w-3xl mx-auto pt-4 px-4">
                <div className="dark:text-gray-300 max-w-2xl">
                    <h2 className="text-4xl lg:text-5xl lg:leading-normal">
                        Projets
                    </h2>
                </div>
                <div className="container max-w-full ">
                    <div
                        className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                        <InterhopProject/>
                        <EniSortirProject/>
                        <EniEncheresProject/>
                        <SportsProject/>
                        <OdinProject/>
                        <PortfolioProject/>
                    </div>
                </div>
            </section>
        </>
    )
}