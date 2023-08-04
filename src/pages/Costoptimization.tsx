import { Contact } from "../component/Contact";
import { LazyLoadImage } from "react-lazy-load-image-component";
import React from "react";
import { CostOptimizationComp } from "../component/CostOptimizationComp";
// import { SlideInElement } from "../hook/slideInElement";
import { ActionIntoView } from "../hook/actionWhenView";

const Banner = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589597/costoptimization/banner_ft11ie.jpg";
const Diagram = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589597/costoptimization/Diagram_os2oq3.webp";

function MemoizedCostOptimization() {

    ActionIntoView("#diagram", "animate-slideright")

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
            animate="animate-slideleft"
            />

            <div className=" w-auto h-auto max-h-[52rem] max-w-[91.0625rem] mx-auto mt-32">
                <div 
                id="diagram"
                >
                    <LazyLoadImage
                    loading="lazy"
                    src={Diagram}
                    className="w-full h-full"
                    />
                </div>
            </div>

        <div className="mt-16">
            <Contact
            id="cost-op"
            animate="animate-slideleft"
            />
        </div>
    </>
);
}
const CostOptimization = React.memo(MemoizedCostOptimization);
export default CostOptimization;