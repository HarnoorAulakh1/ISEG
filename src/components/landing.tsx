import { NavLink } from "react-router-dom";

const data = [
  { text: "The Confernce", link: "/egcon" },
  { text: "The IAEG and the ISEG", link: "/egcon/about" },
  { text: "Key dates", link: "/egcon/dates" },
  { text: "Conference Themes", link: "/egcon/themes" },
  { text: "Keynote Lectures", link: "/egcon/keynote" },
  { text: "Abstracts and Full Papers", link: "/egcon/abstract" },
  { text: "Explore India", link: "/egcon/explore" },
  { text: "Registrations", link: "/egcon/register" },
  { text: "Sponsors", link: "/egcon/sponsor" },
  { text: "Accomodation and Transport", link: "/egcon/accomodation" },
  { text: "Organising Committee", link: "/egcon/committee" },
  { text: "Contact Us", link: "/egcon/contact" },
];

function Landing() {
  return (
    <div className="w-full">
      <div className=" flex flex-col justify-center h-max relative items-center py-[3.5rem]">
        <img src="/landing.png" alt="" />
        <div className=" flex flex-col justify-center absolute w-[50rem] items-center text-2xl p-10">
          <div className="bg-[#D9D9D9] h-[15rem] w-[50rem] opacity-40 absolute"></div>
          <div className="absolute  flex flex-col justify-center items-center">
            <p>Celebrating 60 years of ISEG</p>
            <p className="font-bold">EGCON 2025</p>
            <p>
              The International Conference on Engineering Geology and Geohazards
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 justify-center w-[90%] m-auto">
        <hr className="border-[1px]   bg-black border-black" />
        <div className="flex flex-row justify-start gap-10 items-center w-full ">
        <p className="text-3xl ">Announcements :</p>
        <button className="bg-[#f2f0f0] p-2 rounded-md">
          Registration ends in 10 days
        </button>
      </div>
        <hr className="border-[1px]  bg-black border-black" />
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
