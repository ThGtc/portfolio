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
        <section className="max-w-3xl mx-auto pt-2 min-h-screen sm:min-h-fit px-4" id="landingArea">
            <div className="dark:text-gray-300 max-w-2xl">
                <p className="text-3xl lg:text-5xl lg:leading-normal">
                    Hello there 👋 {/* General Kenobi */}
                </p>

                <p className="text-center text-lg py-10 italic font-semibold dark:text-gray-400 sm:text-xl">
                    Après une phase d&apos;apprentissage autonome du développement web, j&apos;ai
                    rejoint l&apos;ENI de Rennes, me permettant de faire évoluer
                    mes compétences en programmation.
                    <br/>
                    Souhaitant poursuivre ce parcours, je suis à la recherche d&apos;une alternance pour un an
                    afin de me perfectionner sur la stack Java/Angular.
                    <br/>
                </p>
                <ContactCompo/>
                <p className="text-center text-xl py-10 italic font-semibold dark:text-gray-400">
                    <button onClick={onBtnClick} className="pt-5 text-4xl sm:text-6xl inline after:">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor"
                             className="bi bi-arrow-down animate-bounce" viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                                  d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                        </svg>
                    </button>
                </p>
            </div>
            <div
                className="flex justify-center lg:justify-between items-center flex-wrap py-14"
            >
            </div>
        </section>
    )
}