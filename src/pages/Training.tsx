import { Contact } from "../component/Contact";
import Slider from "../component/Slider/Slider";
import { LazyLoadImage } from "react-lazy-load-image-component";
import React from "react";
import { TraningComp } from "../component/TraningComp";
import { ActionIntoView } from "../hook/actionWhenView";

const Banner = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589819/training/Banner_skrozs.jpg";

function MemoizedTraining() {

    ActionIntoView("#slideRef", "animate-slideleft")

    return (
    <>
    <title>
        บริการจัดอบรม
    </title>

    <meta
    about="cloudnc"
    content="สิ่งที่สำคัญในการพัฒนาแอปพลิเคชัน นอกเหนือจากความเข้าใจในตัวแอปพลิเคชันแล้ว คือการที่ผู้พัฒนามีความเข้าใจใน Infrastructureและซอฟต์แวร์ที่ตัวเองใช้"
    name="description"
    />
    <div className="career-bg">
        <div className="w-full h-auto md:h-[46.625rem] animate-slideup">
            <LazyLoadImage
            loading="lazy"
            src={Banner}
            className="w-full h-full object-fill"
            alt="Traning Banner"
            />
        </div>
      
        <TraningComp
        animate="animate-slideright"
        />

        <div className="flex flex-col my-4 mt-8" 
        id="slideRef"
        >
            <h6 className="header-no-mb">รวมภาพบรรยากาศการสอน</h6>
            <Slider/>
        </div>
                    
    </div>
    

    <Contact
    id="traning-contact"
    header="ขอใบเสนอราคา"
    />
    </>
);
}
const Training = React.memo(MemoizedTraining);
export default Training;