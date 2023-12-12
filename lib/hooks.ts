import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "./type";

// thought process behind creating a custom hook: extract out the similar code from differen files, then 1. see what are the things you need to return 2. see what are things that you want to customise (ie you want to pass in a specific value into the hook to customise the result)
// threshold = 0.75: 0.75 is the default value
export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
    //inView: a boolean variable that returns true if any part of the section is in the viewport (ie screen), else it will return false
    const { ref, inView } = useInView({
        threshold
    });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    //useEffect: when you want to synchronise the state with an external system (inview - internal state, activesection - external system/state)
    // takes 2 inputs, one function and one dependencies array - when any of the dependencies are changed, then the function will be run (side effect will happen)
    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
          setActiveSection(sectionName);
        }
      }, [inView, setActiveSection, timeOfLastClick, sectionName])

    return {
      ref
    }
      

}