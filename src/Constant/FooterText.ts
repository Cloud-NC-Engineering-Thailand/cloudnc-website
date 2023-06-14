type FooterService = {
    text:string;
    link:string
}

//อยู่ตรงส่วนล่างสุดที่เป็น List
export const FooterText:FooterService[] = [
    {
        text:"บริการย้ายข้อมูลขึ้นคลาวด์",
        link:"/cloudmigration"
    },
    {
        text:"บริการคำปรึกษาด้านการพัฒนาแอป",
        link:"/appdelivery"
    },
    {
        text:"บริการช่วยควบคุมต้นทุนการใช้คลาวด์",
        link:"/costoptimization"
    },
    {
        text:"บริการจัดอบรม ",
        link:"/training"
    },
];