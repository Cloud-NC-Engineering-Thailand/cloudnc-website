import { Contact } from "../component/Contact";
import { LazyLoadImage } from "react-lazy-load-image-component";
import React from "react";
import { WebsiteSvcComp } from "../component/WebsiteSvcComp";
import { DiagramWebSvc } from "../component/DiagramWebSvc";
const Banner = "https://res.cloudinary.com/dzz6rgxkl/image/upload/f_auto,q_auto/v1/service/d8c22eajksqoqers9inh";
function MemorizeWebsiteSvcPage() {


    return (
    <>

    <div className="career-bg mb-8">
        <div className="w-full h-auto md:h-[46.625rem] animate-slideup">
            <LazyLoadImage
            loading="lazy"
            src={Banner}
            className="w-full h-full object-fill"
            alt="Traning Banner"
            />
        </div>
      
        <WebsiteSvcComp
        animate="animate-slideright"
        />

        <DiagramWebSvc/>
       
        <div className="my-32">
            <Contact
            id="traning-contact"
            header="ติดต่อเรา"
            />
        </div>
    </div>
    </>
);
}
const WebsiteSvcPage = React.memo(MemorizeWebsiteSvcPage);
export default WebsiteSvcPage;