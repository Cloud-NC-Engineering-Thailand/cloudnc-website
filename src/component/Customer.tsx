import { useRef } from "react";
import { CustomerData } from "../Constant/CustomerText";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { SlideInElement } from "../hook/slideInElement";
import { ActionIntoView } from "../hook/actionWhenView";

const Customer = () => {

    // const CustomerRef = useRef<HTMLImageElement>(null);
    // SlideInElement({element:CustomerRef, duration:1, translateX:"-60", start:"top 10%"})
    
    ActionIntoView("#customerRef", "animate-slideleft")

    return (
    <>
     <div 
     className="w-full "
     id="customerRef"
     >
        <p className="header">ลูกค้าของเรา</p>
        <div className="w-full flex flex-wrap  gap-12 justify-center px-4 md:px-32 lg:px-64 place-content-center">
            {CustomerData.map((item,i) => (
                <div className="max-w-[8.5rem] min-w-[7rem] max-h-[8.5rem] min-h-[7rem]" key={i}>
                    <LazyLoadImage
                    loading="lazy"
                    alt={item.alt}
                    className="w-full h-full object-contain"
                    src={item.img}
                    />
                </div>
            ))}
            
        </div>
    </div>
    </>
);
};

export default Customer;