import { LazyLoadImage } from "react-lazy-load-image-component";
import { ActionIntoView } from "../hook/actionWhenView";


const AboutImg = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589833/about_wdc8bb.webp";

const About = () => {

    // const AboutRef = useRef<HTMLImageElement>(null);

    // SlideInElement({ element:AboutRef, translateX:"60", duration:1})

    ActionIntoView("#about-comp", "animate-slideright")

    return (                    
    <div className="w-full  opacity-0" 
    id="about-comp"
    >
        <p className="header" >เกี่ยวกับเรา</p>
        <div className="w-full flex flex-wrap 2xl:flex-nowrap  gap-12 justify-center px-4 lg:px-32 2xl:px-64">
            <div className="w-full 2xl:w-1/2 h-[23rem]">
            {/* <div className="w- 2xl:w-1/2 h-[23rem]"> */}
                
                <LazyLoadImage
                loading="lazy"
                src={AboutImg}
                className="w-fit h-full object-contain mx-auto aspect-[368/368]"
                // effect="blur"
                alt="cloudNc About"
                />
                {/* <div className="bg-white h-full w-full absolute top-0" ref={containerRef}></div> */}

            </div>
            <div className="w-full md:w-1/2 mt-4" >
                <h6 className="text-2xl text-blue-500 text-start font-semibold mb-12"> บริษัท คลาวด์ เอ็น ซี จำกัด</h6>
                <p className="text-slate-500 font-light text-lg break-words">
                บริษัทของเราก่อตั้งขึ้นในปี 2022 จากกลุ่มนักพัฒนาที่มีความกระตือรือร้น และเชื่อมั่นในการสร้างชีวิตวิศวกรรมซอฟต์แวร์ที่ดีขึ้น โดยการนำหลักการของ Cloud Native และวิธีการแบบ Agile มาใช้ ทีมงานของเรามีประสบการณ์ในการพัฒนาซอฟต์แวร์จากสตาร์ทอัพไทยสู่บริษัทระดับโลกมากว่า 5 ปี ทีมงานของเราแสดงความรู้ความสามารถในการออกแบบระบบที่รองรับการขยายตัวระดับสูง และทนทานต่อความผิดพลาด สำหรับ Retail Business ที่เป็นอันดับต้นๆในประเทศไทย และรองรับ Campaign ใหญ่ๆ อย่างเช่น 7.7 และ 9.9 เราอยากผลักดันให้ Partner ทำงานร่วมกับเราเพื่อเปลี่ยนบริษัทของพวกเขาให้เป็น Cloud Native พร้อมใช้วัฒนธรรมของบริษัทที่ดีที่สุด และส่งเสริมการสร้างนวัตกรรมในชุมชนนักพัฒนาซอฟต์แวร์ไทย
                </p>
            </div>  
        </div>
    </div>
);
};
export default About;