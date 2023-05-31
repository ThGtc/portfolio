import {Inter} from 'next/font/google'
import {siteTitle} from '@/components/Layout'
import Link from "next/link";
import Image from "next/image";
import Linkedin from "@/public/linkedin.png";
import Mail from "@/public/mail.png";
import Github from "@/public/GitHub.png";
import {githubPage, linkedinLink, mailAdress} from "@/components/HideThoseLinks";

const inter = Inter({subsets: ['latin']})
const title = siteTitle + "About";

export default function ContactCompo() {
    return (
        <>
            <div className="flex flex-col sm:flex-row justify-center gap-10">
                <Link href={linkedinLink} target={"_blank"}
                      className="grid justify-items-center">
                    <Image src={Linkedin} alt={"Linkedin"} height={48}/>
                    <p>Linkedin</p>
                </Link>
                <Link href={mailAdress} target={"_blank"} className="grid justify-items-center">
                    <Image src={Mail} alt={"Mail"} height={48}/>
                    <p>Mail</p>
                </Link>
                <Link href={githubPage} target={"_blank"} className="grid justify-items-center">
                    <Image src={Github} alt={"Github"} height={48}/>
                    <p>Github</p>
                </Link>
            </div>
        </>
    )
}
