import {Inter} from 'next/font/google'
import {siteTitle} from '@/components/Layout'
import {animateScroll as scroll} from 'react-scroll';
import ContactCompo from "@/components/Contact";


const inter = Inter({subsets: ['latin']})
const title = siteTitle + "Home";
const onBtnClick = () => {
    const devProjectsElement = document.getElementById('devProjects');
    if (devProjectsElement) {
        const offsetTop = devProjectsElement.offsetTop - 200;
        scroll.scrollTo(offsetTop);
    }
};


export default function Hero() {
    return (
        <section className="max-w-3xl mx-auto pt-20 sm:h-[75vh] px-4" id='landingArea'>

            <div className="dark:text-gray-300 max-w-2xl">
                <p className="text-4xl lg:text-5xl lg:leading-normal">
                    Hello there 👋 {/* General Kenobi */}
                </p>

                <p className="text-center text-xl py-10 italic font-semibold dark:text-gray-400">
                    Parti d&apos;un apprentissage solo au développement web, j&apos;ai ensuite été formé à l&apos;ENI de
                    Rennes, où
                    j&apos;y ai renforcé ma mes connaissances en programmation au travers de différentes technologies.
                    <br/>
                </p>
                <ContactCompo/>
                <p className="text-center text-xl py-10 italic font-semibold dark:text-gray-400">
                    <button onClick={onBtnClick} className="pt-5 text-6xl">⬇</button>
                </p>
            </div>
            <div
                className="flex justify-center lg:justify-between items-center flex-wrap py-14"
            >
            </div>
        </section>
    )
}