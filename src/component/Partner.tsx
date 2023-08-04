import { PartnerImage } from "../Constant/PartnerImage";
// import { useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import { SlideInElement } from "../hook/slideInElement";
import { ActionIntoView } from "../hook/actionWhenView";

interface PartnerProps {
    animate:string;
}


const Partner:React.FC<PartnerProps> = ({animate="animate-slideright"}) => {

    // const PartnerRef = useRef<HTMLImageElement>(null);

    // SlideInElement({element:PartnerRef, translateX:translateX});

    ActionIntoView("#partner", animate)

    return (
    <div className="w-full opacity-0" id="partner">
        <p className="header">Our Partner</p>
        <div className="w-full grid grid-cols-1 justify-items-center px-4 md:px-32 lg:px-64 ">
                <div className="w-full h-full max-w-[50rem] max-h-[35rem]" >
                    <LazyLoadImage
                    loading="lazy"
                    alt={PartnerImage[0].alt}
                    className="w-full h-full object-contain"
                    src={PartnerImage[0].img}
                    />
                </div>
        </div>
    </div>
);
};

export default Partner;