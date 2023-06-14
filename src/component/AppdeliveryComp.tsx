import React, { useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { SlideInElement } from "../hook/slideInElement";
interface AppdeliveryCompProps {
    translateX:string
}

const Comp1 = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589423/appdelivery/comp1_zk7bj9.webp";

export const AppdeliveryComp: React.FC<AppdeliveryCompProps> = ({translateX="60"}) => {

    const AppDeliverRef = useRef<HTMLImageElement>(null);
    SlideInElement({element:AppDeliverRef, translateX:translateX, start:undefined});
   
    return (
    <>
       
       <div className="career-bg mt-16" ref={AppDeliverRef}>
            <h6 className="header">บริการคำปรึกษาด้านการพัฒนาแอป </h6>
            <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-12 justify-center px-4 md:px-32 lg:px-64">
                <div className="max-w-[30rem] max-h-[30rem] md:w-[42.1875rem] md:h-[42.1875rem]  mx-auto ">
                    <LazyLoadImage
                    loading="lazy"
                    alt="Appdelivery Comp"
                    src={Comp1}
                    className="w-full h-full object-cover"
                    />
                </div>
                <div className="self-center flex flex-col gap-4 text-base md:text-lg ">
                    <span className="">
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                        ในการพัฒนาแอปพลิเคชัน ต้องใช้ทรัพยากรและความเข้าใจอย่างมาก ตั้งแต่การออกแบบ เขียนโค้ดไปจนถึงการ Deploy ซึ่งการเลือกใช้
                        <span className="text-blue-500">&nbsp;Tech Stack&nbsp;</span> 
                        และออกแบบ workflow ให้เหมาะสมจะทำให้การพัฒนาแอปพลิเคชันมีความแม่นยำและรวดเร็วมากยิ่งขึ้น

                        <br/>
                        <br/>

                        พวกเรา  <span className="text-blue-500">&nbsp;Cloud NC &nbsp;</span> 
                        มีบริการที่ช่วยคุณในทุกขั้นตอนของการพัฒนาแอปพลิเคชัน ตั้งแต่การเลือกใช้ Tech Stack ที่เหมาะสมกับงาน ไปจนถึงการสอนการใช้งาน software ต่างๆที่ใช้พัฒนาแอป โดยเราจะใช้เทคนิคสมัยใหม่อย่างเช่น

                        <span className="text-blue-500">&nbsp;Infrastructure As Code &nbsp;</span> แนวคิดที่ออกแบบโครงสร้างพื้นฐาน เป็น Source Code
                        <br/>
                        <br/>
                        <span className="text-blue-500">&nbsp;CI/CD &nbsp;</span> เป็นแนวคิดที่จะใส่ระบบ automation ในแต่ขั้นตอนของการพัฒนาแอป ทำให้การพัฒนาเป็นไปในทางเดียวกัน และลด human error ลง
                        <br/>
                        <br/>
                        <span className="text-blue-500">&nbsp;DevSecOps &nbsp;</span> เป็นแนวคิดที่รวมกันทำงานให้เป็นทีมมากขึ้น และยังเพิ่มความปลอดภัยกับความแม่นยำในแต่ละขั้นตอนของการพัฒนาอีกด้วย
                        <br/>
                        <br/>
                        <span className="text-blue-500">&nbsp;GitOps &nbsp;</span> เป็นซอฟต์แวร์ที่ทำให้การเก็บข้อมูล การจัดการข้อมูล มีความเป็นระบบมากยิ่งขึ้น และการสร้างระบบ Continuous Delivery (ส่วนหนึ่งของ CI/CD) ขึ้น Cloud Native ทำได้ง่ายขึ้นอีกด้วย
                    </span>
                </div>
            </div>

            
        </div>
    </>
);
};