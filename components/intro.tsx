"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi"
import { useSectionInView } from '@/lib/hooks'
import { useActiveSectionContext } from '@/context/active-section-context'
import profile from "@/public/profile.jpg"

export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        // section vs div: section has more semantic meaning - storing things that relate to each other, div is more for quickly dividing parts of the website up
        // TODO: Change photo
        // if photos are used from the internet, we need to specify height and width, and include more details in config.js
        // span is similar to div, but span is an inline element, while div is a block-level element
        //we put a motion.div around the Image because we can't do motion.Image
        // !: "important" property which will override the default set by oter properties, in this case leading(font-height) is first set using text-2xl but overriden by the explicit leading property
        // margin vs padding: margin is the space between different sections (border to border), padding is the space between the content of the section/div and the borders of that section/div
        // focus: item is in the process of being selected by keyboard or mouse, hover: cursor hovers over item, active: when the item is actually being selected
        // a (anchor) vs button: anchor tags are for navigating to different routes, while buttons are more for interaction with the web page
        // nextJS will automatically look for static files in the public directory
        // scroll-mt-[100rem]: 100rem is an arbritrary value, we just need any sufficiently large value to flush the section to the very top
        <section ref={ref} className='mb-28 max-w-[50rem] text-center sm:mb-40 scroll-mt-[100rem] mx-10' id="home">
            <div className="flex items-center justify-center relative">
                <div className='relative'>
                    <motion.div initial={{ opacity: 0, scale:0 }} animate={{ opacity: 1, scale: 1 }} transition = {{ type: "tween", duration: 0.2}}>
                        <Image src={profile} alt="Random Photo" width="192" height="192" quality="95" priority={true} 
                        className='h-24 w-24 rounded-full object-cover border-[0.2rem] border-white shadow-xl'/>
                    </motion.div>

                    <motion.span className='absolute bottom-0 right-0 text-4xl' initial={{ opacity:0, scale:0 }} animate={{ opacity:1, scale:1 }} transition={{ type: "spring", stiffness: 125, delay: 0.1, duration: 0.7}}>
                        👋
                    </motion.span>
                </div>
            </div>

            <motion.p className='mb-10 mt-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
                initial={{opacity: 0, y: 1}} animate={{opacity:1, y:0}} >
                <span className='font-bold'>Hello, I'm Casper.</span> I'm a Computer Science student studying at NUS, and I aspire to be a software developer.
            </motion.p>

            <motion.div className='flex flex-col sm:flex-row items-center justify-center px-4 text-lg font-medium gap-4' initial={{ opacity:0, y:100 }} animate={{ opacity:1, y:0}} transition={{delay:0.1}}>
                <Link href="#contact" className="group flex px-7 py-3 bg-gray-900 text-white rounded-full gap-2 items-center outline-none focus:scale-100 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                    onClick={() => {
                        setActiveSection("Contact");
                        setTimeOfLastClick(Date.now());
                    }}> 
                    Contact me here <BsArrowRight className="opacity-70 group-hover: translate-x-1 transition" />
                </Link>

                <a className='group flex px-7 py-3 bg-white rounded-full gap-2 items-center outline-none focus:scale-100 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack' href="/CV.pdf" download={true}>
                    Download CV <HiDownload/>
                </a>

                <a className='flex p-4 bg-white text-gray-700 hover:text-gray-950 rounded-full gap-2 items-center outline-none focus:scale-100 hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack' href="https://www.linkedin.com/in/casper-ng-2b87b1141/" target='_blank'>
                    <BsLinkedin />
                </a>

                <a className='flex p-4 bg-white text-gray-700 hover:text-gray-950 rounded-full gap-2 items-center outline-none focus:scale-100 hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack' href='https://github.com/casperngeen' target="_blank">
                    <BsGithub />
                </a>          
            </motion.div>        
        </section>
  )
}
