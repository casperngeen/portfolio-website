"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Project from './project'
import { useSectionInView } from '@/lib/hooks'

export default function Projects() {
    const { ref } = useSectionInView("Projects", 0.4)

    return (
        // mapping in js/ts: maps over the items of the list and you need to specify the key (like an id) in case the order gets mixed up
        // we have to assign the same id as the hash value for each section, so when we click on the navbar it will route as to the correct section
        // scroll-mt: styles the container with some amrgin when it is being scrolled to that container

        <section ref={ref} id="projects" className="mb-28 sm:mb-40 scroll-mt-28 mx-10">
            <SectionHeading>My projects</SectionHeading>
            <div>
                {
                    projectsData.map((project, index) => (
                        <React.Fragment key={index}>
                            <Project {...project}/>
                        </React.Fragment>
                    ))
                }
            </div>
        </section>
    )
}


