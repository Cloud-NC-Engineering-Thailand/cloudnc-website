import React, { useEffect, useState } from "react";
import "./Dialog.css";
import CloseSmall from "@icon-park/react/lib/icons/CloseSmall";
import { TextFieldGoogle } from "../TextFieldGoogle/TextFieldGoogle";
import { TextAreaGoogle } from "../TextFieldGoogle/TextAreaGoogle";
import AcceptEmail from "@icon-park/react/lib/icons/AcceptEmail";
import { Backdrop } from "../Backdrop/Backdrop";

interface DialogProps {
    open:boolean;
    onClose:() => void;
    header:string;
    className?:string;
}

export const DialogNoFile: React.FC<DialogProps> = ({open, onClose, header, className="w-2/3 lg:w-1/3"}) => {

  const [state, setState] = useState({
    loading:false,
    name:"",
    email:"",
    phone:"",
    msg:"",
    open:true,
      // -1 คือค่าเริ่มต้น
      // -2 คือส่งอีเมล์สำเร็จแล้ว 
      // -3 คือส่่งอีเมล์แล้วแต่ error
    errIndex:-1,
    errMsg:"",
    title:"",
  });


  const handleSetErr = (errIndex:number, errMsg:string) => {
    setState(prev => ({...prev, errIndex:errIndex, errMsg:errMsg}));
  };

  const handleSubmit = async(e:React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleForm();
    

  };


  useEffect(() => {
      function handleKeyDown(event:KeyboardEvent) {
        if (event.key === "Escape") {
          onClose();
        }
      }
  
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, [onClose]);

    return (
    <div id="myModal" >
        <div 
        className={` ${open ? "block" : "hidden"} modal-content  text-base leading-relax tracking-[0.02857em]`}
        >
            <div className={`bg-white flex flex-col gap-4 ${className}  mx-auto p-4 center-dialog `} //w-2/3 md:w-1/3  
               >
                <div className="flex justify-between mx-2">
                    <h6 className="text-lg font-medium leading-relax tracking-wide">{header}</h6>
                    <button 
                    onClick={() => onClose()}
                    className=""
                    ><CloseSmall theme="outline" size="24" fill="#4a90e2"/></button>
                </div>
                <hr/>
                <div className="overflow-y-auto max-h-[80vh]">


                <form onSubmit={handleSubmit} className="flex flex-col gap-8 my-6">
                
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
                {state.errIndex === -2 ? 
                <p className="text-green-500 text-base">{state.errMsg}</p>
                :
                <p className="text-red-500 text-base">{state.errMsg}</p>
                }
                
            </form>


                </div>
            </div>
        </div>
        <Backdrop
        loading={state.loading}
        />
    </div>
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
function handleChangeTitle(e:React.ChangeEvent<HTMLInputElement>) {
  setState(prev => ({...prev, title:e.target.value}));
}
function handleChangeMsg(e:React.ChangeEvent<HTMLTextAreaElement>) {
  setState(prev => ({...prev, msg:e.target.value}));
}

async function handleForm() {
  const {name, email, phone, msg, title} = state;
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
      try {
        setState(prev => ({...prev, loading:true}));
        const response = await fetch(`${import.meta.env.VITE_API_URL}/send-email`, {
        method:"POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body:JSON.stringify({name:name, email:email, phone:phone, title:title, message:msg}),
      });

        if (response.status === 200) {
          setState(prev => ({...prev, loading:false}));
          handleSetErr(-2, "เราได้รับอีเมล์จากคุณแล้วเราจะตอบกลับภายในเร็วๆนี้");
          setTimeout(() => {
            handleSetErr(-1, "");
          }, 10000);
          return;
        } else {
          setState(prev => ({...prev, loading:false}));
          handleSetErr(-3, "ดูเหมือนจะมีข้อผิดพลาดบางอย่างถ้าเป็นไปได้กรุณาติดต่อเราช่องทางอื่น");
          setTimeout(() => {
            handleSetErr(-1, "");
          }, 10000);
          return;
        }
      } catch (error) {
        setState(prev => ({...prev, loading:false}));
        handleSetErr(-3, "ดูเหมือนจะมีข้อผิดพลาดบางอย่างถ้าเป็นไปได้กรุณาติดต่อเราช่องทางอื่น");
        setTimeout(() => {
          handleSetErr(-1, "");
        }, 10000);
        return;  
      }
            
    }
}

};