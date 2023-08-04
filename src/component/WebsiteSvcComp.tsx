import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ActionIntoView } from "../hook/actionWhenView";
interface WebsiteSvcProps {
    animate:string
}

const Comp1 = "https://res.cloudinary.com/dzz6rgxkl/image/upload/f_auto,q_auto/v1/service/eyxhe46gefb3o20lirzx";

export const WebsiteSvcComp: React.FC<WebsiteSvcProps> = ({animate="animate-slideright"}) => {


    // const TraningRef = useRef<HTMLImageElement>(null);
    // SlideInElement({element:TraningRef, translateX:translateX});

    ActionIntoView("#websvccomp", animate)

    return (
    <>
      <div className="mt-16 opacity-0" id="websvccomp">
            <h6 className="header-no-mb mb-16">บริการให้คำปรึกษาด้านการทำเว็บไซด์</h6>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-24 justify-center px-4 md:px-32 lg:px-64">
                <div className="mx-auto scale-125">
                    <LazyLoadImage
                    loading="lazy"
                    src={Comp1}
                    className="w-full h-full "
                    alt="Traning Comp"
                    />
                </div>
                <div className="self-center flex flex-col gap-4 text-lg">
              
                    <span>  
                    <span className="text-blue-500">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Cloud Native </span> 
                    เป็นแนวคิดในการสร้างและรันแอปพลิเคชันโดยใช้  
                    <span className="text-blue-500">&nbsp;Concept </span> 
                    ของ 
                    <span className="text-blue-500">&nbsp;Cloud </span> และ <span className="text-blue-500">&nbsp;Agile </span> โดยเฉพาะ เป้าหมายหลักคือ ระบบทำงานได้อย่างมีประสิทธิภาพ และ ขยายได้ทุกความต้องการในธุรกิจ
                    โดยใช้วัฒนธรรม <span className="text-blue-500">&nbsp;Cloud Native </span>, แอปพลิเคชันของคุณจะใช้เวลาในการพัฒนาน้อย และ ส่งมอบได้รวดเร็วที่สุด
                    </span>

                </div>
            </div>
        </div>
    </>
);
};