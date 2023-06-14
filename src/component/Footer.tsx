import { LazyLoadImage } from "react-lazy-load-image-component";
import { FooterText } from "../Constant/FooterText";
import { Link } from "react-router-dom";

const LogoFooter = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589644/footer/logo_footer_cwdmwi.webp";
const QrCode = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589645/footer/qrcode__luabux.webp";

export const Footer = () => {


    return (
    <div className="bg-red-100 grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 footer px-8 place-items-center mt-8 py-16" >
        <div className="flex flex-col flex-wrap items-center gap-8">
            <LazyLoadImage
            loading="lazy"
            src={LogoFooter}
            alt="LogocloudNc"
            />
            <LazyLoadImage
            loading="lazy"
            className="w-[9.375rem] h-[9.375rem]"
            src={QrCode}
            alt="cloudNcQr"
            />
        </div>
        <div className="flex flex-col flex-wrap items-start gap-2 text-base">
            <p className="text-lg">บริการของเรา</p>
            {FooterText.map((item,i) => (
                <Link to={item.link} key={i}>
                    <p 
                     style={{ textDecoration: "none" }}
                    className=" text-slate-500 hover:text-blue-500 cursor-pointer">{item.text}</p>
                </Link>
            ))}
        </div>

        <div className="overflow-hidden">
        <iframe 
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCloudNCThailand%2F&tabs=timeline&width=280&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
        width="280" 
        title="Facebook CloudNc"
        height="500" 
        style={{border:"none", overflow:"hidden"}} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        
        </div>

    </div>
);
};