import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ActionIntoView } from "../hook/actionWhenView";

const Comp1 = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589535/cloudMigration/comp_jvmugx.webp";

interface CloudMigrationCompProps {
    animate:string
}

export const CloudMigrationComp: React.FC<CloudMigrationCompProps> = ({animate="animate-slideright"}) => {


    // const CloudMigrationRef = useRef<HTMLImageElement>(null);
    // SlideInElement({element:CloudMigrationRef, translateX, duration:1.2});

    ActionIntoView("#cloudmigration", animate)


    return (
    <>
    
    {/* <CloudMigration/> */}
    <div className="career-bg mt-16 opacity-0" 
    id="cloudmigration"
    >
            <h6 className="header">บริการย้ายข้อมูลขึ้นคลาวด์</h6>
            <div className="w-full grid grid-cols-1 gap-12 justify-center px-4 md:px-32 lg:px-64">
                <div className="max-w-[30rem] max-h-[30rem] md:w-[42.1875rem] md:h-[42.1875rem] mx-auto">
                    <LazyLoadImage
                    loading="lazy"
                    src={Comp1}
                    className="w-full h-full object-cover"
                    alt="Cloud Migration Component"
                    />
                </div>
                <div className="self-center flex flex-col gap-4 text-lg">
                    <span className="">
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                        <span className="text-blue-500">&nbsp;Cloud Migration&nbsp;</span> 
                        คือขั้นตอนในการย้ายข้อมูลทางดิจิทัล, ทรัพยากรทาง IT, หรือ แอปพลิเคชัน จากฐานข้อมูลของบริษัทขึ้นระบบ 
                        <span className="text-blue-500">&nbsp;Cloud Computing&nbsp;</span>
                        และสามารถย้ายข้อมูลทั้งหมดหรือบางส่วนก็ได้ โดยการย้ายข้อมูลจะแบ่งเป็น 3 รูปแบบหลักๆคือ
                        <br/>

                        <ol className="pl-5 list-decimal">
                           <li className="text-blue-500">ย้ายข้อมูลจากระบบศูนย์ข้อมูลที่มีอยู่ ไปยัง Public Cloud / Private Cloud (On-premise to cloud)</li>
                           <li className="text-blue-500">ย้ายข้อมูลจากระบบ Cloud หนึ่งไปยัง Cloud (Cloud-to-Cloud)</li>
                           <li className="text-blue-500">ย้ายข้อมูลจากระบบ Cloud กลับไปศูนย์ข้อมูลที่มีอยู่ (Cloud to on-premise)</li>
                        </ol>
                        <br/>
                        <span> ในปัจจุบัน สามารถเลือกผู้ให้บริการ public cloud จากบริษัทชั้นนำได้มากมาย เช่น AWS, Google Cloud หรือ Microsoft Azure</span>
                        <br/>
                        <br/>
                        <span> นอกจากนี้หากทางลูกค้าสนใจที่จะสร้าง Data Center เป็น Private Cloud เรายังให้คำปรึกษาในด้านนี้อีกด้วย</span>
                        <br/>
                        <br/>
                        <span > เรามีบริการที่เราช่วยคุณในการย้าย Applications จาก Data Center ของคุณไปยัง Public Cloud หรือ Private Cloud โดยเน้นออกแบบ Infrastructure บน <span className="text-blue-500">Cloud Environments</span> ใหม่ ให้ Support การขยายตัว และ มีความมั่นคงปลอดภัยโดยใช้เทคนิคสมัยใหม่ อย่างเช่น Cloud Native (DevOps, Agile, Collaboration) และการทำงานร่วมกับลูกค้าอย่างใกล้ชิด  </span>
                    </span>
                </div>
            </div>

         
        </div>
    </>
);
};