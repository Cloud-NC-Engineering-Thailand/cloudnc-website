import React, { HTMLInputTypeAttribute } from "react";

interface InputProps {
    icon?:React.ReactNode;
    value:any;
    onChange:(e:React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?:string;
    type?:HTMLInputTypeAttribute;
    className?:string;
}

const Input: React.FC<InputProps> = ({icon, value, onChange, placeholder = "", type = "type", className=""}) => {
    return (
    <>
     <div className="relative flex w-full flex-wrap ">
        {icon && 
            <span className="z-10 h-full leading-snug font-normal text-center text-slate-300 absolute bg-transparent rounded text-base w-8 pl-3 py-3">
            {/* <CategoryManagement theme="outline" size="24" fill="#4a90e2" className="self-center -z-0"/> */}
            {icon}
             </span>
        }
        <input
            type={type}
            placeholder={placeholder}
            className={`${className} ${icon && "pl-12"} border-0 px-3 py-3 placeholder-slate-400 text-slate-600 relative bg-slate-100 rounded text-sm shadow outline-none focus:outline-none focus:ring w-full `}
            value={value}
            onChange={onChange}
            />
        </div>
    </>
);
};

export default Input;