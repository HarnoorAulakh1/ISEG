import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { NavLink } from "react-router-dom";

interface child {
  text: string;
  link: string;
}

const data = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "About ISEG",
    link: "/about",
    child: [
      {
        text: "ISEG",
        link: "/iseg",
      },
      {
        text: "Article",
        link: "/article",
      },
    ],
  },
  {
    text: "Newsletters",
    link: "/newsletters",
  },
  {
    text: "Publications",
    link: "/publications",
    child: [
      {
        text: "Journal",
        link: "/journal",
      },
      {
        text: "Special",
        link: "/special",
      },
      {
        text: "Other",
        link: "/other",
      },
    ],
  },
  {
    text: "Members",
    link: "/members",
    child: [
      {
        text: "ISEG Members",
        link: "/member-iseg",
      },
      {
        text: "IAEG Members",
        link: "/member-iaeg",
      },
      {
        text: "Membership",
        link: "/membership",
      },
    ],
  },
  {
    text: "Contact Secretariat",
    link: "/contact-secretariat",
  },
  {
    text: "Visit IAEG",
    link: "https://iaeg.info/",
  },
  {
    text: "Geographical Help",
    link: "/help",
  },
  {
    text: "Egcon 2025",
    link: "/egcon",
  },
];

function Navbar() {
  const [open, set] = useState<boolean>(false);
  return (
    <div className="w-full flex md:flex-row flex-col justify-center items-center gap-5 h-max md:sticky top-0 bg-white relative z-[99999] pb-2">
      <div className="flex flex-row justify-center items-center">
        <div className="flex flex-col">
          <div className="flex flex-row gap-1">
            <img src="/logo2.png" alt="logo" className="md:w-[5rem] w-[4rem]" />
            <h1 className="text-[3.5rem]">ISEG</h1>{" "}
          </div>
          <p className="text-[0.8rem]">
            INDIAN SOCIETY OF ENGINEERING GEOLOGY
            <br /> (India National Group of IAEG)
          </p>
        </div>
        <div
          onClick={() => set((x) => !x)}
          className="block md:hidden w-[2rem] overflow-hidden"
        >
          <IoMdMenu className="text-[2rem]" />
        </div>
      </div>

      <div
        className={`${
          open ? "h-[40rem] w-full p-4" : "h-0 w-0"
        }  bg-[#1f1f1f] transition-all duration-200 z-[9999]  text-[#fafafa99] overflow-hidden flex flex-col text-[1rem] gap-2`}
      >
        <RxCross2
          className="cursor-pointer w-5 mb-5"
          onClick={() => set((x) => !x)}
        />

        {data.map((x) => (
          <>
            {x.text === "Publications" ||
            x.text == "About ISEG" ||
            x.text == "Members" ? (
              <Link1 text={x.text} child={x.child} color="#1f1f1f" />
            ) : (
              <NavLink
                to={x.link}
                className={({ isActive }) => {
                  return (
                    `${isActive ? "underline font-semibold " : ""}` +
                    " font-light cursor-pointer"
                  );
                }}
              >
                {x.text}
              </NavLink>
            )}
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
    <div className="md:flex h-[1.5rem] md:flex-row  justify-center hidden gap-7 text-[1rem]">
      {data.map((x) =>
        x.text === "Publications" ||
        x.text == "About ISEG" ||
        x.text == "Members" ? (
          <Link1 text={x.text} child={x.child} color="#d3d3d3" />
        ) : (
          <NavLink
            to={x.link}
            className={({ isActive }) => {
              return (
                `${isActive ? "underline font-semibold " : ""}` +
                " font-light cursor-pointer"
              );
            }}
          >
            {x.text}
          </NavLink>
        )
      )}
    </div>
  );
}

function Link1({
  text,
  child,
  color,
}: {
  text: string;
  child: child[] | undefined;
  color: string;
}) {
  return (
    <div className={`font-light cursor-pointer group`}>
      <p className="flex flex-col md:items-center"> {text}</p>
      <div
        className={`flex flex-col relative z-[9999] px-1 bg-[${color}] gap-1 transition-all ease-linear duration-150 overflow-hidden group-hover:h-max  h-0 items-center rounded-xl`}
      >
        {child &&
          child.map((x) => (
            <NavLink
              to={x.link}
              className={({ isActive }) => {
                return (
                  `${isActive ? "underline font-semibold " : ""}` +
                  " font-light cursor-pointer"
                );
              }}
            >
              {x.text}
            </NavLink>
          ))}
      </div>
    </div>
  );
}

export default Navbar;
