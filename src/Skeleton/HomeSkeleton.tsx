import { FooterSkeleton } from "./FooterSkeleton";
import { ComponentSkeleton } from "./ComponentSkeleton";
import { BannerSkeleton } from "./BannerSkeleton";

export const HomeSkeleton = () => {

    return (
    <div className="animate-pulse min-h-[80vh] md:min-h-[100vh]">
      

      <div className="flex flex-col gap-4">
        <BannerSkeleton/>
        <div className="w-full" >
            <h6 className="mx-auto h-6 bg-gray-200 rounded-full w-48 mb-8"></h6>
            
           <ComponentSkeleton/>
        </div>
    </div>

    <FooterSkeleton/>

    </div>
);
};