import React from 'react'
import { useFormStatus } from 'react-dom';
import { FaPaperPlane } from 'react-icons/fa'

export default function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        //disable the button when it is clicked until the form has been sent
        // when "pending" (form submission), button will show a spinnign animation instead of the word submit
        <button type="submit" className='flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all hover:scale-110 active:scale-105 hover:bg-gray-950 disabled:bg-opacity-65 disabled:scale-100' disabled={pending}>
            {pending ? (<div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>) 
                      : (<>Submit <FaPaperPlane className="text-xs opacity-70 transition-all" /> </>)
            }
        </button>
    )
}
