import React, { HTMLInputTypeAttribute } from "react";
import "./TextFieldGoogle.css";
interface TextFieldGoogleProps {
  value:any;
  onChange:(e:React.ChangeEvent<HTMLInputElement>) => void;
  type?:HTMLInputTypeAttribute;
  placeholder?:string;
  title:string;
}
  export const TextFieldGoogle: React.FC<TextFieldGoogleProps> = ({value, onChange, type="text", placeholder="", title}) => {
    return (
    <>  
  <div className="text-slate-500">

    <div className="flex gap-2 flex-col-reverse">       
      <input 
      type={type} 
      className=" bg-slate-100 pl-2 text-slate-600 outline-none w-full p-2 rounded-md border-2 focus:border-blue-500 input-class" 
      required
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      />
      <label htmlFor="inputfile" className="control-label ">{title}</label>

      {/* <span className="highlight"></span>
      <span className="bar"></span>
      <label className="text-up">{label}</label> */}
    </div>
    
</div>
    </>
    );
};