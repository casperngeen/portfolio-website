"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section ref = {ref} className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
        initial={{opacity:0, y:100 }} animate={{ opacity:1, y:0 }} transition={{delay: 0.175 }} id="about">
        <SectionHeading>About Me</SectionHeading>
        <p className='leading-[2rem]'>
          I am interested in algorithms, machine learning and software engineering. I also wish to use my technical skills to create impact and bring change to my community! Currently, I am relatively new to the field of software development, and I am trying to learn through self-initated projects and join hackathons. If you have any internship opportunities or any feedback in general, feel free to reach out to me via the form in the "Contact" section.</p>
    </motion.section>
  )
}
