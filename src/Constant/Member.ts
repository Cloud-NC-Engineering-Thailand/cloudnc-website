


const Poat = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589701/member/POat_vipbi5.webp";
const Pohm = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589701/member/POhm_l9bmuj.webp";
const PFern = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589700/member/PFern_rvvpnt.webp";
const PoatText = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589700/member/PoatText_lvrxqc.png";
const PohmText = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589700/member/PohmText_vgs5k9.png";
const PfernText = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589700/member/PfernText_ogro6s.png";

type MemberData = {
    name:string;
    role:string;
    uni:string;
    img:string;
    alt:string;
    text:string;
}

// สมาชิกในบริษัท
export const MemberData:MemberData[] = [
    {
        name:"สิริณัฎฐ์ ปภัสร์สิรินัที",
        role:"Chief Technology Officer&Chief Executive Officer",
        uni:"ป.ตรี วิทยาศาสตร์บัณฑิต สาขาเทคโนโลยีสารสนเทศ มหาวิทยาลัยพระจอมเกล้าธนบุรี",
        img:Pohm,
        alt:"CloudNc Poat",
        text:PohmText
    },
    {
        name:"ณัฐภัสสร ปภัสร์สิรินัที",
        role:"Chief Operating Officer&Chief Marketing Officer",
        uni:"ป.ตรี ศิลปกรรมศาสตร์บัณฑิต สาขาดนตรีและการแสดงเอกออกแบบเพื่อการแสดง มหาวิทยาลัยบูรพา ปใโท บริหารบุรกิจมหาบัณฑิต วิทยาลับพาณิชยศาสตร์และการบัญชี สาขาบริหารประชาสัมพันธ์และสื่อสารมวลชน มหาวิทยาลัยบูรพา",
        img:PFern,
        alt:"CloudNc Poat",
        text:PfernText
    },
    {
        name:"สิรณัฎฐ์ ปภัสร์สิรินัที",
        role:"Chief Information Officer",
        uni:"ป.ตรี เทคโนโลยีสารสนเทศ วิทยาลัยเทคโนโลยีสยามบริหารธุรกิจ ป.ตรี วิทยาศาสตร์บัณฑิต สาขามัลติมีเดียและแอนิเมชัน มหาวิทยาลัยนอร์ทกรุงเทพ",
        img:Poat,
        alt:"CloudNc Poat",
        text:PoatText
    },
];