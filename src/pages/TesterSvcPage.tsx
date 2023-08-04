import { Contact } from "../component/Contact";
import { LazyLoadImage } from "react-lazy-load-image-component";
import React from "react";
import { TesterSvcComp } from "../component/TesterSvcComp";
import { TestingDiagramSvc } from "../component/DiagramTesting";

const Banner = "https://res.cloudinary.com/dzz6rgxkl/image/upload/f_auto,q_auto/v1/service/yktbsd5k8qolfojohdyj";
function MemorizeTesterSvcPage() {

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
      
        <TesterSvcComp
        animate="animate-slideright"
        />

        <TestingDiagramSvc/>
       

    
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
const TesterSvcPage = React.memo(MemorizeTesterSvcPage);
export default TesterSvcPage;