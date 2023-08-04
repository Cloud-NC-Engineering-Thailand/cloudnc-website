import { cardService } from "../Constant/ServiceText";
import {Link, useNavigate} from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ActionIntoView } from "../hook/actionWhenView";


const ServiceComp = ({animate="animate-slideright"}:{animate:string}) => {

    const navigate = useNavigate();
    
    
    // const ServiceRef = useRef<HTMLImageElement>(null);
    // const target = useRef<HTMLImageElement>(null);
    
    // SlideInElementWithTarget({element:ServiceRef, target:target, translateX:translateX});

    ActionIntoView("#service", animate)

    return (
     <div className="w-full opacity-0" id="service">
        <p className="header">บริการของเรา</p>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 justify-center px-4 md:px-32 lg:px-64" >
            {cardService.map((item, i) => (
                <div
                className="flex flex-col gap-6 items-center"
                key={i}
                >
                    <LazyLoadImage
                    loading="lazy"
                    className="w-[16.5rem] h-[16.5rem] object-contain"
                    src={item.img}
                    />
                    <p className="text-lg  text-purple-500 font-bold">{item.title}</p>
                    <p className="text-sm  text-slate-500 font-semibold">{item.text}</p>
                    
                    <button 
                    className="mt-2 
                    bg-gradient-to-tr from-indigo-600 via-blue-500 to-purple-600 hover:opacity-80 rounded-full w-fit p-2 px-4 mx-auto"
                    onClick={() => navigate(item.link)}
                    >
                        <Link to={item.link} className=" text-white text-sm">
                        อ่านเพิ่มเติม
                        </Link>
                    </button>
                </div>

            ))}            
        </div>
    </div>
    
);
};
export default ServiceComp;