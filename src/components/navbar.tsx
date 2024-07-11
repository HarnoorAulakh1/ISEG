import { IoIosSearch } from "react-icons/io";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const data = [
  "Home",
  "About ISEG",
  "Newsletters",
  "Publications",
  "Members",
  "Contact Secretarait",
  "Visit IAEG",
  "Geographical Help",
];

function Navbar() {
  const [open, set] = useState<boolean>(false);
  return (
    <div className="w-full h-max md:sticky top-0 bg-[#F2F2F2] pb-5">
      <div className="w-full bg-[#d3d3d3] gap-5 items-center flex flex-row justify-end md:pl-10 md:pr-10 pl-5 pr-5">
        <IoIosSearch className="cursor-pointer text-[1.2rem]" />
        <div className="flex flex-row gap-0">
          <p className="text-sm font-light border-x-[1px] cursor-pointer py-2 px-1 md:px-2 border-[#bdbcbc]">
            ISEG Golden Jublee
          </p>
          <p className="text-sm font-light  border-r-[1px] cursor-pointer py-2 px-1 md:px-2 border-[#bdbcbc]">
            ECON 2025
          </p>
        </div>

        <FaSquareFacebook className="text-[#606060] cursor-pointer text-[1.2rem]" />
        <FaLinkedin className="text-[#606060] cursor-pointer text-[1.2rem]" />
        <FaTwitter className="text-[#606060] cursor-pointer text-[1.2rem]" />
      </div>
      <div className="flex flex-row justify-center font-jh items-start px-2 md:items-center w-full py-5 md:py-10 gap-5">
        <img src="/logo2.png" alt="logo" className="md:w-[8rem] w-[4rem]" />
        <div className="felx flex-row justify-start">
          <p className="md:text-[4rem] text-[2rem] leading-tight font-lightbold">
            ISEG
          </p>
          <p>INDIAN SOCIETY OF ENGINEERING GEOLOGY</p>
          <p>(India National Group of IAGE)</p>
        </div>
        <div className="md:hidden flex flex-row justify-between items-center px-5">
          <IoMdMenu className="text-[1.5rem] cursor-pointer" onClick={()=>set((x)=>!x)}/>
        </div>
        <div className={`${open?"w-[10rem] p-4":"w-0"}  bg-[#1f1f1f] transition-all duration-200 z-[9999]  text-[#fafafa99] overflow-hidden flex flex-col absolute right-0 text-[1rem] gap-2`}>
          <RxCross2 className="cursor-pointer w-5" onClick={()=>set((x)=>!x)}/>
          
          {data.map((x) => (
            <>
              <p className=" font-light cursor-pointer">{x}</p>
              <hr className="border-[#6e6e6e]" />
            </>
          ))}
        </div>
      </div>
      <Links />
    </div>
  );
}

function Links() {
  return (
    <div className="md:flex md:flex-row justify-center hidden gap-10 text-[1rem]">
      <p className=" font-light cursor-pointer">Home</p>
      <p className=" font-light cursor-pointer">About ISEG</p>
      <p className="font-light cursor-pointer">Newsletters</p>
      <p className=" font-light cursor-pointer">Publications</p>
      <p className="font-light cursor-pointer">Members</p>
      <p className=" font-light cursor-pointer">Contact Secretarait</p>
      <p className=" font-light cursor-pointer">Visit IAEG</p>
      <p className=" font-light cursor-pointer">Geographical Help</p>
    </div>
  );
}

export default Navbar;
