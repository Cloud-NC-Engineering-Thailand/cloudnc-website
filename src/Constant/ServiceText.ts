const Service1 = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589738/service/service1_zshcqp.webp";
const Service2 = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589739/service/service2_szzkec.webp";
const Service3 = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589739/service/service3_zosls4.webp";
const Service4 = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589739/service/service4_lswlmm.webp";

type ServiceCard = {
    img:string;
    text:string;
    title:string;
    link:string;
}

// อันที่เป็นเขียนเริ่มด้วยบริการของเราแล้วก็มีรูป 4 รูป
export const cardService:ServiceCard[] = [
    {
        img:Service1,
        title:"Cloud Migration",
        text:"ย้าย App จาก Data Center ในองค์กรไปยัง Cloud",
        link:"/cloudmigration",
    },
    {
        img:Service2,
        title:"App Delivery",
        text:"ระบุสาเหตุที่แท้จริงที่ทำให้กระบวนการพัฒนา App ทั้งหมดเกิดความล่าช้า",
        link:"/appdelivery",
    },
    {
        img:Service3,
        title:"Cost Optimization",
        text:"ระบุค่าใช้จ่ายที่ซ่อนอยู่ในบัญชีของคุณและปรับการใช้งาน Cloud",
        link:"/costoptimization",
    },
    {
        img:Service4,
        title:"Training",
        text:"จัดงานอบรมให้ความรู้ในด้านของ Cloud ตามความต้องการของลูกค้า",
        link:"/training",
    },
];