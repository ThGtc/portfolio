import {Inter} from 'next/font/google'
import {siteTitle} from '@/components/Layout'
import Image from 'next/image';
import HTMLIcon from '@/public/html5.png'
import CSSIcon from '@/public/css3.png'
import JSIcon from '@/public/javascript.png'
import TSIcon from '@/public/typescript.png'
import AngularIcon from '@/public/angular.png'
import ReactIcon from '@/public/react.png'
import NextIcon from '@/public/nextJS.png'
import TailwindIcon from '@/public/tailwindcss.png'
import JavaIcon from '@/public/java.png'
import PHPIcon from '@/public/PHP.png'
import SpringIcon from '@/public/spring.png'
import Symfony from '@/public/symfony.png'
import MySQLIcon from '@/public/mysql.png'
import SQLServIcon from '@/public/SQLServ.png'
import GitHubLogo from '@/public/GitHub.png'
import GitLabLogo from '@/public/GitLab.png'
import VSCodeIcon from '@/public/VSCode.png'
import JetBrainsIcon from '@/public/jetbrainsSuite.png'
import {Component} from "react";


const inter = Inter({subsets: ['latin']})
const title = siteTitle + "Technos";

export default class Tech extends Component<{ hideTitle: any }> {
    render() {
        let {hideTitle} = this.props;
        return (
            <>
                <section id='techStack' className="max-w-3xl mx-auto pt-10 px-4">
                    <div className="dark:text-gray-300 max-w-2xl">
                        {hideTitle ? null :
                            <h2 className="text-4xl lg:text-5xl lg:leading-normal">
                                Main stack
                            </h2>
                        }

                        <p className="pt-4 pb-2">

                        </p>

                        <div className='grid grid-cols-5 text-center'>
                            <div className='mx-auto flex-col md:grid grid-cols-2 gap-5'>
                                <div className='flex flex-col items-center'>
                                    <Image src={HTMLIcon} alt={'HTML'} title={'HTML'} width={48} height={48}/>
                                    <p className="text-sm">HTML</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <Image src={CSSIcon} alt={'CSS'} title={'CSS'} width={48} height={48}/>
                                    <p className="text-sm">CSS</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <Image src={JSIcon} alt={'Javascript'} title={'Javascript'} width={48} height={48}/>
                                    <p className="text-sm">Javascript</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <Image src={TSIcon} alt={'Typescript'} title={'Typescript'} width={48} height={48}/>
                                    <p className="text-sm">Typescript</p>
                                </div>
                            </div>

                            <div className="h-full w-0.5 bg-black dark:bg-gray-700 mx-auto"></div>

                            <div className='mx-auto flex-col md:grid grid-cols-2 content-center gap-5'>
                                <div className='flex flex-col items-center'>
                                    <Image src={AngularIcon} alt={'Angular'} title={'Angular'} width={48} height={48}/>
                                    <p className="text-sm">Angular</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <Image src={ReactIcon} alt={'React'} title={'React'} width={48} height={48}/>
                                    <p className="text-sm">React</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <Image src={NextIcon} alt={'Next.JS'} title={'Next.JS'} width={48} height={48}/>
                                    <p className="text-sm">Next.JS</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <Image src={TailwindIcon} alt={'Tailwind CSS'} title={'Tailwind CSS'} width={48} height={48}/>
                                    <p className="text-sm">Tailwind CSS</p>
                                </div>

                            </div>

                            <div className="h-full w-0.5 bg-black dark:bg-gray-700 mx-auto"></div>

                            <div className='mx-auto flex-col md:grid grid-cols-2 gap-5'>
                                <div className='flex flex-col items-center'>
                                    <Image src={JavaIcon} alt={'Java'} title={'Java'} width={48} height={48}/>
                                    <p className="text-sm">Java</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <Image src={PHPIcon} alt={'PHP'} title={'PHP'} width={48} height={48}/>
                                    <p className="text-sm">PHP</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <Image src={SpringIcon} alt={'Spring'} title={'Spring'} width={48} height={48}/>
                                    <p className="text-sm">Spring</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <Image src={Symfony} alt={'Symfony'} title={'Symfony'} width={48} height={48}/>
                                    <p className="text-sm">Symfony</p>
                                </div>
                            </div>
                        </div>

                        <div className='grid grid-cols-5 text-center mt-20'>

                            <div className='mx-auto flex-col md:grid grid-cols-2 row-span-2 content-center gap-5'>
                                <div className='flex flex-col items-center'>
                                    <Image src={MySQLIcon} alt={'MySQL'} title={'MySQL'} width={48} height={48}/>
                                    <p className="text-sm">MySQL</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <Image src={SQLServIcon} alt={'MS SQL Server'} title={'MS SQL Server'} width={48} height={48}/>
                                    <p className="text-sm">SQL Server</p>
                                </div>
                            </div>

                            <div className="h-auto w-0.5 bg-black dark:bg-gray-700 mx-auto grid row-span-2"></div>

                            <div className='mx-auto flex-col md:grid grid-cols-2 row-span-2 content-center gap-5'>
                                <div className='flex flex-col items-center'>
                                    <Image src={GitHubLogo} alt={'GitHub'} title={'GitHub'} width={48} height={48}/>
                                    <p className="text-sm">Github</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <Image src={GitLabLogo} alt={'GitLab'} title={'GitLab'} width={48} height={48}/>
                                    <p className="text-sm">Gitlab</p>
                                </div>
                            </div>

                            <div className="h-auto w-0.5 bg-black dark:bg-gray-700 mx-auto grid row-span-2"></div>

                            <div className='mx-auto flex-col md:grid grid-cols-2 content-center gap-5'>
                                <div className='flex flex-col items-center'>
                                    <Image src={VSCodeIcon} alt={'Visual Studio Code'} title={'Visual Studio Code'} width={48} height={48}/>
                                    <p className="text-sm">VS Code</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <Image src={JetBrainsIcon} alt={'Jetbrains Suite'} title={'Jetbrains Suite'} width={48} height={48}/>
                                    <p className="text-sm">Suite Jetbrains</p>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div
                        className="flex justify-center lg:justify-between items-center flex-wrap py-14"
                    >
                    </div>

                </section>
            </>
        )
    }
}