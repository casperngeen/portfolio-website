"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'

const fadeInAnimationsVariants = {
    initial: {
        opacity: 0,
        y: 100
    }, 
    //animate is now a function that takes in a number
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05*index
        }
    })
}

export default function Skills() {
    const {ref} = useSectionInView("Skills")

    return (
    // variants: 
    // intiial: 
    // whileInView: 
    // viewport: 
    // custom: 
        <section ref={ref} id="skills" className='mb-28 max-w-[53rem] text-center leading-8 sm:mb-40 scroll-mt-28'>
            <SectionHeading>My skills</SectionHeading>
            <ul className="flex flex-wrap justify-center text-lg gap-2 text-gray-800">
                {
                    skillsData.map((skill, index) => (
                        <motion.li className="bg-white borderBlack rounded-xl px-5 py-3" key={index} variants={fadeInAnimationsVariants} initial="initial" whileInView="animate" viewport={{once: true}} custom={index}>{skill}</motion.li>
                    ))
                }
            </ul>
        </section>
    )
}
