const Central = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589622/customer/central_pic8ua.jpg";
const Ais = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589621/customer/ais_pqiboc.png";
const Amity = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589620/customer/amity_cqj8yw.png";
const Axa = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589620/customer/axa_fnu1t1.png";
const Bitkub = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589620/customer/bitkub_ntvcb2.jpg";
const CPF = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589621/customer/cpf_epsvru.png";
const GDLGroup = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589621/customer/gdlgroup_edmhas.jpg";
const Metrabyte = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589621/customer/metrabyte_xwopbe.png";
const Srichand = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589621/customer/srichand_hdrdwc.jpg";



type CustomerImage = {
    img:string;
    alt:string;
}

// หน้าที่แสดงว่าลูกค้าของเรามีใครบ้าง
export const CustomerData:CustomerImage[] = [
    {
        img:Central,
        alt:"Central"
    },
    {
        img:Ais,
        alt:"Ais"
    },
    {
        img:Amity,
        alt:"Amity"
    },
    {
        img:Axa,
        alt:"Axa"
    },
    {
        img:Bitkub,
        alt:"Bitkub"
    },
    {
        img:CPF,
        alt:"CPF"
    },
    {
        img:GDLGroup,
        alt:"GDLGroup"
    },
    {
        img:Metrabyte,
        alt:"Metrabyte"
    },
    {
        img:Srichand,
        alt:"Srichand"
    },
];