import { Contact } from "../component/Contact";
import Slider from "../component/Slider/Slider";
import { LazyLoadImage } from "react-lazy-load-image-component";
import React, { useRef } from "react";
import { TraningComp } from "../component/TraningComp";
import { SlideInElement } from "../hook/slideInElement";

const Banner = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589819/training/Banner_skrozs.jpg";

function MemoizedTraining() {

    const sliderRef = useRef<HTMLImageElement>(null);

    SlideInElement({element:sliderRef, translateX:"-60", start:undefined});
    

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
        translateX="60"
        />

        <div className="flex flex-col my-4 mt-8" ref={sliderRef}>
            <h6 className="header-no-mb">รวมภาพบรรยากาศการสอน</h6>
            <Slider/>
        </div>
                    
    </div>
    

    <Contact
    header="ขอใบเสนอราคา"
    />
    </>
);
}
const Training = React.memo(MemoizedTraining);
export default Training;