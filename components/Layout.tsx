import React from "react";
import Head from "next/head";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {useRouter} from "next/router";
import Link from "next/link";
import FadeInSection from "@/components/animations/FadeInOnInit";

const name = 'Thibaut';
export const siteTitle = 'Thibaut Gentric | ';


export const Layout = ({children, meta, home}: {
    children: React.ReactNode
    home?: boolean
    meta?: any
}) => {
    const {title, description, icon, googlebot, robots} = meta;
    const router = useRouter();
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Portfolio de Thibaut Gentric, développeur fullstack avec une appétence pour le back-end et le Java. Made in Rennes, Bretagne."/>
                <meta name="robots" content={robots}/>
                <meta name="googlebot" content={googlebot}/>
                <link rel="icon" href={icon || "/favicon.ico"}/>
                <link
                    rel="canonical"
                    href={`https://thibaut-gentric.dev${router.asPath}`}
                />
                <noscript>
                    <p className='text-center text-2xl italic'>C&apos;est mieux d&apos;avoir JS activé pour voir tous
                        les détails du site :)</p>
                </noscript>
            </Head>
            <main className="container max-w-6xl mx-auto px-4 min-h-screen">
                <Header/>
                <FadeInSection>
                    <main className="z-0">{children}</main>
                    {!home && (
                        <div className="max-w-6xl  mx-auto px-4 py-10 md:py-20">
                            <Link href="/">← Retour</Link>
                        </div>
                    )}
                </FadeInSection>
                <Footer/>
            </main>
        </>
    );
};