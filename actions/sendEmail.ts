"use server";

import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY); 

//server actions cannot be defined in a client component, but you can export it and use it in a clinet component
export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get("senderEmail"); //string passed must be the exact same as the value declared in the name prop of the form elements
    const message = formData.get("message");

    //make sure message has type string
    if (!validateString(senderEmail, 500)) {
        return {
            error: "Invalid email"
        }
    }

    if (!validateString(message, 5000)) {
        return {
            error: "Invalid message"
        }
    }

    let data;
    // based on the resend api (to send emails)
    try{
        data = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: "casperngeen@gmail.com",
            subject: "Message from contact form",
            reply_to: senderEmail as string, //asset the type as string since we have done our necessary checks beforehand already
            // text: message as string,
            react: React.createElement(ContactFormEmail, {
                message: message as string, 
                senderEmail: senderEmail as string})
        })
    } catch (error) {
        return {
            error: getErrorMessage(error)
        }
    }

    return {
        data
    }
};