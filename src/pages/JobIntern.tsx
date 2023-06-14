import { Contact } from "../component/Contact";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useRef } from "react";
import React from "react";
import { SlideInElement } from "../hook/slideInElement";

const SoftwareJob = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589666/job/softwareIntern_ftmlw8.png";

function MemoizedJobIntern() {
    const SoftwareIntern = useRef<HTMLImageElement>(null);
    SlideInElement({element:SoftwareIntern, translateX:"60"});

    return (
    <>
    <div className="w-full " ref={SoftwareIntern}>
        <div className="career-bg  w-full grid grid-cols-1 gap-12 justify-center px-4 md:px-32 lg:px-64">
            <div className="grid grid-cols-1 gap-12 min-h-[20rem]" ref={null}>
                <h6 className="header mt-16">Internship Software Engineer (Cloud & DevOps) </h6>
                <div className="w-full h-full">
                    <LazyLoadImage
                    loading="lazy"
                    src={SoftwareJob}
                    width={500}
                    height={800}
                    className="w-full h-full"
                    alt="Cloudnc Ten Fact"
                    />
                </div>
            </div>

        </div>  
    </div>

   <div className="mt-16">
   <Contact
    file={true}
    header="ร่วมงานกับเรา"
    title="Join Us"
    translateX="-60"
    titleClass="text-lg font-bold"
    email={import.meta.env.VITE_WORK_EMAIL}
    />
   </div>

    </>
);
}
const JobIntern = React.memo(MemoizedJobIntern);
export default JobIntern;