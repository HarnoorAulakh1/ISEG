const data = [
  "Auden Volume",
  "Koyna Earthquake Volume",
  "1969 Volume",
  "Tunneling Volume",
  "Powerhouse Volume",
  "Foundation Volume",
  "Landslide Volume",
  "Three Decades of Indian Engineering Geologu Volume (Abstracts only)",
  "Geotechnical Features of Major Dams in India",
  "1981 Souvenier",
  "Indian Monuments through the Ages",
  "1992 Auden Reminiscences Volume",
  "1996 Souvenir",
  "Keynote Addresses",
  "Pre-Event Publication on Natural Hazard",
];

const data2 = [
  "Baglihar",
  "Baira-Siul",
  "Balimala",
  "Bansagar",
  "Baspa",
  "Beas Satluj Lank",
  "Bhaba",
  "Bhakra",
  "Chamera",
  "Loktak",
  "Malpa Landslide",
  "Damodar Valley",
  "Dihang",
  "Doyang",
  "Dul Hasti",
  "Giri",
  "Idukki",
  "Indravati",
  "Jaldhaka",
  "Kadana",
  "Kopili",
  "Koyna",
  "Maneri Bhali",
  "Nagarjuna Sagar",
  "Narmada Sagar",

  "Nathpa Jhakri",
  "Nilgiri Hills",
  "Pench",
  "Pong",
  "Pykara",
  "Ramganga",
  "Rammam",
  "Rana Pratap Sagar",
  "Ranjit Sagar (Thein)",
  "Salal",
  "Sardar Sarovar",
  "Srinagar",
  "Srisailam",
  "Subarnarekha",
  "Supa",
  "Tehri",
  "Tenughat",
  "Thein (Ranjit Sagar)",
  "Tista",
  "Ukai",
  "Umiam",
  "Upper Kolab",
  "Yamuna Hydel",
  "Yeleru",
];

export function Journal() {
  const data = [];
  for (let i = 0; i < 36; i++) data.push(i);
  return (
    <div>
      <div className="flex flex-col items-center gap-5 mb-5 mt-5 bg-[#d3d3d3] pb-5">
        <h1 className="md:text-[3.5rem] text-[2rem]">Journal of ISEG</h1>
        <hr className="w-[40%] bg-black h-[3px]" />
        <p className="w-[85%] text-2xl">
          It is brought out on annual basis and carries papers on Engineering
          Geology, Geohazards (Seismology, Landslides, etc) and Geo-environment.
          Forty nine volumes of the Journal have been published till the Year
          2011, the latest issue being the Volume XXXVII released in the same
          year. Presently preparations for releasing Volume XXXVIII for the Year
          2012 are in progress. Although there is a great variety in topics of
          discussion, but, case studies on various aspects of major Indian river
          valley projects are in overwhelming majority. Some of the major civil
          structures in India that have been addressed include the following.
        </p>
      </div>
      <div className="md:w-[80%] w-[90%] flex flex-col m-auto gap-[2rem]">
        <h1 className="text-[3rem]">Addresses</h1>
        <div className="grid grid-cols-4 text-[1.5rem] md:text-[2rem]  gap-[2rem] md:gap-[2rem]  ">
          {data2.map((x) => (
            <div className="flex flex-row items-center gap-1">
              <div className="rounded-[2rem] bg-black w-1 h-1"></div>
              <p className="text-[#9C9999] underline font-light">{x}</p>
            </div>
          ))}
        </div>
        <div className="mt-[5rem] mb-5">
          <p className="text-2xl">
            ISEG is currently working on introduction of an online system of
            submission of technical papers for its Journal of Engineering
            Geology; the same will be operational soon.
          </p>
          <br />
          <p className="text-2xl">
            For Submission of papers please visit Journal of Engineering Geology
          </p>
        </div>
      </div>
    </div>
  );
}

export function Special() {
  return (
    <div>
      <div className="flex flex-col items-center gap-5 mb-5 mt-5 bg-[#d3d3d3] pb-5">
        <h1 className="text-[2rem] md:text-[3.5rem]">
          ISEG Special Publication
        </h1>
        <hr className="w-[40%] bg-black h-[3px]" />
        <p className="text-xl mt-4 md:w-max w-[90%]">
          Periodically, the ISEG brings out special publications. Following is
          the list of Special Publications released so far
        </p>
      </div>
      <div className="flex flex-col gap-5 w-[80%] m-auto justify-start text-xl mb-5">
        {data.map((x) => (
          <div className="flex flex-row items-center gap-1 cursor-pointer">
            <div className="rounded-[2rem] bg-[#9C9999] w-1 h-1"></div>
            <p className="text-[#9C9999] underline font-light">{x}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Other() {
  return (
    <div className="bg-[#d3d3d3] relative z-[10]">
      <div className="flex flex-col items-center gap-5 mb-5 mt-5  pb-5">
        <h1 className="text-[2rem] md:text-[3.5rem]">Other Publications</h1>
        <hr className="w-[40%] bg-black h-[3px]" />
      </div>
      <div className="flex flex-col gap-[3rem] pb-[5rem]">
        <div className="w-[85%] relative m-auto text-2xl flex flex-col gap-5 ">
          <div className="flex flex-row items-center gap-2 cursor-pointer mb-5">
            <div className="rounded-[2rem] bg-black w-2 h-2"></div>
            <p>ICUST, 2011</p>
          </div>
          <p>
            The Proceedings of the 4th International Congress of the
            International Association of Engineering Geology (presently
            International Association for Engineering Geology and the
            Environment), hosted by the Society in 1982 at New Delhi, were
            published in eight volumes. In all, -------papers, running in
            ------- pages, are included in this publication.
          </p>
          <br />
          <a
            className="text-[#7BA0DB] absolute right-0 bottom-0"
            href="https://isegindia.org/pdfs/iaeg_congress%201982_contents.pdf"
          >
            more
          </a>
        </div>
        <div className="w-[85%] m-auto text-2xl flex flex-col gap-5">
          <div className="flex flex-row items-center gap-2 cursor-pointer mb-5">
            <div className="rounded-[2rem] bg-black w-2 h-2"></div>
            <p>4th International Conference of IAEG 1982</p>
          </div>
          <p>
            International Association of Engineering Geology and the Environment
            (IAEG), the Indian Society of Engineering Geology (ISEG) and the
            National Institute of Rock Mechanics (NIRM), together have organised
            an International Conference on “Underground Space Technology” during
            17-19 January, 2011. This event was held concurrently with the “8th
            Asian Regional Conference of IAEG”
          </p>
          <p>
            The main theme of the Conference was underground space technology in
            mining engineering, civil engineering and infrastructure development
            sectors. The Conference will address the problems and challenges
            posed in excavation of underground openings in rock. The target
            audiences were engineering geologists, mining engineers, civil
            engineers and all those involved with rock engineering.
          </p>
        </div>
      </div>
    </div>
  );
}
