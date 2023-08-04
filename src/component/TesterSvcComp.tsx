import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ActionIntoView } from "../hook/actionWhenView";
interface TesterSvcProps {
    animate:string
}

const Comp1 = "https://res.cloudinary.com/dzz6rgxkl/image/upload/f_auto,q_auto/v1/service/wgkpuo5bugodhybxkkvo";

export const TesterSvcComp: React.FC<TesterSvcProps> = ({animate="animate-slideright"}) => {


    ActionIntoView("#websvccomp", animate)

    return (
    <>
      <div className="mt-16 opacity-0" id="websvccomp">
            <h6 className="header-no-mb mb-16">บริการให้คำปรึกษาด้านการทดสอบระบบ</h6>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-24 justify-center px-4 md:px-32 lg:px-64">
                <div className="mx-auto scale-125">
                    <LazyLoadImage
                    loading="lazy"
                    src={Comp1}
                    className="w-full h-full "
                    alt="Traning Comp"
                    />
                </div>
                <div className="self-center flex flex-col gap-4 text-lg break-words">
              
                    <span>  
                  
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;การทดสอบระบบแบบอัตโนมัติ (Automated Testing) ช่วยให้บริษัทของคุณ สามารถลดเวลาในการทดสอบระบบ ไม่ว่าจะเป็น
                    <span className="text-blue-500">&nbsp;UI,</span> 
                    <span className="text-blue-500">&nbsp;Testing,</span> 
                    <span className="text-blue-500">&nbsp;API Testing&nbsp;</span> 
                    และ 
                    <span className="text-blue-500">&nbsp;Performance Testing&nbsp;</span> 
                    
                        พวกเรา Cloud NC มีบริการที่คอยให้คำปรึกษา และ ให้ความช่วยเหลือในด้านของการทำ
                        <span className="text-blue-500">&nbsp;Automated Testing&nbsp;</span>
                        เพื่อให้ผลการทดสอบระบบออกมารวดเร็ว แม่นยำ และ สอดคล้องกับมาตราฐานมากที่สุด

                    </span>


                </div>
            </div>
        </div>
    </>
);
};