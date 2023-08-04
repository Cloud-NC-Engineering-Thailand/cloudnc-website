type OptionType = {
    key:string,path:string
}


// ส่วนของ dropdown บริการ
export const optionService:OptionType[] = [
    {
        key:"บริการจัดอบรม",
        path:"/training"
    },
    {
        key:"บริการย้ายข้อมูลขึ้นคลาวด์",
        path:"/cloudmigration"
    },
    {
        key:"บริการคำปรึกษาด้านการพัฒนาแอป",
        path:"/appdelivery"
    },
    {
        key:"บริการช่วยควบคุมต้นทุนการใช้คลาวด์",
        path:"/costoptimization"
    },
    {
        key:"บริการให้คำปรึกษาด้านการทำเว็บไซด์",
        path:"/website-service"
    },
    {
        key:"บริการให้คำปรึกษาด้านการทดสอบระบบ",
        path:"/tester-service"
    },

];

// ส่วนของ dropdown บริการแต่เป็ยของ mobile เพราะ animation ไม่เหมือนกันเลยต้องแยก
export const optionServiceMobile:OptionType[] = [
    {
        key:"บริการ",
        path:"/service"
    },
    {
        key:"บริการจัดอบรม",
        path:"/training"
    },
    {
        key:"บริการย้ายข้อมูลขึ้นคลาวด์",
        path:"/cloudmigration"
    },
    {
        key:"บริการคำปรึกษาด้านการพัฒนาแอป",
        path:"/appdelivery"
    },
    {
        key:"บริการช่วยควบคุมต้นทุนการใช้คลาวด์",
        path:"/costoptimization"
    },
    {
        key:"บริการให้คำปรึกษาด้านการทำเว็บไซด์",
        path:"/website-service"
    },
    {
        key:"บริการให้คำปรึกษาด้านการทดสอบระบบ",
        path:"/tester-service"
    },

];

// Dropdown ตำแหน่ง
export const optionPosition:OptionType[] = [
    {
        key:"Software Engineer (Cloud & DevOps)",
        path:"/job/software"
    },
    {
        key:"Internship Software Engineer (Cloud & DevOps) ",
        path:"/job/intern"
    },
];
