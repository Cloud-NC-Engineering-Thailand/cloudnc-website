const Facebook = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589787/topsection/facebook_itrl3t.svg";
const Line = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589787/topsection/line_upqqbb.svg";
const Thailand = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589787/topsection/thailand_mhgl8y.png";

type Link = {
    alt:string;
    src:string;
    link:string | null;
}

// ส่วนของด้านบนสุดที่เป็น Line Faceboook กับ Thailand
export const TopSectionImage:Link[] = [
    {
        alt:"Facebook",
        src:Facebook,
        link:"https://www.facebook.com/CloudNCThailand"        
    },
    {
        alt:"Line",
        src:Line,
        link:"https://lin.ee/YiBoJxI"        
    },
    {
        alt:"Thailand",
        src:Thailand,
        link:null,     
    },
];
