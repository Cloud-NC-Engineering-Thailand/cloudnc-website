
import { Contact } from "../component/Contact";
import { LazyLoadImage } from "react-lazy-load-image-component";
import React from "react";
import { AppdeliveryComp } from "../component/AppdeliveryComp";
import { ActionIntoView } from "../hook/actionWhenView";

const Banner = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589423/appdelivery/banner_kpaaki.jpg";
const MineMap = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589424/appdelivery/minemap_oettgz.webp";

function MemoizedAppDelivery() {


    ActionIntoView("#minemap", "animate-slideright")

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
        animate="animate-slideleft"
        />

        <div className="md:mx-32 mt-32">
                <div id="minemap" className=" ">
                    <LazyLoadImage
                    loading="lazy"
                    src={MineMap}
                    className="h-auto w-auto md:w-[91rem] mx-auto md:h-[57.75rem]"
                    alt="appDelivery minemap"                
                    />
                </div>
            </div>


        <div className="mt-16">
            <Contact
            id="contact-appdeli"
            animate="animate-slideleft"
            />
        </div>
    </>
);
}

const AppDelivery = React.memo(MemoizedAppDelivery);
export default AppDelivery;