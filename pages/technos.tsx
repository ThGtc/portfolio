import React from "react"
import {Layout, siteTitle} from '@/components/Layout';
import Tech from "@/components/TechStack";

const title = siteTitle + "Technos";

export default function Technos() {
    return (
        <>
            <Layout
                home={false}
                meta={{
                    title: title,
                }}
            >
                <section id='about' className="max-w-3xl mx-auto pt-3 px-4">
                    <div className="dark:text-gray-300 max-w-2xl">
                        <h2 className="text-4xl lg:text-5xl lg:leading-normal">
                            Technos
                        </h2>
                    </div>
                    <div
                        className="lg:justify-between items-center flex-wrap py-14"
                    >
                        <Tech hideTitle={true}/>
                    </div>
                </section>
            </Layout>
        </>
    )
}