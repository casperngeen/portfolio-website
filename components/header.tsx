"use client";

import React from 'react'
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Header() {
    //imported from active-section-context
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        //motion.div - has the props "initial" and "animate" for animations when the page is loaded, overwrites the transformations declared in the classes (eg translate to the left) - adds bounce effect in this case
        // clsx: a package that allows us to condiitonally include styling (eg if some state is satsified)
        // inset-0: sets absolute position relative to the parent container as top-bottom-left-right-0 (fully stretched out to the same size as parent container)
        // onClick: prop that takes in a function that does something when the container or the object is being clicked (in this case the link)
        // how the transition works for the highlight of the navbar: when a new link is clicked, the original span is removed since the active section changes, and a new span is created. 
        //      framer motion detects this change through the layout id, and understand that these 2 spans are the "entering" and "exiting" elements and will apply transitions accordingly
        // Intersection Observer API

        <header className="z-[999] relative">
            <motion.div className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
                initial={{ y: -100, x: "-50%", opacity:0 }}
                animate={{ y:0, x:"-50%", opacity:1 }}
            ></motion.div>


            <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
                <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
                    {
                        links.map(link => (
                            <motion.li className="h-3/4 flex items-center justify-center relative" key={link.hash} initial={{ y: -100, opacity:0 }} animate={{ y:0, opacity:1 }}>
                                <Link className={clsx("flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition", {"text-gray-950":  activeSection === link.name})} href={link.hash} 
                                onClick={() => {
                                    setActiveSection(link.name)
                                    setTimeOfLastClick(Date.now())
                                }}>
                                    {link.name}
                                    {link.name ===  activeSection && (
                                    <motion.span className='bg-gray-100 rounded-full absolute inset-0 -z-10' layoutId='activeSection' transition={{type: "spring", stiffness: 380, damping: 30}}></motion.span>
                                    )}
                                </Link>
                            </motion.li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}
