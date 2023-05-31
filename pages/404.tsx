import React from "react"
import {Layout, siteTitle} from '@/components/Layout'

const title = siteTitle + "Wrong way buddy";

export default function Custom404() {
    return (
        <>
            <Layout
                home={false}
                meta={{
                    title: title,
                }}
            >

                <div className="container max-w-full ">
                    <h2 className="m-4 text-4xl text-center">You lost my dude ?</h2>
                </div>
            </Layout>
        </>
    )
}