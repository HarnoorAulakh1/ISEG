import { IoIosSearch } from "react-icons/io";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const data = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "About ISEG",
    link: "/about",
  },
  {
    text: "Newsletters",
    link: "/newsletters",
  },
  {
    text: "Publications",
    link: "/publications",
  },
  {
    text: "Members",
    link: "/members",
  },
  {
    text: "Contact Secretarait",
    link: "/contact-secretarait",
  },
  {
    text: "Visit IAEG",
    link: "/visit-iaeg",
  },
  {
    text: "Geographical Help",
    link: "/geographical-help",
  },
];

function Navbar() {
  const [open, set] = useState<boolean>(false);
  return (
    <div className="w-full h-max md:sticky top-0 bg-[#F2F2F2] pb-5">
      <div className="w-full md:flex hidden bg-[#d3d3d3] gap-5 items-center flex-row justify-end md:pl-10 md:pr-10 pl-5 pr-5">
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
      <div className="flex flex-row justify-center text-[0.8rem] font-jh items-start px-2 md:items-center w-full py-5 md:py-10 gap-5">
        <img src="/logo2.png" alt="logo" className="md:w-[8rem] w-[4rem]" />
        <div className="felx flex-row justify-start">
          <p className="md:text-[4rem] text-[2rem] leading-tight font-lightbold">
            ISEG
          </p>
          <p>INDIAN SOCIETY OF ENGINEERING GEOLOGY</p>
          <p>(India National Group of IAGE)</p>
        </div>
        <div className="md:hidden flex flex-row justify-between items-center px-5">
          <IoMdMenu
            className="text-[1.5rem] cursor-pointer"
            onClick={() => set((x) => !x)}
          />
        </div>
      </div>
      <div
        className={`${
          open ? "h-[40rem] p-4" : "h-0"
        }  bg-[#1f1f1f] transition-all w-full duration-200 z-[9999]  text-[#fafafa99] overflow-hidden flex flex-col text-[1rem] gap-2`}
      >
        <RxCross2
          className="cursor-pointer w-5 mb-5"
          onClick={() => set((x) => !x)}
        />

        {data.map((x) => (
          <>
            <NavLink className=" font-light cursor-pointer" to={x.link}>{x.text}</NavLink>
            <hr className="border-[#6e6e6e]" />
          </>
        ))}
        <div className="flex gap-5 flex-row mt-[2rem]">
          <input type="text" className="bg-[#171717] text-grey h-[3rem]" />
          <FaLinkedin className="text-[#606060] cursor-pointer text-[2rem]" />
          <FaTwitter className="text-[#606060] cursor-pointer text-[2rem]" />
        </div>
      </div>
      <Links />
    </div>
  );
}

function Links() {
  return (
    <div className="md:flex md:flex-row justify-center hidden gap-10 text-[1rem]">
      {data.map((x) => (
        <NavLink to={x.link} className={({isActive})=>{return `${isActive?"underline font-bold":""}`+" font-light cursor-pointer"}}>
          {x.text}
        </NavLink>
      ))}
    </div>
  );
}

export default Navbar;
