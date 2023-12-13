"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import { sendEmail } from '@/actions/sendEmail'
import SubmitButton from './submit-button'
import toast from 'react-hot-toast'

export default function Contacts() {
  const {ref} = useSectionInView("Contact");

  //w-[min()]: returns the minimum of the 2 values which is useful for dynamic interfaces (different width values with different screen size)
  //viewport={{once:true}}: animation only runs when the section or container enters the viewport for the first time
  //whileInView (instead of animate): transition loads only when the user reaches that container or section instead of rendering from the get go when the page is loaded
  // action prop in form: action is a special feature in nextJS which invokes server actions (in this case sending form data from client to server) - this is done by nextJS in the backend where formData (or whatever other data) is passed as a payload from the client side to server side
  // Promise: an object that represents the eventual state (complete or failure) of an async operation, and its resulting value
  // async: defines a function that contains asynchronous code (ie the function wll return a promise)
  // await: used within async functions to wait for the resolution of a Promise
  return (
    <motion.section ref={ref} id="contact" className="mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center mx-10" initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 1}} viewport={{once:true}} >
        <SectionHeading>Contact Me</SectionHeading>
        <p className='text-gray-700 -mt-5'>Please contact me at <a className="underline" href="mailto:e1121036@u.nus.edu">casperngeen@gmail.com</a> or through this form.</p>
        <form className='mt-10 flex flex-col' action={async (formData) => {
          const {data, error} = await sendEmail(formData); //the function will return either data (if successful) or error (if unsuccessful)
          if (error) {
            toast.error(error); // error message from resend, not a default error message
            return;
          }
          toast.success("Email was successfully sent!"); // toast is from the react-hot-toast package (for nicer notifications)
        }}>
            <input name="senderEmail" className="h-14 rounded-lg borderBlack px-4" type="email" placeholder='Your email' required maxLength={500}/>
            <textarea name="message" className='h-52 my-3 rounded-lg borderBlack p-4' placeholder='Your message' required maxLength={5000}/>
            <SubmitButton />
        </form>
    </motion.section>
  )
}
