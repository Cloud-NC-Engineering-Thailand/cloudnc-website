import { useRef } from "react";
import { Contact } from "../component/Contact";
import { LazyLoadImage } from "react-lazy-load-image-component";
import React from "react";
import { CostOptimizationComp } from "../component/CostOptimizationComp";
import { SlideInElement } from "../hook/slideInElement";

const Banner = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589597/costoptimization/banner_ft11ie.jpg";
const Diagram = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589597/costoptimization/Diagram_os2oq3.webp";

function MemoizedCostOptimization() {


    const DiagramRef = useRef<HTMLImageElement>(null);
    
    SlideInElement({element:DiagramRef, translateX:"-60"});

    return (
    <>
     <div className="w-full h-auto md:h-[46.625rem] animate-slideup">
            <LazyLoadImage
            loading="lazy"
            alt="CostOptimize Banner"
            src={Banner}
            className="w-full h-full object-fill"
            />
        </div>
        

            <CostOptimizationComp
            translateX="60"
            />

            <div className=" w-auto h-auto max-h-[52rem] max-w-[91.0625rem] mx-auto mt-32">
                <div ref={DiagramRef}>
                    <LazyLoadImage
                    loading="lazy"
                    src={Diagram}
                    className="w-full h-full"
                    />
                </div>
            </div>

        <div className="mt-16">
            <Contact/>
        </div>
    </>
);
}
const CostOptimization = React.memo(MemoizedCostOptimization);
export default CostOptimization;