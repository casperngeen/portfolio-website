"use client"

import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

//to specify type of the props: we can use number instead of specifying the exact number
type ProjectProps = typeof projectsData[number];

// for layout issues, most of the time we use flex to resolve it (sometimes we use grid)
// sometimes we have to play around with the different sizes and values to find out which one fits best
// leading-relaxed: slight increase in line height from the normal
// border-black/5: the /5 controls the opacity of the border (100 is maximum, 0 is transparent)
// mt-auto in flex: it will put as much margin as possible (ie flush to the bottom)
// h-full: sets the height of an element to 100% of its parent container's height
// last: controls the last element (eg no padding at the bottom of the last element), similar idea for first
// even: every second element will have different styling as specified (same idea for odd)
// useScroll: returns 4 motion values (a motion value is a mutable value that is used for animating properties) - scrollX/Y (absolute value in pixels) and scrollX/YProgress (range from 0-1) 
// useRef: set a mutable object reference that persists across renders but it does not trigger re-renders when updated
// const { x } = object => destructures the object and extracts the x property from it
export default function Project({title, description, tags, imageUrl, link}: ProjectProps) {
    //ref is initially set to null, but when it is attached to the ref prop in a div, its value (ref.current) will be updated
    const ref = useRef<HTMLDivElement>(null);
    
    // props of object passed to useScroll: container - the scrollable container that you want to track, target - the scrollable area of the container, offset - ["start start" "end end"]
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"] //0 1 means the bottom of the viewport crosses the top of the object/target 1.33 1 means the animation will end when the bottom of the viewport is 33% past the end of the target
    })

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
    <Link href={link} target="_blank">
        <motion.div ref={ref} style={{scale: scaleProgress, opacity: opacityProgress }} className="group mb-3 sm:mb-10 last:mb-0">
            <section className='bg-gray-100 max-w-[42rem] border-black/5 overflow-hidden sm:pr-8 relative rounded-lg hover:bg-gray-200 transition'>
            <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 max-w-[50%] flex flex-col h-full group-even:ml-[20rem]'>
                <h3 className='text-2xl font-semibold'>{title}</h3>
                <p className='mt-2 leading-relaxed text-gray-700'>{description}</p>
                <ul className='flex flex-wrap gap-3 mt-5'>
                    {tags.map((tag, index) => (
                        <li key={index} className="text-xs gap-1 text-gray-700 font-mono">{tag}</li>
                    ))}
                </ul>
            </div>
            
            <Image src={imageUrl} alt="Project I worked on" quality={95} 
                className='absolute top-8 -right-40 w-[80%] sm:w-[28.25rem] rounded-t-lg shadow-2xl  
                        group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2
                        group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2
                        group-even:right-[initial] group-even:-left-40 transition'/>
            </section>
        </motion.div>`
    </Link>
    
    )
}