export default function About() {
    return (
      <div className="w-full flex flex-col justify-center bg-[#d3d3d3]  items-center pt-10 pb-10">
        <h1 className="text-[3.5rem] ">About ISEG</h1>
        <div className="bg-white w-[90%] md:w-[75%] flex flex-col text-[1rem] md:text-[1.2rem] p-5 gap-[2rem] border-[2px] border-black h-full">
          <p className="text-center">
            Founded in 1965 at Kolkata, the Indian Society of Engineering Geology
            has just completed forty seven years of its existence. It was
            inaugurated by Dr. K.L.Rao, the then Union Minister of Irrigation and
            Power on 15 October 1965 at Kolkata. Under the able guidance of Dr.
            D.N.Wadia, the Founder President of the Society and the doyen of
            Indian Geology, the Society commenced its journey with the aim to
            promote the study of Engineering Geology and allied sciences.
          </p>
          <p className="text-center">
            In fact, the Society, over the years, has effectively served as a
            formidable bridge between the geologists and engineers; has provided a
            vibrant platform for discussing and debating a host of geotechnical
            problems and state-of-the-art technologies; and projected the Nation's
            achievements in the field of Geotechniques before the world.
          </p>
          <p className="text-center">
            The Engineering and Geoscientific community from across the nation,
            representing almost all the leading organisations engaged in civil
            development projects, constitutes the membership base of the Society.
            In its forty one years of dedicated service to the nation, the Society
            has brought out its annual Journal of Engineering Geology,
            incorporating a host of scientific papers on various themes and has
            also published some prestigious volumes like the “Indian Monuments
            Through the Ages” and “Geotechnical Features of Major Dams in India”.
            The Society launched its bi-annual newsletter – the ISEG News – in
            March 2004, hailed as another milestone in the Society’s illustrious
            journey. Keeping pace with the trends of the times, the Society has
            launched this Website on 22 December 2006.
          </p>
          <p className="text-center">
            From time to time, the Society has been providing fora for technical
            deliberations on relevant topics and has organised a number of
            Symposia/ Seminars/ Workshops, e.g. at Dehradun (1981, 2002), Shillong
            (1985), Lucknow (1988, 1996, 1998, 2004), Kolkata (1990), Vadodara
            (1991), Bhopal (1999), etc. The Society also earned the rare
            distinction by hosting the four-yearly prestigious International
            Congress of the International Association of Engineering Geology
            (presently International Association for Engineering Geology and the
            Environment) at New Delhi in 1982, that was attended by large number
            of delegates from across the world.
          </p>
        </div>
      </div>
    );
  }
  
  export function Article() {
    return (
      <div>
        <div className="flex flex-col items-center gap-5 mb-5 mt-5 bg-[#d3d3d3] pb-5">
          <h1 className="text-[2rem] md:text-[3.5rem]">Article & By Laws</h1>
          <hr className="w-[40%] bg-black h-[3px]" />
          <p className="md:text-2xl text-md mt-4 md:w-max w-[90%]">
            INDIAN SOCIETY OF ENGINEERING GEOLOGY inaugrated its Articles Section
            way back in in the year 1965.
          </p>
        </div>
        <div className="w-full flex flex-col justify-center Aim & Objective  items-center pt-10 pb-10">
          <h1 className="text-[3.5rem] ">Aim & Objective</h1>
          <ul className="bg-white w-[90%] list-disc p-5 flex flex-col text-[1.2rem]  gap-[2rem] border-[2px] border-black h-full">
            <li>
              To promote the study of the subject of Engineering Geology and
              allied sciences and their application.
            </li>
            <li>
              To disseminate knowledge and provide a forum for discussion of all
              disciplines by holding periodical meetings, seminars and symposia.
            </li>
            <li>To publish a quarterly Journal of Engineering Geology.</li>
            <li>
              To accept any gift, donation or subscription towards the fulfillment
              of any of the objectives of the Society
            </li>
            <li>
              To aid or receive aid from any other Society, Association, Company,
              Firm, Corporation or person intended to promote any of the
              objectives of the Society or to subscribe to any fund or Society
              that the council may from time to time consider deserving.
            </li>
            <li>
              To pay out the assets and funds of the Society all costs, charges
              and expenses incidental to the formation and incorporation of the
              Society and to the promotion, management and conduct of the business
              and objectives of the Society. To do all such other acts and things
              as are incidental or conducive to the attainment of the above
              objectives or any of them.
            </li>
          </ul>
        </div>
      </div>
    );  
  }