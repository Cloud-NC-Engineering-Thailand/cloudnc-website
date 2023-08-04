import { Contact } from "../component/Contact";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { ActionIntoView } from "../hook/actionWhenView";

const TenFact = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589470/career/10fact_qcxjlg.png";
const Welfare = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589468/career/welfarebenefit_hj8lf3.png";
const WelfareStd = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589470/career/welfareForStudent_kfxx6h.png";
const Intern = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589466/career/intern_ooctdk.webp";
const Software = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589467/career/software_u3xz9i.webp";

function Career() {

    ActionIntoView("#fact", "animate-slideright", 0.01)
    ActionIntoView("#welfare", "animate-slideleft", 0.01)
    ActionIntoView("#welfareStd", "animate-slideright", 0.01)
    ActionIntoView("#openingJob", "animate-slideleft", 0.01)
    

    return (
    <>
    <div className="w-full ">
        
        <div className="career-bg  w-full grid grid-cols-1 gap-12 md:gap-36 justify-center px-4 md:px-32 lg:px-64 my-8">

            <div className="grid grid-cols-1 gap-1 min-h-[50vh]" id="fact">
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
            
            <div className="grid grid-cols-1 gap-1 opacity-0" id="welfare">
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



            <div className="grid grid-cols-1 gap-1 opacity-0" id="welfareStd">
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

            <div className="grid grid-cols-1 gap-1 opacity-0" id="openingJob">
                <h6 className="header ">ตำแหน่งที่รับสมัคร</h6>
                <div className="flex flex-col gap-8 items-center">
                    <Link
                    to="/job/software"
                    >
                    <LazyLoadImage
                    loading="lazy"
                    src={Software}
                    width={300}
                    height={500}
                    className="max-w-[25rem] max-h-[6.875rem] object-contain w-full h-full"
                    alt="Cloudnc Ten Fact"
                    />
                    </Link>
                    <Link
                    to="/job/intern"
                    >
                    <LazyLoadImage
                    loading="lazy"
                    src={Intern}
                    width={300}
                    height={500}
                    className="max-w-[25rem] max-h-[6.875rem] object-contain w-full h-full"
                    alt="Cloudnc Ten Fact"
                    />
                    </Link>
                </div>
            </div>
        </div>
    </div>

    <div className="mt-32 md:mt-48">
    <Contact
    id="career-contac"
    header="ร่วมงานกับเรา"
    title="Join Us"
    email={import.meta.env.VITE_WORK_EMAIL}
    file={true}
    />

   </div>
    </>
);
}


export default Career;