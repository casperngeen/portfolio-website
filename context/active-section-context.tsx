"use client"

import React, { createContext, useContext, useState } from 'react'
import type { SectionName } from '@/lib/type'; //for clarity that we are importing a type

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
}

type ActiveSectionContextProviderProps = { children: React.ReactNode }

// createContext: when you create a context, you get a context object with 2 components - Provider (more commonly used) and Consumer 
// the initial value of context will be used if there isn't a provider component in the component tree (ie it is like a safety/default)
export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

// the Provider component is a client component, but the chldren wrapped inside of it are not "forced" to be children if they are passed to the Provider component via the chldren prop
// children prop: a special prop that can be passed into any react componennt, it represents the content between the opening and closing tag of the component
// Provider: wrapped around part of the component tree where you want to make the context value available (eg state), the context value is passed to the prop "value"

export default function ActiveSectionContextProvider({ children }: ActiveSectionContextProviderProps) {
    //useState: used when you want to keep track of something, always gives you the state and a setter function (triggers a re-render when the state is updated)
    const [activeSection, setActiveSection] = useState<SectionName>("Home"); //default is the Home section, we specify the exact values that activeSection can take
    const [timeOfLastClick, setTimeOfLastClick] = useState(0); // we need to keep track of this to temporarily disable the observer when the user clicks on the navbar

    return ( <ActiveSectionContext.Provider value={{ activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick }}>
        {children}
    </ActiveSectionContext.Provider>
    );
}

// declare a new hook to deal with null values for ActiveSectionContext
export function useActiveSectionContext() {

    //useContext: allows the children component wrapped in the provider to consume the context value (set in the value prop)
    const context = useContext(ActiveSectionContext);

    if (context === null) {
        throw new Error(
            "useActiveSectionContext must be used within an ActiveSectionContextProvider"
        );
    }

    return context;
}
