// import { useRef } from "react";
import "./Member.css";
import { MemberData } from "../../Constant/Member";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import { SlideInElement } from "../../hook/slideInElement";
import { ActionIntoView } from "../../hook/actionWhenView";

export const Member = () => {

      

    // const contrainerRef = useRef<HTMLImageElement>(null);
    // SlideInElement({element:contrainerRef, duration:1.2, translateX:"-60", start:undefined});
 
    ActionIntoView("#container", "animate-slideleft")


    return (
    <>
    <div className="mb-16" id="container">
        <h6 className="header">
            ทีมของเรา
        </h6>
       <div className="relative w-full h-full flex flex-wrap justify-center gap-32 bg-none">
        
  
        {MemberData.map((item, i) => (
            <div className="flex flex-col justify-center gap-16" key={i}>
            <div className="w-auto h-auto sm:w-[22.5rem] sm:h-[31.25rem]">
                <LazyLoadImage
                loading="lazy"
                src={item.img}
                alt={item.alt}
                className="w-full h-full"
                />
            </div>
            <div className="w-[22rem] h-[13rem] mx-auto">
                <LazyLoadImage
                loading="lazy"
                className="w-full h-full"
                src={item.text}
                alt={item.alt}
                />
            </div>
            </div>
        ))}
        </div>

    </div>

   

    </>
);
};