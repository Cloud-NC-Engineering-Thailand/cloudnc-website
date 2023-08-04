import { TopSection } from "../component/TopSection";
import { Navbar } from "../component/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "../component/Footer";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Logo = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589834/logo_e5xzxn.webp";

export const Layout = () => {

    return (
    <>  

    <div className="max-w-full">
        <div className="md:block hidden">
            <TopSection/>
        </div>
    <div className="md:block hidden w-full h-[20vh] animate-slideup">
        <LazyLoadImage
        loading="lazy"
        src={Logo}
        alt="clouncLogo"
        className="w-full h-full object-contain"
    />
    </div>

    <Navbar/>

        <div className="min-h-[30vh] overflow-x-hidden">
            <Outlet/>   
        </div>
            
    
        <Footer/>
        
    </div>

    </>
);
};