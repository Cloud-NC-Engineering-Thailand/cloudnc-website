import { useEffect, useRef } from "react";
import { Contact } from "../component/Contact";
import gsap from "gsap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import React from "react";

const TenFact = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589470/career/10fact_qcxjlg.png";
const Welfare = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589468/career/welfarebenefit_hj8lf3.png";
const WelfareStd = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589470/career/welfareForStudent_kfxx6h.png";
const Intern = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589466/career/intern_ooctdk.webp";
const Software = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589467/career/software_u3xz9i.webp";

function MemoizedCareer() {

    
    const FactRef = useRef<HTMLDivElement>(null);
    const WelfareRef = useRef<HTMLDivElement>(null);
    const WelfareStdRef = useRef<HTMLDivElement>(null);
    const OpeningJobRef = useRef<HTMLDivElement>(null);
    

    useEffect(() => {
        const elf = FactRef.current;
        const el = WelfareRef.current;
        const elw = WelfareStdRef.current;
        const elj = OpeningJobRef.current;
        
        gsap.fromTo(elf, {
            opacity:0,
            transform: "translateX(80px)"
        },
        {
            opacity:1,
            transform: "translateX(0)",
            duration:1.2,
            scrollTrigger:{
                trigger:elf,
            },
         }
        );
        
        gsap.fromTo(el, {
            opacity:0,
            transform: "translateX(-80px)"
        },
        {
            opacity:1,
            transform: "translateX(0)",
            duration:1,
            scrollTrigger:{
                trigger:el,
                start: "top 40%",
                end:"bottom 100%" 
            },
         }
        );
        gsap.fromTo(elw, {
            opacity:0,
            transform: "translateX(80px)"
        },
        {
            opacity:1,
            transform: "translateX(0)",
            duration:1.2,
            scrollTrigger:{
                trigger:elw,
                start: "top 40%",
                end:"bottom 100%" 
            },
         }
        );
        
        gsap.fromTo(elj, {
            opacity:0,
            transform: "translateX(-80px)"
        },
        {
            opacity:1,
            transform: "translateX(0)",
            duration:1.2,
            scrollTrigger:{
                trigger:elj,
                start: "top 40%",
                end:"bottom 100%" 
            },
         }
        );
    }, []);
    

    return (
    <>
    <div className="w-full ">
        
        <div className="career-bg  w-full grid grid-cols-1 gap-12 md:gap-36 justify-center px-4 md:px-32 lg:px-64 my-8">

            <div className="grid grid-cols-1 gap-1 min-h-[50vh]" ref={FactRef}>
                <h6 className="header " >10 ข้อเท็จจริงเกี่ยวกับคลาวด์เอ็นซี</h6>
                <div className="w-full h-full">
                    <LazyLoadImage
                    loading="lazy"
                    width={300}
                    height={500}
                    src={TenFact}
                    className="w-full h-full"
                    alt="Cloudnc Ten Fact"
                    />
                </div>
            </div>
            
            <div className="grid grid-cols-1 gap-1" ref={WelfareRef}>
                <h6 className="header ">สวัสดิการสำหรับพนักงาน</h6>
                <div className="w-full h-full">
                    <LazyLoadImage
                    loading="lazy"
                    src={Welfare}
                    width={300}
                    height={500}
                    className="w-full h-full"
                    alt="Cloudnc Ten Fact"
                    />
                </div>
            </div>



            <div className="grid grid-cols-1 gap-1" ref={WelfareStdRef}>
                <h6 className="header ">สวัสดิการสำหรับนักศึกษาฝึกงาน</h6>
                <div className="w-full h-full">
                    <LazyLoadImage
                    loading="lazy"
                    src={WelfareStd}
                    width={300}
                    height={500}
                    className="w-full h-full"
                    alt="Cloudnc Ten Fact"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 gap-1" ref={OpeningJobRef}>
                <h6 className="header ">ตำแหน่งที่รับสมัคร</h6>
                <div className="flex flex-col gap-8 items-center">
                    <LazyLoadImage
                    loading="lazy"
                    src={Software}
                    width={300}
                    height={500}
                    className="max-w-[25rem] max-h-[6.875rem] object-contain w-full h-full"
                    alt="Cloudnc Ten Fact"
                    />
                    <LazyLoadImage
                    loading="lazy"
                    src={Intern}
                    width={300}
                    height={500}
                    className="max-w-[25rem] max-h-[6.875rem] object-contain w-full h-full"
                    alt="Cloudnc Ten Fact"
                    />
                </div>
            </div>
        </div>
    </div>

    <div className="mt-32 md:mt-48">
    <Contact
    header="ร่วมงานกับเรา"
    />

   </div>
    </>
);
}

const Career = React.memo(MemoizedCareer);
export default Career;