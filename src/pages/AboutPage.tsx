import { Member } from "../component/Member/Member";
import "../component/Member/Member.css";
import { Contact } from "../component/Contact";
import { LazyLoadImage } from "react-lazy-load-image-component";
import React from "react";
import { AboutPageText } from "../Constant/AboutPage";
import { ActionIntoView } from "../hook/actionWhenView";

function MemoizedAboutPage (){


    // const AboutRef = useRef<HTMLImageElement>(null);
    // const tempRef = useRef<HTMLImageElement>(null);

    // SlideInElementWithTarget({element:AboutRef, target:tempRef, translateX:"60", duration:1});
    

    ActionIntoView("#about-page", "animate-slideright")

    return (
    <>
    <title>
        เกี่ยวกับเรา
    </title>

    <meta
    about="cloudnc"
    content={AboutPageText.text}
    name="description"
    />
    
    <div className="career-bg">
    <div id="about-page" className=" w-full flex flex-wrap  gap-12 justify-center px-4 md:px-32 lg:px-64 place-content-center ">
        <div className="flex flex-col gap-4 mt-16" >
        <h6 className="header">เกี่ยวกับเรา</h6>
        <p className="text-slate-500 text-base font-semibold break-words inline max-w-[100vw]">
          {AboutPageText.text}
        </p>
        <div className="w-full h-auto md:w-[52rem] md:h-[69rem] mx-auto md:p-8 ">
            <LazyLoadImage
            loading="lazy"
            className="w-full h-full object-contain"
            src={AboutPageText.img}
            />
        </div>
    </div>
    
    </div>
    <Member/>
    
    <div className="h-fit w-fit">
        <Contact
        animate="animate-slideright"
        id="aboutus-contact"
        />
    </div>
    </div>
    </>
);
}
const AboutPage = React.memo(MemoizedAboutPage);
export default AboutPage;