import { Contact } from "../component/Contact";
import { CloudMigrationComp } from "../component/CloudMigrationComp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import React from "react";
import { ActionIntoView } from "../hook/actionWhenView";

const Banner = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589535/cloudMigration/banner_ole7iw.jpg";
const MineMap = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589535/cloudMigration/minemap_y34siu.webp";


function MemoizedCloudMigration() {


    ActionIntoView("#cloudmigrate", "animate-slideleft")


    return (
    <>
        <div className="w-full h-auto md:h-[46.625rem] animate-slideup">
            <LazyLoadImage
            loading="lazy"
            src={Banner}
            className="w-full h-full object-fill"
            alt="Cloud Migration Banner"
            />
        </div>
        
        <CloudMigrationComp
        animate="animate-slideright"
        />

        <div className="mx-32 mt-32 opacity-0" id="cloudmigrate">
            <LazyLoadImage
            alt="minemap"
            loading="lazy"
            src={MineMap}
            className="w-full h-full"
            />
        </div>


        <div className="mt-16">
            <Contact
            id="cloud-migrate-contact"
            />
        </div>
    </>
);
}
const CloudMigration = React.memo(MemoizedCloudMigration);
export default CloudMigration;