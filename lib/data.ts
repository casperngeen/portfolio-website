import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import reactIcon from "@/public/react-icon.svg";
import nextJSIcon from "@/public/nextjs-icon.svg";
import tailwindIcon from "@/public/tailwindcss-icon.svg";
import framerIcon from "@/public/framer-motion-icon.svg";


//difference between ts and tsx file: cannot use jsx elements (eg <About />)

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Pre-matriculation",
    location: "Singapore",
    description:
      "I took up courses like CS50 and MOOC: Java Programming to get started on my programming journey while waiting for university.",
    icon: React.createElement(LuGraduationCap),
    date: "Jan 2023 - Aug 2023",
  },
  {
    title: "Full-time undergraduate",
    location: "National University of Singapore",
    description:
      "I'm currently studying Computer Science with a second major in Mathematics at NUS, Singapore. I'm open to software engineering internship / part-time roles!",
    icon: React.createElement(FaReact),
    date: "Aug 2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Personal Portfolio",
    description:
      "This website is my first software development project. I aim to familiarise myself with Next.JS and React through this.",
    tags: ["React", "Next.js", "Tailwind", "Framer Motion"],
    icons: [reactIcon, nextJSIcon, tailwindIcon, framerIcon],
    imageUrl: corpcommentImg, //to change
    link: "https:www.google.com" // to change
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Python",
  "Java",
  "SQL",
  "Framer Motion",
] as const;