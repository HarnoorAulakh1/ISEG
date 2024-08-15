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
    text: "Contact-Us",
    link: "/contact-secretariat",
  },
  {
    text: "Geotechnical Help",
    link: "/help",
  },
  {
    text: "Events",
    link: "/egcon",
    child: [
      {
        text: "EGCON 2025",
        link: "/egcon",
      },
      {
        text: "EGCON 2023",
        link: "/egcon23",
      },
      {
        text: "EGCON 2022",
        link: "/egcon22",
      },
      {
        text: "ISEG Golden Jubilee",
        link: "/iseg-gj",
      },
    ]
  },
  {
    text: "Visit IAEG",
    link: "https://iaeg.info/",
  },
];

function Navbar() {
  const [open, set] = useState<boolean>(false);
  return (
    <div className="w-full flex xl:flex-row flex-col justify-center items-center gap-5 h-max xl:sticky top-0 bg-white relative z-[99999] pb-2">
      <div className="flex flex-row xl:w-max w-[80%] items-center justify-between">
        <div className="flex flex-col items-start">
          <div className="flex flex-row items-center gap-3 pt-3">
            <img src="/logo2.png" alt="logo" className="md:w-[5rem] w-[4rem]" />
            <div className="flex flex-col justify-center">
              <h1 className="text-[1.5rem] font-custom font-bold">ISEG</h1>
              <p className="text-[0.8rem] font-custom leading-tight mt-1">
                INDIAN SOCIETY OF ENGINEERING GEOLOGY
                <br />
                (India National Group of IAEG)
              </p>
            </div>
          </div>
        </div>

        <div
          onClick={() => set((x) => !x)}
          className="block xl:hidden w-[2rem] overflow-hidden"
        >
          <IoMdMenu className="text-[2rem]" />
        </div>
      </div>

      <div
        className={`${open ? "h-[40rem] w-full p-4" : "h-0 w-0"
          }  bg-[#1f1f1f] transition-all duration-200 z-[9999]  text-[#1f1f1f] overflow-hidden flex flex-col text-[1rem] gap-2`}
      >
        <RxCross2
          className="cursor-pointer w-5 mb-5"
          onClick={() => set((x) => !x)}
        />

        {data.map((x) => (
          <>
            {x.text === "Publications" ||
              x.text == "About ISEG" ||
              x.text == "Members" ||
              x.text == "Events" ? (
              <Link1 text={x.text} child={x.child} color="#000" />
            ) : (
              <NavLink
                to={x.link}
                className={({ isActive }) => {
                  return (
                    `${isActive ? "underline font-semibold " : ""}` +
                    " cursor-pointer block px-1 py-2 text-black"
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
    <div className="relative group">
      <p className="flex flex-col md:items-center py-2 text-black">{text}</p>
      <div
        className="absolute left-1/2 mt-3 transform -translate-x-1/2 top-full w-[12rem] bg-black py-2 opacity-0 group-hover:opacity-100 transition-all duration-150 ease-in-out shadow-lg rounded-lg z-50"
      >

        {child &&
          child.map((x) => (
            <NavLink
              to={x.link}
              className={({ isActive }) => {
                return (
                  `${isActive ? "underline font-semibold " : ""}` +
                  " block px-4 py-2 text-center text-white hover:bg-gray-700 transition-colors duration-200"
                );
              }}
              key={x.text}
            >
              {x.text}
            </NavLink>
          ))}
      </div>
    </div>
  );
}

function Links() {
  return (
    <div className="xl:flex h-[1.5rem] xl:flex-row justify-center hidden gap-8 text-[1rem]">
      {data.map((x) =>
        x.child ? (
          <Link1 text={x.text} child={x.child} color="#000" key={x.text} />
        ) : (
          <NavLink
            to={x.link}
            className={({ isActive }) => {
              return (
                `${isActive ? "underline font-semibold " : ""}` +
                "cursor-pointer block px-2 py-2 text-black"
              );
            }}
            key={x.text}
          >
            {x.text}
          </NavLink>
        )
      )}
    </div>
  );
}

export default Navbar;
