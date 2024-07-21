import { NavLink } from "react-router-dom";

const data = [
  { text: "The Confernce", link: "/egcon" },
  { text: "About ISEG", link: "/iseg" },
  { text: "Newsletters", link: "/newsletters" },
  { text: "Publications", link: "/journal" },
  { text: "Members", link: "/member-iseg" },
  { text: "Contact Secretarait", link: "contact-secretariat" },
  { text: "Visit IAEG", link: "https://www.iaeg.info/" },
  { text: "Geographical Help", link: "/help" },
];

function Landing() {
  return (
    <div className="w-full">
      <div
        style={{ backgroundImage: `url(${"/bg.png"})` }}
        className=" flex flex-col justify-center items-center py-[3.5rem]"
      >
        <img src="/bg-top.png" alt="" />
      </div>
      <div className="md:w-[85%] w-[95%] mt-5 text-[1rem] text-justify md:text-[1.5rem] bg-white m-auto border-[2px] border-black py-[2rem] md:px-[6rem] px-[1rem] flex flex-col gap-5">
        <p>
          The Executive Council of the ISEG and Team EGCON 2025 take pride in
          inviting you to join them at the celebrations and to the conference.
          You are assured of an unforgettable experience at EGCON 2025 and of a
          unique opportunity of interaction with committed experts from industry
          and academia from across the globe.
        </p>
        <p>
          The ISEG is privileged to have hosted IAEG events like the prestigious
          4th International Congress of IAEG at New Delhi in 1982; 8th Asian
          Regional Conference of IAEG at Bangalore in 2011; and Golden Jubilee
          International Conference EGNM at New Delhi in the year 2015.
        </p>
        <p>
          Being held at the India Habitat Centre, a state-of-the-art convention
          centre in New Delhi, EGCON 2025 offers excursions to iconic projects
          like Bhakra and Tehri Dams, and customised and group tours to explore
          and experience India.
        </p>
      </div>
      <div className="flex flex-col gap-2 items-center mt-10 overflow-hidden mb-5">
        <h1 className="md:text-[4rem] text-[2rem] font-jh">Important Links</h1>
        <div className="grid md:grid-cols-2 gap-2  row-start-auto  h-max w-[80%] md:w-[80%]  mt-10">
          {data.map((x) => (
            <Link key={x.link} text={x.text} link={x.link} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Link({ text, link }: { text: string; link: string }) {
  return (
    <NavLink
      to={link}
      className="flex border-[1px] justify-center font-extralight p-2  bg-[#d3d3d3] rounded-xl flex-row gap-2 text-[0.7rem] md:text-[1.5rem] items-center cursor-pointer"
    >
      {text}
    </NavLink>
  );
}

export default Landing;
