import { IoIosSearch } from "react-icons/io";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black flex flex-col gap-2 text-white text-center p-8">
      <h1>
        Copyright © Indian Society of Engineering Geology, all rights reserved.
      </h1>
      <div className="w-full md:flex hidden  gap-5 items-center flex-row justify-center md:pl-10 md:pr-10 pl-5 pr-5">
        <IoIosSearch className="cursor-pointer text-[1.2rem]" />
        <div className="flex flex-row gap-0">
          <p className="text-sm font-light border-x-[1px] cursor-pointer py-2 px-1 md:px-2 border-[#bdbcbc]">
            ISEG Golden Jublee
          </p>
          <p className="text-sm font-light  border-r-[1px] cursor-pointer py-2 px-1 md:px-2 border-[#bdbcbc]">
            EGCON 2025
          </p>
        </div>

        <FaSquareFacebook className="text-[#606060] cursor-pointer text-[1.2rem]" />
        <FaLinkedin className="text-[#606060] cursor-pointer text-[1.2rem]" />
        <FaTwitter className="text-[#606060] cursor-pointer text-[1.2rem]" />
      </div>
    </footer>
  );
}

export default Footer;
