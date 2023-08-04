import React from "react";
import { optionPosition, optionServiceMobile } from "../../Constant/NavbarText";
import { DropdownNavbarMobile } from "./DropdownNavbarMobile";
import Home from "@icon-park/react/lib/icons/Home";
import DocDetail from "@icon-park/react/lib/icons/DocDetail";
import DocSearchTwo from "@icon-park/react/lib/icons/DocSearchTwo";
import Photograph from "@icon-park/react/lib/icons/Photograph";
import Worker from "@icon-park/react/lib/icons/Worker";
import PhoneCall from "@icon-park/react/lib/icons/PhoneCall";
import Transfer from "@icon-park/react/lib/icons/Transfer";
import { Link } from "react-router-dom";

interface TextInsideNavbarMobileProps {
    currentIndex:number;
    currentSubIndex:number;
    handleCloseDrawer:() => void;
}

export const TextInsideNavbarMobile: React.FC<TextInsideNavbarMobileProps> = ({currentIndex=-1, currentSubIndex=-1, handleCloseDrawer}) => (



    <div className="flex flex-col text-lg  gap-8 text-slate-600">
        <div className={`flex gap-3 hover:text-blue-600 cursor-pointer border-b p-1 ${currentIndex === 0 && "text-blue-500"}`}>
            <Home theme="outline" size="22"  />
            <Link to="/" onClick={handleCloseDrawer} className="">หน้าแรก</Link>
        </div>

        <div className={`flex gap-3 hover:text-blue-600 cursor-pointer border-b p-1 ${currentIndex === 1 && "text-blue-500"}`}>
            <DocDetail theme="outline" size="22"  />
            <Link to="/aboutus" onClick={handleCloseDrawer} className="">เกี่ยวกับเรา</Link>
        </div>


        <DropdownNavbarMobile
        option={optionServiceMobile}
        title="บริการ"
        currentIndex={currentIndex === 2}
        currentSubIndex={currentSubIndex}
        handleCloseDrawer={handleCloseDrawer}

        >
            <Transfer theme="outline" size="22"/>
        </DropdownNavbarMobile>

        <div className={"flex gap-3 hover:text-blue-600 cursor-pointer border-b p-1"}>
            <DocSearchTwo theme="outline" size="22"  />
            <a  
            href={"https://blog.cloudnatician.com/"}  
            onClick={() => window.open("https://blog.cloudnatician.com/", "_blank")}  
            rel="noreferrer" 
            target="_blank"
            className="hover:text-blue-500"
            >บทความ</a>
        </div>

        <div className={`flex gap-3 hover:text-blue-600 cursor-pointer border-b p-1 ${currentIndex === 4 && "text-blue-500"}`}>
            <Photograph theme="outline" size="22"  />
            <Link to="/career" onClick={handleCloseDrawer} className="">ร่วมงาน</Link>
        </div>

        <DropdownNavbarMobile
        option={optionPosition}
        title="ตำแหน่ง"
        currentIndex={currentIndex === 5}
        currentSubIndex={currentSubIndex}
        handleCloseDrawer={handleCloseDrawer}
        >
            <Worker theme="outline" size="22"/>
        </DropdownNavbarMobile>

        <div 
        className={`flex gap-3 hover:text-blue-600 cursor-pointer border-b p-1 ${currentIndex === 6 && "text-blue-500"}`}>
            <PhoneCall theme="outline" size="24" />
            <Link to="/contact" onClick={handleCloseDrawer} className="">ติดต่อเรา</Link>
        </div>

    </div>
)