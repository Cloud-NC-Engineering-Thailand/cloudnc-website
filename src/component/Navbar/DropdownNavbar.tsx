import Down from "@icon-park/react/lib/icons/Down";
import React from "react";
import "./DropDownService.css";
import Up from "@icon-park/react/lib/icons/Up";
import { Link, useNavigate } from "react-router-dom";
interface DropdownNavbar {
    option:{
        key:string;
        path:string;
    }[]
    title:string;
    currentIndex?:boolean;
    currentSubIndex?:number;
    link?:string | null;
}

export const DropdownNavbar: React.FC<DropdownNavbar> = ({option, title, currentIndex=false, currentSubIndex=-1, link=null}) => {

  const navigate = useNavigate();

    return (
    <>
   <div className="relative group">
  <button 
  className={`peer flex items-center gap-2 group-hover:text-blue-500 hover:text-blue-500 ${currentIndex && "text-blue-500"}`} 
  type="button"
  onClick={() => link ? navigate(link) : ""}
  >
    {title}
    <div className="group-hover:hidden block group-hover:text-blue-500">
        <Down theme="outline" size="24" /> 
    </div>
    <div className="group-hover:block hidden group-hover:text-blue-500">
        <Up theme="outline" size="24"  />
    </div>
    
  </button>

  <div
    id="dropdown"
    className="hidden peer-hover:flex hover:flex absolute left-0 z-10 top-7 bg-white rounded shadow-xl border pt-4 p-4 w-max"
  >
    <ul className="flex flex-col gap-4 py-1 text-slate-800 p-4">
      {option.map((item, i) => (
        <Link to={item.path} key={i} className={`hover:text-blue-500 cursor-pointer font-normal ${currentIndex && currentSubIndex === i && "text-blue-500"}`}>
          {item.key}
        </Link>
      ))}
    </ul>
  </div>
</div>

    </>
);
};