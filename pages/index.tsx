import {Inter} from 'next/font/google'
import {Layout, siteTitle} from '@/components/Layout'
import {animateScroll as scroll} from "react-scroll";
import Hero from '@/components/Hero';
import Tech from '@/components/TechStack';
import Projects from "@/components/Projects";
import FadeInOnScroll from "@/components/animations/FadeInScroll";

const inter = Inter({subsets: ['latin']})
const title = siteTitle + "Développeur";
const onBtnClick = () => {
    const landingArea = document.getElementById('landingArea');
    if (landingArea) {
        const offsetTop = landingArea.offsetTop - 300;
        scroll.scrollTo(offsetTop);
    }
};

export default function Home() {
    return (
        <Layout home
                meta={{
                    title: title,
                    robots: "nofollow, index",
                    googlebot: "index"
                }}>

            <Hero/>
            <FadeInOnScroll>
                <Projects/>
            </FadeInOnScroll>

            <FadeInOnScroll>
                <Tech hideTitle={false}/>
            </FadeInOnScroll>

            <p className="text-center italic font-semibold dark:text-gray-400 mb-5">
                <button onClick={onBtnClick}>
                    <svg width="48" height="48" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                         className="bi bi-arrow-down animate-bounce"
                         fillRule="evenodd"
                         clipRule="evenodd">
                        <path
                            d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"/>
                    </svg>
                </button>
            </p>
        </Layout>
    )
}
