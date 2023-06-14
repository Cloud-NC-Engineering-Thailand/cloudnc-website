import React from "react";
import ServiceComp from "../component/ServiceComp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { CloudMigrationComp } from "../component/CloudMigrationComp";
import { AppdeliveryComp } from "../component/AppdeliveryComp";
import { CostOptimizationComp } from "../component/CostOptimizationComp";
import { TraningComp } from "../component/TraningComp";
import Partner from "../component/Partner";
import { Contact } from "../component/Contact";


const Banner = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589505/carousel/banner3_mgk9sq.webp";

const MemoizedServicePage: React.FC = () => {


   

    return (
    <>
    <div className="career-bg">
    <title>
        ยริการของเรา
    </title>

    <meta
    about="cloudnc"
    content="Cloud Migrationคือขั้นตอนในการย้ายข้อมูลทางดิจิทัล, ทรัพยากรทาง IT, หรือ แอปพลิเคชัน จากฐานข้อมูลของบริษัทขึ้นระบบ"
    name="description"
    />
    <div className="w-full h-auto md:h-[46.625rem] animate-slideup bg-banner mb-8">
        <LazyLoadImage
        loading="lazy"
        src={Banner}
        className="w-full h-full object-fill"
        alt="Traning Banner"
        />
    </div>
    <div className="flex flex-col gap-8 md:gap-16 mt-16 md:mt-32">

    <ServiceComp
    translateX="60"
    />

    <CloudMigrationComp
    translateX="-60"
    />

    <AppdeliveryComp
    translateX="60"
    />

    <CostOptimizationComp
    translateX="-60"
    />

    <TraningComp
    translateX="60"
    />
    
    <Partner
    translateX="-60"
    />
    
    </div>
    
    <div className="mt-16 mb-8">
        <Contact/>
    </div>

    </div>
    </>
);
};
const ServicePage = React.memo(MemoizedServicePage);
export default ServicePage;