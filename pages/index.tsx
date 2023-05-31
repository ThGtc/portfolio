import {Inter} from 'next/font/google'
import {Layout, siteTitle} from '@/components/Layout'
// @ts-ignore
import {animateScroll as scroll} from "react-scroll";
import Hero from '@/components/Hero';
import Tech from '@/components/TechStack';
import Projects from "@/components/Projects";

const inter = Inter({subsets: ['latin']})
const title = siteTitle + "Portfolio";
const onBtnClick = () => {
    const landingArea = document.getElementById('landingArea');
    if (landingArea) {
        const offsetTop = landingArea.offsetTop - 200;
        scroll.scrollTo(offsetTop);
    }
};

export default function Home() {
    return (
        <Layout home
                meta={{
                    title: title,
                    description: "Développeur web, Rennes, Bretagne.",
                }}>

            <Hero/>
            <Projects/>
            <Tech hideTitle={false}/>
            <p className="text-center italic font-semibold dark:text-gray-400 mb-5">
                <button onClick={onBtnClick}>Up ↑</button>
            </p>
        </Layout>
    )
}
