import React, { useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { SlideInElement } from "../hook/slideInElement";
interface TraningCompProps {
    translateX:string
}

const Comp1 = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589819/training/comp1_hfvigo.webp";

export const TraningComp: React.FC<TraningCompProps> = ({translateX="60"}) => {


    const TraningRef = useRef<HTMLImageElement>(null);
    SlideInElement({element:TraningRef, translateX:translateX});


    return (
    <>
      <div className="mt-16" ref={TraningRef}>
            <h6 className="header-no-mb mb-16">บริการจัดอบรม</h6>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 justify-center px-4 md:px-32 lg:px-64">
                <div className="max-w-[30rem] max-h-[30rem] md:w-[42.1875rem] md:h-[42.1875rem]  mx-auto ">
                    <LazyLoadImage
                    loading="lazy"
                    src={Comp1}
                    className="w-full h-full object-cover"
                    alt="Traning Comp"
                    />
                </div>
                <div className="self-center flex flex-col gap-4 text-lg">
                    <span className="">
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;สิ่งที่สำคัญในการพัฒนาแอปพลิเคชัน นอกเหนือจากความเข้าใจในตัวแอปพลิเคชันแล้ว คือการที่ผู้พัฒนามีความเข้าใจใน 
                    <span className="text-blue-500">&nbsp; Infrastructure &nbsp;</span> 
                        และซอฟต์แวร์ที่ตัวเองใช้ และการมี 
                    <span className="text-blue-500">&nbsp; Workflow &nbsp;</span> 
                        หรือ 
                    <span className="text-blue-500">&nbsp; Pipeline &nbsp;</span> 
                        ที่มีคุณภาพก็จะทำให้การพัฒนาแอพมีความแม่นยำมากขึ้นอีกด้วย
                    </span>

                    <span>
                        พวกเรา <span className="text-blue-500">&nbsp;Cloud NC&nbsp;</span> มีบริการ Training และ Workshop ที่จะให้ความรู้ในด้านของ Cloud, DevOps และ Agile ตามความต้องการของลูกค้า ซึ่งมีทั้ง 
                        <span className="text-blue-500">&nbsp;In-House Training&nbsp;</span> หรือ 
                        <span className="text-blue-500">&nbsp;Public Classes&nbsp;</span> ที่เราจะเปิดคอร์สสอนทุกๆ ไตรมาส
                    </span>

                </div>
            </div>
        </div>
    </>
);
};