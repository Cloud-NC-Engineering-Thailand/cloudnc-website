import EmailSearch from "@icon-park/react/lib/icons/EmailSearch";
import PhoneCall from "@icon-park/react/lib/icons/PhoneCall";
import React, { useEffect, useRef, useState } from "react";
import Local from "@icon-park/react/lib/icons/Local";
import gsap from "gsap";
import { TextFieldGoogle } from "./TextFieldGoogle/TextFieldGoogle";
import { TextAreaGoogle } from "./TextFieldGoogle/TextAreaGoogle";
import AcceptEmail from "@icon-park/react/lib/icons/AcceptEmail";

const Line = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589832/line-blue_j5th6p.svg";

interface ContactState {
    name:string;
    email:string;
    phone:string;
    msg:string;
    errIndex:number;
    errMsg:string;
    title:string;
}

interface ContactProp {
    header?:string;
    padding?:string;
}

export const ContactNoDialog: React.FC<ContactProp> = ({header="ติดต่อเรา", padding="px-4 md:px-32 lg:px-64"}) => {
    const [state, setState] = useState<ContactState>({
        name:"",
        email:"",
        phone:"",
        msg:"",
        title:"",
        // -1 คือค่าเริ่มต้น
        // -2 คือส่งอีเมล์สำเร็จแล้ว 
        // -3 คือส่่งอีเมล์แล้วแต่ error 
        errIndex:-1,
        errMsg:"",
    });

    const ContactRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const el = ContactRef.current;

        gsap.fromTo(el, {
            opacity:0,
            transform: "translateX(60px)"
            
        },
        {
            opacity:1,
            transform: "translateX(0)",
            duration:1.2,
            scrollTrigger:{
                trigger:el
            },
         }
        );
    }, []);

    const handleSetErr = (errIndex:number, errMsg:string) => {
        setState(prev => ({...prev, errIndex:errIndex, errMsg:errMsg}));
    };

    const handleSubmit = async(e:React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const {name, email, phone, title, msg} = state;
        if(!name) {
          handleSetErr(0, "คุณจำเป็นที่จะต้องใส่ชื่อของคุณ");
          return;
        }
        else if(!email.includes("@gmail.com")){
          handleSetErr(1, "อีเมล์ของคุณไม่ถูกต้องตามหลัก");
          return;
        }
        else if(!phone){
          handleSetErr(2, "คุณจำเป็นที่จะต้องใส่เบอร์โทรศัพท์ของคุณก่อน");
          return;
        }
        else if(!title){
          handleSetErr(3, "คุณจำเป็นที่จะต้องใส่หัวเรื่องที่คุณจะคุยกับเรา");
          return;
        }
        else if(!msg){
          handleSetErr(4, "คุณจำเป็นที่จะต้องใส่ข้อความที่คุณจะคุยกับเรา");
          return;
        }
        else {
          
          const response = await fetch(`${import.meta.env.VITE_API_URL}/send-email-with-file`, {
              method:"POST",
              headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
              },
              body:JSON.stringify({name:name, email:email, phone:phone, title:title, message:msg}),
            });
            if(response.status === 200){

              handleSetErr(-2, "เราได้รับอีเมล์จากคุณแล้วเราจะตอบกลับภายในเร็วๆนี้");
              setTimeout(() => {
                handleSetErr(-1, "");
              }, 5000);
              return;
            }
            else {
              handleSetErr(-3, "ดูเหมือนจะมีข้อผิดพลาดบางอย่างถ้าเป็นไปได้กรุณาติดต่อเราช่องทางอื่น");
              setTimeout(() => {
                handleSetErr(-1, "");
              }, 5000);
              return;
            }
        }
        
    
      };
    
    return (
    <>
    <div className="w-full " ref={ContactRef}>
        <p className="text-4xl text-center font-medium mb-12">{header}</p>
        <div className={`w-full grid grid-cols-1 md:grid-cols-2 gap-12 justify-center ${padding}`}>
            <div className="flex flex-col gap-4">
                <h6 className="text-blue-500 text-xl font-semibold">บริษัท คลาวด์ เอ็น ซี จำกัด</h6>
                <h6 className="text-slate-500 text-base font-semibold">99/90 หมู่บ้าน นิว คอนเน็กซ์ เฮาส์ ดอนเมือง ถนนพหลโยธิน แขวงสนามบิน เขตดอนเมือง กรุงเทพมหานคร 10210</h6>
                <div className="flex flex-col gap-3">
                    <div className="flex gap-1">
                        <EmailSearch theme="outline" size="24" className="text-blue-500"/>
                        <h6 className="text-slate-500 text-base font-semibold truncate">marketing@cloudnatician.com</h6>
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
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 mb-6">
            <div className="flex flex-col gap-1">
                    <TextFieldGoogle
                    value={state.name}    
                    onChange={handleChangeName}
                    title="ชื่อ"
                    />
                    {state.errIndex === 0 && <p className="text-red-500 text-sm">{state.errMsg}</p>}
                  </div>

                  <div className="flex flex-col gap-1">
                    <TextFieldGoogle
                    value={state.email}    
                    onChange={handleChangeEmail}
                    title="อีเมล์"
                    type="email"
                    />
                    {state.errIndex === 1 && <p className="text-red-500 text-sm">{state.errMsg}</p>}
                  </div>

                  <div className="flex flex-col gap-1">
                    <TextFieldGoogle
                    value={state.phone}    
                    onChange={handleChangePhone}
                    title="เบอร์โทรศัพท์"
                    />
                  {state.errIndex === 2 && <p className="text-red-500 text-sm">{state.errMsg}</p>}
                  </div>

                  <div className="flex flex-col gap-1">
                    <TextFieldGoogle
                    value={state.title}    
                    onChange={handleChangeTitle}
                    title="หัวเรื่อง"
                    />
                  {state.errIndex === 3 && <p className="text-red-500 text-sm">{state.errMsg}</p>}
                  </div>

                  <div className="flex flex-col gap-1">
                    <TextAreaGoogle
                    value={state.msg}    
                    onChange={handleChangeMsg}
                    title="ข้อความ"
                    />
                  {state.errIndex === 4 && <p className="text-red-500 text-sm">{state.errMsg}</p>}
                  </div>



                {/* <input id="dropzone-file" type="file" className="" accept="image/png, image/jpeg, image/gif"  onChange={handleImageChange}/> */}
                <button 
                onClick={handleSubmit}
                type="submit"
                className="bg-blue-400 text-white rounded-full p-2 px-4 w-fit flex gap-2">
                <AcceptEmail theme="outline" size="24"/>
                <p>ส่งข้อความหาเรา</p>
                </button>
                {state.errIndex === -2 && <p className="text-green-500 text-lg">{state.errMsg}</p>}
                {state.errIndex === -3 && <p className="text-red-500 text-lg">{state.errMsg}</p>}

            
              
            </form>
        </div>
    </div>

        
    </>
);
function handleChangeName(e:React.ChangeEvent<HTMLInputElement>) {
  setState(prev => ({...prev, name:e.target.value}));
}
function handleChangeEmail(e:React.ChangeEvent<HTMLInputElement>) {
  setState(prev => ({...prev, email:e.target.value}));
}
function handleChangePhone(e:React.ChangeEvent<HTMLInputElement>) {
  setState(prev => ({...prev, phone:e.target.value}));
}
function handleChangeMsg(e:React.ChangeEvent<HTMLTextAreaElement>) {
  setState(prev => ({...prev, msg:e.target.value}));
}
function handleChangeTitle(e:React.ChangeEvent<HTMLInputElement>) {
  setState(prev => ({...prev, title:e.target.value}));
}
  
};