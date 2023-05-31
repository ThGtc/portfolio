import React from "react"
import {Layout, siteTitle} from '@/components/Layout';
import ContactCompo from "@/components/Contact";

const title = siteTitle + "Contact";

export default function Contact() {
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
                            Contact
                        </h2>
                    </div>
                    <div
                        className="lg:justify-between items-center flex-wrap py-14"
                    >
                        <ContactCompo/>
                        <p className="text-center text-sm pt-10 italic font-semibold text-white dark:text-gray-900">Accepte
                            également les pigeons voyageurs.</p>
                    </div>
                </section>
            </Layout>
        </>
    )
}