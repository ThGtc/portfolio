import Image from "next/image";
import EasyApptLogo from "@/public/EasyAppts.png";
import React from "react";
import Link from "next/link";
import GitLabLogo from '@/public/GitLab.png'
import {gitLabEasyAppointments} from "@/components/HideThoseLinks";
import {useCardModal} from "@/components/animations/CardsModal";
import {animated} from "react-spring";

export default function InterhopProject() {

    const {showModal, openCard, toggleCard, openModal, handleOverlayClick} = useCardModal();

    return (
        <>
            <div
                className="no-scrollbar bg-white border border-gray-200 grid grid-rows-[0.25fr_1fr_0.5fr] rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 overflow-scroll">
                <Image
                    className="w-24 h-24 m-3 rounded-full shadow-lg"
                    src={EasyApptLogo} alt={'Easy!Appointments'} title={'Easy!Appointments'}
                />
                <div className="px-6 py-4 grid">
                    <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Interhop
                    </h3>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Stage developpeur web (2 mois) au sein d&apos;Interhop, sur le projet Easy!Appointments
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
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">JQuery</span>
                </div>
            </div>

            {showModal ? (
                <>
                    <animated.div
                        className={`justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 max-h-full outline-none focus:outline-none`}
                        onClick={handleOverlayClick}
                        style={{
                            ...openCard,
                        }}
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl max-h-full">
                            <div
                                className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none dark:border-gray-700 dark:bg-gray-800">
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
                                    <p className="my-4 text-lg leading-relaxed text-gray-700 dark:text-gray-400">
                                        Participation au fork de l&apos;outil de prise de
                                        rendez-vous <Link href='https://easyappointments.org' target='_blank'
                                                          className="underline">Easy!Appointments</Link> par <Link
                                        href='https://interhop.org/' target='_blank'
                                        className="underline">l&apos;association Interhop</Link>.<br/><br/>

                                        Améliorations côté front (traductions, évolution de formulaires).<br/>
                                        Création d&apos;une fonctionnalité &apos;imprévu&apos; permettant depuis un
                                        agenda
                                        d&apos;avoir la possibilité d&apos;annuler des rendez-vous sur une période
                                        donnée :
                                        <ol className="list-disc list-inside pl-2">
                                            <li>Blocage de la période affectée dans le module de prise de rendez-vous.
                                            </li>
                                            <li>Génération puis envoi d&apos;un mail à chaque patient concerné, ou
                                                d&apos;un mail récapitulatif pour le personnel.
                                            </li>
                                            <li>Amélioration de l&apos;affichage du planning pour prendre en compte le
                                                statut du rendez-vous (mise à jour auto).
                                            </li>
                                        </ol>
                                        <br/>
                                        <p className="text-2xl italic pb-2">Technos : </p>
                                        <div className="flex flex-col gap-3 justify-evenly md:flex-row">
                                            <p>PHP / CodeIgniter</p>
                                            <p>SQL</p>
                                            <p>HTML</p>
                                            <p>CSS / Bootstrap</p>
                                            <p>JS / JQuery</p>
                                        </div>
                                    </p>
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
                    </animated.div>
                    <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    )
}