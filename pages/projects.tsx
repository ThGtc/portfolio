import React from "react"
import {Layout, siteTitle} from '@/components/Layout';
import ProjectsCompo from "@/components/Projects";

const title = siteTitle + "Projets";

export default function Projects() {
    return (
        <>
            <Layout
                home={false}
                meta={{
                    title: title,
                }}
            >
                <ProjectsCompo/>
            </Layout>
        </>
    )
}