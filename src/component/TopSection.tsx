import { LazyLoadImage } from "react-lazy-load-image-component";
import { TopSectionImage } from "../Constant/TopSectionText";
import React from "react";

export const TopSection = () => {

    return (
    <>
    <div className="flex gap-2 w-full justify-end items-center animate-slideup">
        
        {TopSectionImage.map((item, i) => (
            <React.Fragment key={i}>
            {item.link ? 
            <a 
                href={`${item.link}`}  
                onClick={() => window.open(`${item.link}`, "_blank")}  
                rel="noreferrer" 
                target="_blank"
                >
                <LazyLoadImage
                loading="lazy"
                src={item.src}
                alt={item.alt}
                className="cursor-pointer hover:opacity-75 aspect-[40/40]"
                />
            </a>
            :
            <React.Fragment key={i}>
            <LazyLoadImage
            loading="lazy"
            src={item.src}
            alt={item.alt}
            width={40}
            height={40}
            className="cursor-pointer hover:opacity-75 aspect-[40/40]"
            />
            <p className="font-semibold pr-8">TH</p>
            </React.Fragment>
            }

            </React.Fragment>
        ))}
        
        
    </div>
    </>
);
};