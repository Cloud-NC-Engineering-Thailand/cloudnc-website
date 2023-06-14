import React, { useState } from "react";
import Down from "@icon-park/react/lib/icons/Down";
import Up from "@icon-park/react/lib/icons/Up";
import { Link } from "react-router-dom";

interface DropdownNavbarMobileProps {
    option:{
        key:string;
        path:string;
    }[]
    title:string;
    children:JSX.Element;
    currentIndex?:boolean;
    currentSubIndex?:number;
    handleCloseDrawer:() => void;

}

export const DropdownNavbarMobile: React.FC<DropdownNavbarMobileProps> = ({option, title, children, currentIndex=false, currentSubIndex=-1, handleCloseDrawer}) => {

    const [open,setOpen] = useState<boolean>(false);

    return (
    <>
    <div className="">
        <button 
        className={`flex items-center gap-2   ${open ? "border-0" : "text-slate-600 border-b w-full"} ${currentIndex && "text-blue-500"}`} 
        type="button"
        onClick={() => setOpen(prev => !prev)}
        >
            <div className="flex gap-3 hover:text-blue-500 cursor-pointer p-1">

                <div className={`${open ? "" : "text-slate-600"}`}>
                    {children}
                </div>
                <p className={`${open ? "" : "text-slate-600"}`}>{title}</p>
            </div>
            {open ? 
            
            <div className="block ">
                <Down theme="outline" size="24" /> 
            </div>
            :
            <div className="block ">
                <Up theme="outline" size="24"  />
            </div>
        }   
            
        </button>

  <div
    className={`${open ? "block animate-slideup" : "hidden"} transition-transform z-10 rounded   w-max border-l border-slate-300`}
  >
    <ul className="flex flex-col gap-4 py-1  p-4">
      {option.map((item, i) => (
        <Link onClick={handleCloseDrawer} to={item.path} key={i} className={`hover:text-blue-500 cursor-pointer font-normal ${currentIndex && currentSubIndex === i && "text-blue-500"}`}>
          {item.key}
       </Link>
      ))}
    </ul>
  </div>
</div>
    </>
);
};