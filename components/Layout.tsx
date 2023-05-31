import React from "react";
import Head from "next/head";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {useRouter} from "next/router";
import Link from "next/link";

const name = 'Thibaut';
export const siteTitle = 'Thibaut Gentric | ';


export const Layout = ({children, meta, home}: {
    children: React.ReactNode
    home?: boolean
    meta?: any
}) => {
    const {title, description, icon} = meta;
    const router = useRouter();
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="robots" content="follow, index"/>
                <meta name="description" content={description}/>
                <meta
                    property="og:url"
                    content={`https://futureadresse.dev${router.asPath}`}
                />
                <link rel="icon" href={icon || "/favicon.ico"}/>
                <link
                    rel="canonical"
                    href={`https://futureadresse.dev${router.asPath}`}
                />
                <meta property="og:type" content={meta.type}/>
                <meta property="og:site_name" content="Thibaut Gentric"/>
                <meta property="og:description" content={meta.description}/>
                <meta property="og:title" content={meta.title}/>
                <meta property="og:image" content={meta.image}/>
                <meta name="twitter:title" content={meta.title}/>
                <meta name="twitter:description" content={meta.description}/>
                <meta name="twitter:image" content={meta.image}/>
                {meta.date && (
                    <meta property="article:published_time" content={meta.date}/>
                )}
                <noscript>
                    <p className='text-center text-2xl italic'>C&apos;est mieux d&apos;avoir JS activé pour voir tous
                        les détails du site :)</p>
                </noscript>
            </Head>
            <main className="container max-w-6xl mx-auto px-4 min-h-screen">
                <Header/>
                <main className="z-0">{children}</main>
                {!home && (
                    <div className="max-w-6xl  mx-auto px-4 py-10 md:py-20">
                        <Link href="/">← Retour</Link>
                    </div>
                )}
                <Footer/>
            </main>
        </>
    );
};