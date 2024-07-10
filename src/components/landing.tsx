import { BiSolidRightArrow } from "react-icons/bi";

const data=["The Confernce","About ISEG","Newsletters","Publications","Members","Contact Secretarait","Visit IAEG","Geographical Help","The Conference","The Conference","Geographical Help","The Conference","The Conference","Geographical Help","The Conference","The Conference"]

function Landing() {
  return (
    <div className="w-full">
      <div
        style={{ backgroundImage: `url(${"/bg.png"})` }}
        className="w-full flex flex-col justify-center items-center py-[3.5rem]"
      >
        <img src="/bg-top.png" alt="" />
      </div>
      <div className="w-[85%] mt-5 text-[1.2rem] bg-white m-auto border-[2px] border-black py-[2rem] px-[6rem] text-center flex flex-col gap-5">
        <p>
          The Executive Council of the ISEG and Team EGCON 2025 take pride in
          inviting you to join them at the celebrations and to the conference.
          You are assured of an unforgettable experience at EGCON 2025 and of a
          unique opportunity of interaction with committed experts from industry
          and academia from across the globe.
        </p>
          <p>
            The ISEG is privileged to have hosted IAEG events like the
            prestigious 4th International Congress of IAEG at New Delhi in 1982;
            8th Asian Regional Conference of IAEG at Bangalore in 2011; and
            Golden Jubilee International Conference EGNM at New Delhi in the
            year 2015.
          </p>
          <p>
            Being held at the India Habitat Centre, a state-of-the-art
            convention centre in New Delhi, EGCON 2025 offers excursions to
            iconic projects like Bhakra and Tehri Dams, and customised and group
            tours to explore and experience India.
          </p>
      </div>
      <div className="flex flex-col gap-2 items-center mt-10">
        <h1 className="text-[4rem] font-jh">Important Links</h1>
        <div className="flex flex-col flex-wrap h-[20rem] w-[80%] gap-10 mt-10">
            {data.map((item,index)=><Link key={index} text={item}/>)}
        </div>
      </div>
    </div>
  );
}

function Link({text}:{text:string}){
    return (
        <div className="flex flex-row gap-2 text-[1.5rem] items-center cursor-pointer">
        <BiSolidRightArrow className="text-[1.5rem]"/>
        <p>{text}</p>
        </div>
    )
}

export default Landing;
