import Image from "next/image";
import SportsLogo from "@/public/sports.png";
import React from "react";
import Link from "next/link";
import GithubLogo from "@/public/GitHub.png";
import {githubSportsApp} from "@/components/HideThoseLinks";
import {useCardModal} from "@/components/animations/CardsModal";
import {animated} from "react-spring";
import {CardLayout} from "@/components/projectsCards/CardLayout";
import Register from "@/public/screens_apps/sports/register.png"
import MyActivities from "@/public/screens_apps/sports/my_activites.png"
import Carousel from "@/components/animations/Carousel/Carousel";
import {MobileCarousel} from "@/components/animations/Carousel/CarouselMobileModal";

export default function SportsProject() {

    const images = [Register, MyActivities]
    const {showModal, cardVisible, openCard, toggleCard, openModal, closeModal, handleOverlayClick} = useCardModal();
    const {carouselVisibility, carouselStyling, openMobileCarousel, handleToggle} = MobileCarousel();

    return (
        <>
            <CardLayout>
                <div>
                    <Image
                        className="w-24 h-24 m-3 rounded-full shadow-lg"
                        src={SportsLogo} alt={'Sports logo'} title={'Sports app'}
                    />
                </div>
                <div className="px-6 py-4 grid overflow-scroll no-scrollbar">
                    <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Sports App
                    </h3>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        API project
                    </p>
                    <button
                        type="button"
                        className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 mb-1 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                        onClick={() => openModal()}>
                        <p className='text-gray-700 dark:text-gray-400'>+ d&apos;infos</p>
                    </button>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Java</span>
                    <span
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Spring</span>
                    <span
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Angular</span>
                </div>
            </CardLayout>

            {showModal ? (
                <>
                    <animated.div
                        className={`justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 max-h-full outline-none focus:outline-none`}
                        onClick={handleOverlayClick}
                        style={{
                            ...openCard,
                        }}
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-6xl max-h-full">
                            <div className={'lg:grid lg:grid-cols-[1fr_1fr] grid grid-rows-1'}>
                                <animated.div
                                    className={carouselVisibility ? carouselStyling : carouselStyling + " hidden"}
                                    style={{
                                        ...openMobileCarousel,
                                    }}
                                >
                                    <Carousel loop>
                                        {images.map((src, i) => {
                                            return (
                                                <div
                                                    className={'relative lg:h-[36rem] lg:w-64 flex-[0_0_100%] h-[24rem] w-48'}
                                                    key={i}>
                                                    <Image src={src} fill className="object-contain" priority={true}
                                                           alt="Les images peuvent rencontrer des problèmes pour charger correctement, il s'agit d'un bug connu et en train d'être corrigé !"/>
                                                </div>
                                            );
                                        })}
                                    </Carousel>
                                </animated.div>
                                <div
                                    className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none dark:border-gray-700 dark:bg-slate-900">
                                    <div className="p-5 border-b border-solid border-slate-200 rounded-t">
                                        <div className="flex items-start justify-between">
                                            <h4 className="text-3xl font-semibold">
                                                Sports app
                                            </h4>
                                            <button
                                                className="text-red-500 background-transparent font-bold uppercase text-3xl px-6 py-2 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                onClick={toggleCard}
                                            >
                                                ×
                                            </button>
                                        </div>
                                        <p className="italic font-semibold dark:text-gray-400">
                                            API Project - avril 2023
                                        </p>
                                    </div>

                                    <div className="relative p-6 flex-auto">
                                        <button className="lg:hidden underline italic" onClick={handleToggle}>
                                            {carouselVisibility ? 'Masquer les screens' : 'Voir des screens de l\'app'}
                                        </button>
                                        <div
                                            className="my-4 text-lg leading-relaxed text-gray-700 dark:text-gray-400 lg:max-h-[50vh] lg:overflow-scroll lg:no-scrollbar">
                                            <p><strong><u>Objectif :</u></strong> Prendre en main la création d’API REST
                                                en Java, avec le framework Spring,
                                                puis leur utilisation dans une application web Angular.</p> <br/>
                                            <p> Fonctionnalités réalisées :</p> <br/>
                                            <ol className="list-disc list-inside">
                                                <li>Création d&apos;API back-end (gestion des utilisateurs, des
                                                    activités, des sports…)
                                                    relié à une base de donnée MySQL.
                                                </li>
                                                <li>Gestion de la sécurité avec l’inscription puis l’authentification.
                                                </li>
                                                <li>Connexion à une interface front-end réalisée avec Angular.
                                                    Elle permet de s&apos;inscrire, se connecter/déconnecter,
                                                    créer ou consulter des activités, en supprimer ou en mettre à jour…
                                                </li>
                                            </ol>
                                            <br/>
                                        </div>
                                        <p className="text-2xl italic pb-2">Technos utilisées : </p>
                                        <div className="flex flex-col gap-3 justify-evenly md:flex-row">
                                            <p>Java / Spring </p>
                                            <p>SQL</p>
                                            <p>Angular</p>
                                            <p>Typescript</p>
                                        </div>
                                    </div>

                                    <div
                                        className="flex items-center justify-between p-6 border-t border-solid border-slate-200 rounded-b">
                                        <button
                                            className="background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 text-slate-700 dark:text-amber-100"
                                            type="button"
                                        >
                                            <Link href={githubSportsApp} target="_blank"
                                                  className="flex flex-row items-center gap-1">
                                                Github
                                                <Image src={GithubLogo} alt={"Github"} title={"Github"} height={48}
                                                       width={48}/>
                                            </Link>
                                        </button>
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={toggleCard}
                                        >
                                            Fermer
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </animated.div>
                    <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}

        </>
    )
}