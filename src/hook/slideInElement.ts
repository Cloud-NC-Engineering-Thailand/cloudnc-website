import { useEffect } from "react";
import gsap from "gsap";


type SlideInElement = {
    element:React.RefObject<HTMLImageElement>
    translateX?:string;
    duration?:number;
    start?:string | undefined;
}

export function SlideInElement({element, translateX="60", duration=1, start} : SlideInElement)  {
    useEffect(() => {
        const el = element.current;
        gsap.fromTo(el, {
            opacity:0,
            transform: `translateX(${translateX}px)`
        },
        {
            opacity:1,
            transform: "translateX(0)",
            duration:duration,
            scrollTrigger:{
                trigger:el,
                start:start,
            },
         }
        );
    }, []);
}

interface SlideInWithTarget extends SlideInElement {
    target:React.RefObject<HTMLImageElement>
}

export function SlideInElementWithTarget({element, target, translateX="60", duration=1} : SlideInWithTarget) {
    useEffect(() => {
        const el = element.current;
        const elt = target.current;
        gsap.fromTo(el, {
            opacity:0,
            transform: `translateX(${translateX}px)`
        },
        {
            opacity:1,
            transform: "translateX(0)",
            duration:duration,
            scrollTrigger:{
                trigger:elt
            },
         }
        );
    }, []);
}