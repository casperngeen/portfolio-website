import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import ActiveSectionContextProvider from '@/context/active-section-context'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Casper Ng', //appears on the tab
  description: 'Casper is a aspiring developer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return ( 
    //the classes defined in the body are the defaults for the entire web page, eg bg or text colour
    //children refers to the actual page
    //the 2 divs are to add a bit of colouring to the background (customised using tailwind)
    //absolute: positions the element absolutely relative to the nearest positioned ancestor (goes with an ancestor that has the class name relative)
    //top-xxx: Sets the top edge of the element to be aligned with xxx distance from the top edge of the ancestor
    //sm, md, lg, xl, 2xl: customise styling for screen sizes, if screen size meets a certain threshold (eg, size for xl), then a certain styling will be applied accordingly
    //rem: unit of size in terms of pixels, usually 1 rem is 16 px (used to standardise the measurements)
    //z-index: controls the order of stacking (higher values are stacked on top of lower values), -z-10 means the z-index value is -10 and z-20 means the value is 20
    //pt : padding-top to give space for the header which is in "fixed" position
    //Toaster: how toasts will pop up on the screen (in this case on the top-right of the screen)
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36`}>
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />

          <Toaster position='top-right' /> 
        </ActiveSectionContextProvider>
        
      </body> 
    </html>
  )
}