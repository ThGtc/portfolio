import {Inter} from 'next/font/google'
import {siteTitle} from '@/components/Layout'
import {animateScroll as scroll} from 'react-scroll';
import ContactCompo from "@/components/Contact";
import {eniLevelUpLink} from "@/components/HideThoseLinks";
import Link from "next/link";
import {DotGrid} from "@/components/animations/GridBackground";
import {TextReveal} from "@/components/animations/TextReveal";

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
        <>
            <section
                className="relative overflow-hidden max-w-3xl mx-auto min-h-screen sm:min-h-fit px-4 lg:grid lg:grid-cols-2"
                id="landingArea"
            >
                <div className="dark:text-gray-100 max-w-2xl lg:w-max mt-4">
                    <TextReveal>
                        <div
                            className="text-3xl lg:text-5xl lg:leading-normal flex flex-row gap-2 relative z-10 font-semibold dark:text-purple-900 text-purple-950">
                            <p>Hello there</p> {/* General Kenobi */}
                            <p className="animate-wave">👋</p>
                        </div>
                    </TextReveal>
                    <TextReveal>
                        <h1 className="md:text-2xl text-xl mt-4 leading-[1.1]">
                            Je suis Thibaut Gentric.
                        </h1>
                    </TextReveal>
                    <div
                        className="text-center text-lg py-7 italic font-semibold dark:text-gray-300 sm:text-xl relative z-10">
                        <TextReveal>
                            <p>Après m&apos;être initié au développement web en autonomie, j&apos;ai
                                rejoint l&apos;ENI de Rennes pour renforcer mes compétences en programmation.</p>
                        </TextReveal>
                        <br/>
                        <TextReveal>
                            <p>
                                Souhaitant y poursuivre ma progression en
                                tant que <Link className="underline" href={eniLevelUpLink} target={"_blank"}>Concepteur
                                Développeur d&apos;Applications</Link>, je
                                suis à la recherche d&apos;une opportunité d&apos;alternance d&apos;une durée d&apos;un
                                an
                                afin de me spécialiser sur les technos Java ou PHP.
                            </p>
                        </TextReveal>
                    </div>
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
                <DotGrid/>
            </section>
        </>
    )
}