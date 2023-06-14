import React from "react";
import "./TextFieldGoogle.css";
interface TextAreaGoogleProps {
  value:any;
  onChange:(e:React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?:string;
  title:string;
}

export const TextAreaGoogle: React.FC<TextAreaGoogleProps> = ({value, onChange, placeholder="", title="test"}) => {
    return (
    <>  
  <div className="text-slate-500">
  <div className="flex gap-2 flex-col-reverse">       
      
      <textarea 
      className=" bg-slate-100 pl-2 text-slate-600 outline-none w-full p-2 rounded-md border-2 focus:border-blue-500 input-class h-20" 
      required
      value={value}
      onChange={onChange}
      placeholder={placeholder}
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