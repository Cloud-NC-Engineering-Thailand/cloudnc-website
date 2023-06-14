
import { Contact } from "../component/Contact";
import { LazyLoadImage } from "react-lazy-load-image-component";
import React, { useRef } from "react";
import { AppdeliveryComp } from "../component/AppdeliveryComp";
import { SlideInElement } from "../hook/slideInElement";

const Banner = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589423/appdelivery/banner_kpaaki.jpg";
const MineMap = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589424/appdelivery/minemap_oettgz.webp";

function MemoizedAppDelivery() {

    const mineMapRef = useRef<HTMLImageElement>(null);

    SlideInElement({element:mineMapRef, translateX:"-60"});


    return (
    <>
        <div className="w-full h-auto md:h-[46.625rem] animate-slideup">
            <LazyLoadImage
            loading="lazy"
            src={Banner}
            className="w-full h-full object-fill"
            alt="Appdelivery Banner"
            />
        </div>
        
        <AppdeliveryComp
        translateX="60"
        />

        <div className="md:mx-32 mt-32">
                <div ref={mineMapRef} className=" ">
                    <LazyLoadImage
                    loading="lazy"
                    src={MineMap}
                    className="h-auto w-auto md:w-[91rem] mx-auto md:h-[57.75rem]"
                    alt="appDelivery minemap"                
                    />
                </div>
            </div>


        <div className="mt-16">
            <Contact/>
        </div>
    </>
);
}

const AppDelivery = React.memo(MemoizedAppDelivery);
export default AppDelivery;