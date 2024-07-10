import { IoIosSearch } from "react-icons/io";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Navbar() {
  return (
    <div className="w-full h-max sticky top-0 bg-[#F2F2F2] pb-5">
      <div className="w-full bg-[#d3d3d3] gap-5 items-center flex flex-row justify-end pr-10">
        <IoIosSearch className="cursor-pointer text-[1.2rem]"/>
        <div className="flex flex-row gap-0">
          <p className="text-sm font-light border-x-[1px] cursor-pointer py-2 px-2 border-[#bdbcbc]">
            ISEG Golden Jublee
          </p>
          <p className="text-sm font-light  border-r-[1px] cursor-pointer py-2 px-2  border-[#bdbcbc]">
            ECON 2025
          </p>
        </div>

        <FaSquareFacebook className="text-[#606060] cursor-pointer text-[1.2rem]" />
        <FaLinkedin className="text-[#606060] cursor-pointer text-[1.2rem]" />
        <FaTwitter className="text-[#606060] cursor-pointer text-[1.2rem]" />
      </div>
      <div className="flex flex-row justify-center font-jh items-center w-full py-10 gap-5">
        <img src="/logo2.png" alt="logo" className="w-[8rem]" />
        <div className="felx flex-row justify-start">
            <p className="text-[4rem] leading-tight font-lightbold">ISEG</p>
            <p>INDIAN SOCIETY OF ENGINEERING GEOLOGY</p>
            <p>(India National Group of IAGE)</p>
        </div>
      </div>
      <Links/>
    </div>
  );
}

function Links() {
  return (
    <div className="flex flex-row justify-center gap-10 text-[1rem]">
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
