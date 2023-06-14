import { DropdownNavbar } from "./DropdownNavbar";
import { optionPosition, optionService } from "../../Constant/NavbarText";


export const TextInsideNavbar = () => {

    return (
    <>
        <p className="hover:text-blue-600 cursor-pointer">หน้าแรก</p>
        <p className="hover:text-blue-600 cursor-pointer">เกี่ยวกับเรา</p>
        
        <DropdownNavbar
        title="บริการ"
        option={optionService}
        />
        
        <p>บทความ</p>
        <p>ร่วมงาน</p>
        <p>ตำแหน่ง</p>
        
        <DropdownNavbar
        title="ตำแหน่ง"
        option={optionPosition}
        />
        
        {/* <DropdownNavbar
        title="แพ็คเกจ"
        option={optionPackage}
        /> */}

        <p>ติดต่อเรา</p>
    </>
);
};