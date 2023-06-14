import React, { useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { SlideInElement } from "../hook/slideInElement";

const Comp1 = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589597/costoptimization/comp_d2oymg.webp";

interface CostOptimizationCompProps {
    translateX:string

}

export const CostOptimizationComp: React.FC<CostOptimizationCompProps> = ({translateX="60"}) => {

    const AppDeliverRef = useRef<HTMLImageElement>(null);
    SlideInElement({element:AppDeliverRef, translateX:translateX, duration:1.2});

    return (
    <>

    <div className="career-bg mt-16" ref={AppDeliverRef}>
            <h6 className="header">บริการช่วยควบคุมต้นทุนการใช้คลาวด์ </h6>
            <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-12 justify-center px-4 md:px-32 lg:px-64">
                <div className="max-w-[30rem] max-h-[30rem] md:w-[42.1875rem] md:h-[42.1875rem]  mx-auto ">
                    <LazyLoadImage
                    loading="lazy"
                    alt="CostOptimize Comp"
                    src={Comp1}
                    className="w-full h-full object-cover"
                    />
                </div>
                <div className="self-center flex flex-col gap-4 text-lg">
                    <span className="">
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                        การใช้ระบบ
                        <span className="text-blue-500">&nbsp;Cloud Computing&nbsp;</span> 
                        มีความซับซ้อนและรายละเอียดที่แตกต่างกันไปขึ้นอยู่กับ รูปแบบของ Cloud ที่ใช้, ประเภทของธุรกิจ และความต้องการของตัวบริษัทเอง

                        <br/>
                        <br/>

                        พวกเรา  <span className="text-blue-500">&nbsp;Cloud NC &nbsp;</span> 
                        จึงมีบริการที่ คอยให้คำปรึกษาและให้ความช่วยเหลือ เกี่ยวกับการใช้ cloud เพื่อทำให้บริษัทของคุณใช้งาน Cloud ได้อย่างคุ้มค่าและมีประสิทธิภาพมากที่สุด โดยเราจะช่วยคุณลดค่าใช้จ่ายในการใช้ Public Cloud โดยการ
                       
                        <span className="text-blue-500">&nbsp;List Services  &nbsp;</span> 
                        ที่มีอยู่ใน Public Cloud ของคุณจัดสรร Service ใน cloud ให้เหมาะสมกับความต้องการของบริษัทไหน ลดความซับซ้อนของ
                        <span className="text-blue-500">&nbsp;Infrastructure   &nbsp;</span> 
                        ในระบบ cloud ให้บริษัทของคุณใช้งาน Cloud ได้ดีที่สุด


                    </span>
                </div>
            </div>


        </div>

    </>
);
};