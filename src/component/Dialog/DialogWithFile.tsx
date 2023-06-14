import React, { useEffect, useState } from "react";
import "./Dialog.css";
import CloseSmall from "@icon-park/react/lib/icons/CloseSmall";
import { TextFieldGoogle } from "../TextFieldGoogle/TextFieldGoogle";
import { TextAreaGoogle } from "../TextFieldGoogle/TextAreaGoogle";
import AcceptEmail from "@icon-park/react/lib/icons/AcceptEmail";
import Upload from "@icon-park/react/lib/icons/Upload";
import { Backdrop } from "../Backdrop/Backdrop";

interface DialogProps {
    open:boolean;
    onClose:() => void;
    header:string;
    className?:string;
}

type DialogStateFileProps = {
  loading:boolean;
  name:string;
  email:string;
  phone:string;
  msg:string;
  open:boolean;
  files:File[]
  errIndex:number,
  errMsg:string;
  // title:string;
}

export const DialogWithFile: React.FC<DialogProps> = ({open, onClose, header, className="flex justify-center w-[95%] mx-auto  md:w-2/3 lg:w-1/3"}) => {

  const [state, setState] = useState<DialogStateFileProps>({
    loading:false,
    name:"",
    email:"",
    phone:"",
    msg:"",
    open:true,
    files:[],
    errIndex:-1,
    errMsg:"",
    // title:"",
  });

  const handleImageChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length !== 0){
      //@ts-ignore
      setState(prev=>({...prev,files:[...e.target.files]}));
    }
  };

  const handleRemoveImage = (index:number) => {
      const temp1 = state.files;
      temp1.splice(index,1);
      setState(prev => ({...prev,images:temp1}));
  };

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
                <div className="overflow-y-auto max-h-[70vh]">


                <form onSubmit={handleSubmit} className="flex flex-col gap-8 my-6" >
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

                  {/* <div className="flex flex-col gap-1">
                    <TextFieldGoogle
                    value={state.title}    
                    onChange={handleChangeTitle}
                    title="หัวเรื่อง"
                    />
                  {state.errIndex === 3 && <p className="text-red-500 text-sm">{state.errMsg}</p>}
                  </div> */}

                  <div className="flex flex-col gap-1">
                    <TextAreaGoogle
                    value={state.msg}    
                    onChange={handleChangeMsg}
                    title="ข้อความ"
                    />
                  {state.errIndex === 4 && <p className="text-red-500 text-sm">{state.errMsg}</p>}
                  </div>



                  <div className="max-w-xl">
                    <label
                        className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                        <span className="flex items-center space-x-2">
                            <Upload theme="outline" size="24" fill="#4a90e2"/>
                            <span className="font-medium text-gray-600">
                                อัพโหลด &nbsp;
                                <span className="text-blue-600 underline">Resume</span>
                            </span>
                        </span>
                        <input type="file"  accept="application/pdf" multiple={true} name="file_upload" className="hidden" onChange={handleImageChange}/>
                    </label>
                      {state.errIndex === 5 && <p className="text-red-500 text-sm">{state.errMsg}</p>}
                    <p className="text-slate-700 text-xs">*หมายเหตุไม่สามารถอัพโหลดไฟล์ที่มีขนาดเกิน 10mb ได้</p>
                  </div>


                
            {state.files.length !== 0 && 
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            ชื่อไฟล์
                        </th>
                        <th scope="col" className="px-6 py-3">
                            ประเภท
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {state.files.map((item, i) => (
                      <tr className="bg-white border-b" key={i}>
                          <th scope="row" className="truncate px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                              {item.name}
                          </th>
                          <td className="px-6 py-4 truncate">
                              {item.type}
                          </td>
                          <td className="px-6 py-4 text-right">
                              <button className="font-medium text-red-600 hover:text-red-500 hover:underline" onClick={() => handleRemoveImage(i)}>X</button>
                          </td>
                      </tr>
                    ))}
                </tbody>
            </table>
            </div>
            }

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
function handleChangeMsg(e:React.ChangeEvent<HTMLTextAreaElement>) {
  setState(prev => ({...prev, msg:e.target.value}));
}
// function handleChangeTitle(e:React.ChangeEvent<HTMLInputElement>) {
//   setState(prev => ({...prev, title:e.target.value}))
// }

async function handleForm() {
  handleSetErr(-1, "");

  const {name, email, phone, msg, files} = state;
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
    // else if(!title){
    //   handleSetErr(3, "คุณจำเป็นที่จะต้องใส่หัวเรื่องที่คุณจะคุยกับเรา")
    //   return
    // }
    else if(!msg){
      handleSetErr(4, "คุณจำเป็นที่จะต้องใส่ข้อความที่คุณจะคุยกับเรา");
      return;
    }
    else if(files.length === 0){
      handleSetErr(5, "คุณจำเป็นที่จะต้องอัพโหลดไฟล์ก่อน");
      return;
    }

    else {
      const {email, name, phone, msg, files} = state;
      let formData = new FormData();  
      
      let sumFileSize:number = 0; // 10MB
      const maxFileSize:number = 10 * 1024 * 1024; // 10MB
      
      for (let i = 0; i < files.length; i++) {
        sumFileSize += files[i].size;
        formData.append("files", files[i]);
      }
      console.log(sumFileSize);
      if(sumFileSize >= maxFileSize){
        handleSetErr(5, "ขนาดไฟล์ของคุณมีขนาดเกิน 10 mb");
        formData = new FormData();
        setState(prev => ({...prev, files:[]}));
        return;
      }
      
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      // formData.append("title", title)
      formData.append("message", msg);


    try {
      setState(prev => ({...prev, loading:true}));
      const response = await fetch(import.meta.env.VITE_API_URL + "/send-email-with-file", {
        method: "POST",
        body: formData,
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