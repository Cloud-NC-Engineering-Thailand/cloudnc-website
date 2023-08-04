import { Contact } from "../component/Contact";
import { LazyLoadImage } from "react-lazy-load-image-component";
import React from "react";
import { ActionIntoView } from "../hook/actionWhenView";

const SoftwareJob = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589666/job/softwareIntern_ftmlw8.png";

function MemoizedJobIntern() {

    ActionIntoView("#softwareIntern", "animate-slideright")

    return (
    <>
    <div className="w-full " id="softwareIntern">
        <div className="career-bg  w-full grid grid-cols-1 gap-12 justify-center px-4 md:px-32 lg:px-64">
            <div className="grid grid-cols-1 gap-12 min-h-[20rem]">
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
    id="jobint-contac"
    file={true}
    header="ร่วมงานกับเรา"
    title="Join Us"
    animate="animte-slideleft"
    titleClass="text-lg font-bold"
    email={import.meta.env.VITE_WORK_EMAIL}
    />
   </div>

    </>
);
}
const JobIntern = React.memo(MemoizedJobIntern);
export default JobIntern;