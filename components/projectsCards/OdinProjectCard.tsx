import Image from "next/image";
import OdinLogo from "@/public/odin_project.png";
import React from "react";
import Link from "next/link";
import GithubLogo from "@/public/GitHub.png";
import {githubOdinProject} from "@/components/HideThoseLinks";

export default function OdinProject() {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <div
                className="no-scrollbar bg-white border border-gray-200 grid grid-rows-[0.25fr_1fr_0.5fr] rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 overflow-scroll">
                <Image
                    className="w-24 h-24 m-3 rounded-full shadow-lg"
                    src={OdinLogo} alt={'Odin Project'} title={'Odin Project'}
                />
                <div className="px-6 py-4 grid">
                    <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Odin Project
                    </h3>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        L&apos;apprentissage du webdev
                    </p>
                    <button
                        type="button"
                        className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 mb-1 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                        onClick={() => setShowModal(true)}>
                        <p className='text-gray-700 dark:text-gray-400'>+ d&apos;infos</p>
                    </button>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">HTML</span>
                    <span
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">CSS</span>
                    <span
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Vanilla JS</span>
                </div>
            </div>

            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div
                                className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none dark:border-gray-700 dark:bg-gray-800">
                                <div className="p-5 border-b border-solid border-slate-200 rounded-t">
                                    <div className="flex items-start justify-between">
                                        <h4 className="text-3xl font-semibold">
                                            Odin Project
                                        </h4>
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase text-3xl px-6 py-2 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            onClick={() => setShowModal(false)}
                                        >
                                            ×
                                        </button>
                                    </div>
                                    <p className="italic font-semibold dark:text-gray-400">
                                        Initiation solo au webdev
                                    </p>
                                </div>

                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-lg leading-relaxed text-gray-700 dark:text-gray-400">
                                        <Link href='https://www.theodinproject.com/' target='_blank'
                                              className="underline">Site</Link> ayant
                                        permis de m&apos;initier au développement web, avant la formation à l&apos;ENI.
                                        <br/>
                                        Cela impliquait donc de nombreux minis-projets allant du HTML le plus basique
                                        à des projets un peu plus avancé, en vanilla JS.
                                        Le code n&apos;est clairement pas le plus beau ni le plus optimisé,
                                        mais je le garde pour la postérité et me rappeler du chemin parcouru. :)
                                    </p>
                                    <p className="text-2xl italic pb-2">Technos : </p>
                                    <div className="flex flex-col gap-3 justify-evenly md:flex-row">
                                        <p>HTML</p>
                                        <p>CSS</p>
                                        <p>Javascript</p>
                                    </div>
                                </div>

                                <div
                                    className="flex items-center justify-between p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 text-slate-700 dark:text-amber-100"
                                        type="button"
                                    >
                                        <Link href={githubOdinProject} target="_blank"
                                              className="flex flex-row items-center gap-1">
                                            Github
                                            <Image src={GithubLogo} alt={"Github"} title={"Github"} height={48}
                                                   width={48}/>
                                        </Link>
                                    </button>
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Fermer
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>

    )
}