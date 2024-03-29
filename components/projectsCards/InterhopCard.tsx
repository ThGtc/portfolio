import Image from "next/image";
import EasyApptLogo from "@/public/EasyAppts.png";
import React from "react";
import Link from "next/link";
import GitLabLogo from '@/public/GitLab.png'
import {gitLabEasyAppointments} from "@/components/HideThoseLinks";
import {useCardModal} from "@/components/animations/CardsModal";
import {animated} from "react-spring";
import {CardLayout} from "@/components/projectsCards/CardLayout";
import CalendrierRdv from "@/public/screens_apps/interhop/calendrier_couleurs_rdv.png"
import CreationIndispo from "@/public/screens_apps/interhop/formulaire_indispo_warning.png"
import CalendrierMobile from "@/public/screens_apps/interhop/planning_vue_mobile.png"
import Carousel from "@/components/animations/Carousel/Carousel";
import {MobileCarousel} from "@/components/animations/Carousel/CarouselMobileModal"

export default function InterhopProject() {

    const images = [CalendrierRdv, CreationIndispo, CalendrierMobile];
    const {showModal, cardVisible, openCard, toggleCard, openModal, closeModal, handleOverlayClick} = useCardModal();
    const {carouselVisibility, carouselStyling, openMobileCarousel, handleToggle} = MobileCarousel();

    return (
        <>
            <CardLayout>
                <div>
                    <Image
                        className="w-24 h-24 m-3 rounded-full shadow-lg"
                        src={EasyApptLogo} alt={'Easy!Appointments'} title={'Easy!Appointments'}
                    />
                </div>
                <div className="px-6 py-4 grid overflow-scroll no-scrollbar">
                    <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Interhop
                    </h3>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Stage développeur web (2 mois) sur le projet Easy!Appointments.
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
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">PHP</span>
                    <span
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">CodeIgniter</span>
                    <span
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">jQuery</span>
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
                                                    className={'relative lg:h-[36rem] lg:w-36 flex-[0_0_100%] h-[24rem] w-24'}
                                                    key={i}>
                                                    <Image src={src} fill className="object-cover" priority={true}
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
                                                Interhop
                                            </h4>
                                            <button
                                                className="text-red-500 background-transparent font-bold uppercase text-3xl px-6 py-2 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                onClick={toggleCard}
                                            >
                                                ×
                                            </button>
                                        </div>
                                        <p className="italic font-semibold dark:text-gray-400">
                                            Stage développeur web - mars 2023 → mai 2023
                                        </p>
                                    </div>

                                    <div className="relative p-6 flex-auto">
                                        <button className="lg:hidden underline italic" onClick={handleToggle}>
                                            {carouselVisibility ? 'Masquer les screens' : 'Voir des screens de l\'app'}
                                        </button>
                                        <div
                                            className="my-4 text-lg leading-relaxed text-gray-700 dark:text-gray-400 lg:max-h-[50vh] lg:overflow-scroll lg:no-scrollbar">
                                            <p>L&apos;objectif est d&apos;adapter l&apos;outil open-source de prise de
                                                rendez-vous <Link href='https://easyappointments.org' target='_blank'
                                                                  className="underline">Easy!Appointments</Link> aux
                                                besoins
                                                de <Link
                                                    href='https://interhop.org/' target='_blank'
                                                    className="underline">l&apos;association Interhop</Link>.</p><br/>

                                            <strong><u>Projet principal :</u></strong> Création d&apos;une
                                            fonctionnalité
                                            &apos;imprévu&apos; permettant depuis un planning d&apos;avoir la
                                            possibilité
                                            d&apos;annuler des rendez-vous sur une période donnée. Elle se découpe en 4
                                            étapes : <br/> <br/>
                                            <ol className="list-decimal list-inside pl-2">
                                                <li>Identifier puis bloquer la période affectée dans le module de prise
                                                    de rendez-vous.
                                                </li>
                                                <li>Générer puis envoyer un mail à chaque patient disposant d’un rdv ;
                                                    puis un mail récapitulatif à chaque membre du personnel concerné.
                                                </li>
                                                <li>
                                                    Création d&apos;un statut rattaché au rendez-vous, mis à jour
                                                    automatiquement
                                                    à chaque étape du rendez-vous (planifié, honoré, annulé…).
                                                </li>
                                                <li>Amélioration de l&apos;affichage du planning pour prendre en compte
                                                    ce nouveau statut.
                                                </li>
                                            </ol>
                                            <br/>
                                        </div>
                                        <p className="text-2xl italic pb-2">Technos utilisées : </p>
                                        <div className="flex flex-col gap-3 justify-evenly md:flex-row">
                                            <p>PHP / CodeIgniter</p>
                                            <p>SQL</p>
                                            <p>HTML</p>
                                            <p>CSS / Bootstrap</p>
                                            <p>JS / JQuery</p>
                                        </div>
                                    </div>

                                    <div
                                        className="flex items-center justify-between p-6 border-t border-solid border-slate-200 rounded-b">
                                        <button
                                            className="text-orange-700 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                        >
                                            <Link href={gitLabEasyAppointments} target="_blank"
                                                  className="flex flex-row items-center gap-1">
                                                Gitlab
                                                <Image src={GitLabLogo} alt={"Gitlab"} title={"GitLab"} height={48}
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