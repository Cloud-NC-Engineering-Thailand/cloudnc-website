import EmailSearch from "@icon-park/react/lib/icons/EmailSearch";
import PhoneCall from "@icon-park/react/lib/icons/PhoneCall";
import React, { useState } from "react";
import Local from "@icon-park/react/lib/icons/Local";
import { DialogNoFile } from "./Dialog/DialogNoFile";
import { DialogWithFile } from "./Dialog/DialogWithFile";
import { ActionIntoView } from "../hook/actionWhenView";

const Line = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589832/line-blue_j5th6p.svg";

interface ContactState {
    open:boolean
}

interface ContactProp {
    header?:string;
    padding?:string;
    file?:boolean
    title?:string;
    titleClass?:string;
    animate?:string;
    email?:string;
    id:string
}
export const Contact: React.FC<ContactProp> = ({header="ติดต่อเรา", padding="px-4 md:px-32 lg:px-64", file=false, title="คลิกเพื่อส่งข้อความหาเรา", titleClass="text-base", animate="animate-slideright", email=import.meta.env.VITE_MARKETING_EMAIL, id}) => {
    
    const [state, setState] = useState<ContactState>({
        open:false,
    });

    ActionIntoView(`#${id}`, animate, 0.1)
    
    return (
    <>

    <title>
        ติดต่อเรา
    </title>

    <meta
    about="cloudnc"
    content="99/90 หมู่บ้าน นิว คอนเน็กซ์ เฮาส์ ดอนเมือง ถนนพหลโยธิน แขวงสนามบิน เขตดอนเมือง กรุงเทพมหานคร 10210"
    name="description"
    />

    <div className="w-full opacity-0" id={id}>
        <p className="header">{header}</p>
        <div className={`w-full grid grid-cols-1 md:grid-cols-2 gap-12 justify-center ${padding}`}>
            <div className="flex flex-col gap-4">
                <h6 className="text-blue-500 text-xl font-semibold">บริษัท คลาวด์ เอ็น ซี จำกัด</h6>
                <h6 className="text-slate-500 text-base font-semibold">99/90 หมู่บ้าน นิว คอนเน็กซ์ เฮาส์ ดอนเมือง ถนนพหลโยธิน แขวงสนามบิน เขตดอนเมือง กรุงเทพมหานคร 10210</h6>
                <div className="flex flex-col gap-3">
                    <div className="flex gap-1">
                        <EmailSearch theme="outline" size="24" className="text-blue-500"/>
                        <h6 className="text-slate-500 text-base font-semibold truncate">{email}</h6>
                    </div>

                    <div className="flex gap-1">
                        <PhoneCall theme="outline" size="24" className="text-blue-500"/>
                        <h6 className="text-slate-500 text-base font-semibold cursor-pointer" onClick={() => {navigator.clipboard.writeText("061-394-2929");}}>061-394-2929</h6>
                    </div>
                    
                    <a className="flex hover:underline w-fit"
                     href={"https://page.line.me/100vxfai?openQrModal=true"}  
                     onClick={() => window.open("https://page.line.me/100vxfai?openQrModal=true", "_blank")}  
                     rel="noreferrer" 
                     target="_blank"
                     >
                        <img
                        loading="lazy"
                        src={Line}
                        className="w-7 h-7"
                        />
                        <h6 className="text-slate-500 text-base font-semibold">@cloudnc</h6>
                    </a>
                    
                    <a className="flex gap-1 hover:underline w-fit"
                        href={"https://www.google.com/maps/place/Cloud+NC+Tech+Consulting+Agency/@13.9495276,100.6204462,15z/data=!4m5!3m4!1s0x0:0x2fe2277f24f6b282!8m2!3d13.9495276!4d100.6204462?sa=X&ved=2ahUKEwipm8ml6r79AhVT1nMBHfkkD74Q_BJ6BAhLEAM&coh=164777&entry=tt&shorturl=1"}  
                        onClick={() => window.open("https://www.google.com/maps/place/Cloud+NC+Tech+Consulting+Agency/@13.9495276,100.6204462,15z/data=!4m5!3m4!1s0x0:0x2fe2277f24f6b282!8m2!3d13.9495276!4d100.6204462?sa=X&ved=2ahUKEwipm8ml6r79AhVT1nMBHfkkD74Q_BJ6BAhLEAM&coh=164777&entry=tt&shorturl=1", "_blank")}  
                        rel="noreferrer" 
                        target="_blank"
                    >
                        <Local theme="outline" size="24" className="text-blue-500"/>
                        <h6 className="text-slate-500 text-base font-semibold">Google Map</h6>
                    </a>
                    

                </div>
            </div>
            

            <div className="flex justify-center items-center  ">
                <button
                className="mt-2 text-white  p-4 px-6 font-bold    
                bg-gradient-to-tr from-indigo-600 via-blue-500 to-purple-500 hover:opacity-80 rounded-full w-fit mx-auto"
                onClick={() => setState(prev => ({...prev, open:!prev.open}))}
                >
                <p className={`${titleClass}`}>{title}</p>
                </button>
            </div>
        </div>
    </div>

    {file ? 
        <DialogWithFile
        open={state.open}
        onClose={() => setState(prev => ({...prev, open:!prev.open}))}
        header="ส่งข้อความหาเรา"
        />
        :
        <DialogNoFile
        open={state.open}
        onClose={() => setState(prev => ({...prev, open:!prev.open}))}
        header="ส่งข้อความหาเรา"
        />
    }
        
    </>
);

};