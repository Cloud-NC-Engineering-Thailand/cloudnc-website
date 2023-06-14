import { useEffect, useRef, useState } from "react";
import { DropdownNavbar } from "./DropdownNavbar";
import { optionPosition, optionService } from "../../Constant/NavbarText";
import HamburgerButton from "@icon-park/react/lib/icons/HamburgerButton";
import { Link } from "react-router-dom";
import { TextInsideNavbarMobile } from "./TextInsideNavbarMobile";
import { TopSection } from "../TopSection";
import { useLocation } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Logo = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589834/logo_e5xzxn.webp";

export const Navbar = () => {

     
    const location = useLocation();
    // console.log(location.pathname)

    const [state, setState] = useState({
        prevScrollpos:0,
        openDrawer:false,
        visible:true,
        currentIndex:1,
        currentSubIndex:0,
    });

    const progressBarRef = useRef<HTMLDivElement>(null);

    const handleChangeCurrentIndex = (index:number) => {
        setState(prev => ({...prev, currentIndex:index}));
    };
    
    const handleChangeCurrentSubIndex = (index:number) => {
        setState(prev => ({...prev, currentSubIndex:index}));
    };

    useEffect(() => {

        switch (location.pathname) {
            case "/":
                handleChangeCurrentIndex(0);
                handleChangeCurrentSubIndex(-1);
                break;
            case "/aboutus":
                handleChangeCurrentIndex(1);
                handleChangeCurrentSubIndex(-1);
                break;
            case "/service":
                handleChangeCurrentIndex(2);
                handleChangeCurrentSubIndex(0);
                break;
            case "/training":
                handleChangeCurrentIndex(2);
                handleChangeCurrentSubIndex(1);
                break;
            case "/cloudmigration":
                handleChangeCurrentIndex(2);
                handleChangeCurrentSubIndex(2);
                break;
            case "/appdelivery":
                handleChangeCurrentIndex(2);
                handleChangeCurrentSubIndex(3);
                break;
            case "/costoptimization":
                handleChangeCurrentIndex(2);
                handleChangeCurrentSubIndex(4);
                break;
          
            case "/career":
                handleChangeCurrentIndex(4);
                handleChangeCurrentSubIndex(-1);
                break;
            case "/job/software":
                handleChangeCurrentIndex(5);
                handleChangeCurrentSubIndex(0);
                break;
            case "/job/intern":
                handleChangeCurrentIndex(5);
                handleChangeCurrentSubIndex(1);
                break;
            case "/contact":
                handleChangeCurrentIndex(6);
                handleChangeCurrentSubIndex(-1);
                break;
            default:
                break;
        }

    },[location.pathname]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScrollProgess = () => {
        const winScroll = window.scrollY;
        //@ts-ignore
        const height = document?.scrollingElement?.scrollHeight - document?.scrollingElement?.clientHeight;
        const scrolled = (winScroll / height) * 100;
        if (progressBarRef && progressBarRef.current) {
          progressBarRef.current.style.width = `${scrolled}%`;
        }
    };
      

    const handleScroll = () => {    
        const currentScrollPos = window.pageYOffset;
        setState(prev => ({...prev, visible:prev.prevScrollpos > currentScrollPos, prevScrollpos:currentScrollPos}));
        handleScrollProgess();
    };

    const handleDrawer = () => {
        setState(prev => ({...prev, openDrawer:!prev.openDrawer}));
    };

    return (
        <>
        
    <div className={`z-50 w-full p-4 text-lg text-gray-600 font-light shadow-lg  animate-slideup
         transition duration-300 bg-white h-[7vh] md:h-[6vh] sticky top-0 ${state.visible ? "opacity-100" : "opacity-0"}
        `} >
        <div className=" hidden md:flex gap-8 justify-center ">

            <Link to="/" className={`hover:text-blue-500 cursor-pointer ${state.currentIndex === 0 && "text-blue-500"}`}>หน้าแรก</Link>
            <Link to="/aboutus" className={`hover:text-blue-500 cursor-pointer ${state.currentIndex === 1 && "text-blue-500"}`}>เกี่ยวกับเรา</Link>
            
            <DropdownNavbar
            title="บริการ"
            option={optionService}
            currentIndex={state.currentIndex === 2}
            currentSubIndex={state.currentSubIndex-1}
            link={"/service"}
            />
            
            {/* ไม่มี currentIndex */}
            <a  
            href={"https://blog.cloudnatician.com/"}  
            onClick={() => window.open("https://blog.cloudnatician.com/", "_blank")}  
            rel="noreferrer" 
            target="_blank"
            className="hover:text-blue-500"
            >บทความ</a>

            <Link 
            to="/career"
            className={`hover:text-blue-500 cursor-pointer ${state.currentIndex === 4 && "text-blue-500"}`}
            >
                ร่วมงาน
            </Link>
            
            <DropdownNavbar
            title="ตำแหน่ง"
            option={optionPosition}
            currentIndex={state.currentIndex === 5}
            currentSubIndex={state.currentSubIndex}
            />
            
            <Link 
            to="/contact"
            className={`hover:text-blue-500 cursor-pointer ${state.currentIndex === 6 && "text-blue-500"}`}
            >
                ติดต่อเรา
            </Link>
        </div>

        <div className="flex justify-between gap-4 px-4 md:hidden">
            <Link to={"/"} className="w-8 h-8">
                <LazyLoadImage
                loading="lazy"
                src={Logo}
                alt="clouncLogo"
                className="w-full h-full cursor-pointer aspect-auto"
                />
            </Link>
            <HamburgerButton 
            theme="outline" 
            size="24" 
            fill="#9b9b9b"
            className="cursor-pointer"
            onClick={handleDrawer}
            />
        </div>

    </div>

    <div className={`${state.visible ? "top-[7.2vh] md:top-[6.2vh]" : "top-[0.05vh]"} transition-transform sticky  left-0 w-full h-1 bg-gray-200  z-30`}>
        <div ref={progressBarRef} className="h-full bg-blue-500"></div>
    </div>
    
    <div
    className={`bg-white shadow-xl fixed w-full  min-h-[100vh] overflow-hidden p-2 z-50 transition-all top-0 ${state.openDrawer ? "right-0" : "-right-[105%]"}`}>
        <div className="flex flex-col gap-4 mt-8 p-2 h-auto overflow-y-scroll max-h-[100vh] min-h-screen scrollbar-nav ">
            <div className="w-16 h-16 mx-auto">
                <img
                        loading="lazy"
                src={Logo}
                className="w-full h-full cursor-pointer"
                onClick={handleDrawer}
                />
            </div>

            <TextInsideNavbarMobile
            currentIndex={state.currentIndex}
            currentSubIndex={state.currentSubIndex}
            handleCloseDrawer={handleDrawer}
            />
            <TopSection/>
            {/* <TextInsideNavbarMobile/> */}
            {/* <TextInsideNavbarMobile/> */}
        </div>
    </div>
    </>
);
};