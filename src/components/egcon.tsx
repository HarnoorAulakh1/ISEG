import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Egcon() {
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    if (id) {
      const element = document.getElementById(id);
      if (element)
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
    }
  }, [id]);

  return (
    <div className="bg-[#d4d4d4] pb-5">
      <div className="flex flex-col items-center m-auto justify-center w-[90%]  gap-2 mb-5 mt-5">
        <h1 className="text-[2rem] md:text-[3.5rem]">The Conference</h1>
        <hr className="w-[40%] bg-black h-[3px]" />
      </div>
      <div className="bg-white  mb-5 flex flex-col justify-center items-center m-auto w-[90%] overflow-hidden list-disc p-[1rem] md:p-[3rem] text-xl md:text-[1.5rem]   gap-[2rem] border-[2px] border-black h-full">
        <p>
          <p className="md:text-[1.5rem] text-[1rem] font-extralight">
            On its Diamond Jubilee anniversary, Indian Society of Engineering
            Geology (ISEG), the Indian National Group of International
            Association for Engineering Geology and the Environment (IAEG),
            announces EGCON 2025 - International Conference on Engineering
            Geology and Geohazards at New Delhi on 01-03 December 2025.
            Organised in collaboration with the IAEG and Geological Survey of
            India (GSI), the conference provides a vibrant platform for
            exchanging state-of-the-art development in the fields of engineering
            geology, geotechnical engineering, and geohazards. We, the Executive
            Council of the ISEG and Team EGCON 2025 take pride in inviting you
            to join us at the celebrations and to the conference. We assure you
            of an unforgettable experience at EGCON 2025 and of a unique
            opportunity of interaction with committed experts from industry and
            academia from across the globe. The international guests are invited
            to explore a developed and Viksit new India and experience its
            traditional and warm hospitality.
          </p>
        </p>
      </div>
      <div
        id="about"
        className="flex flex-col items-center m-auto justify-center w-[90%]  gap-2 mb-5 mt-5"
      >
        <h1 className="text-[2rem] md:text-[3.5rem]">The IAEG with the ISEG</h1>
        <hr className="w-[40%] bg-black h-[3px]" />
      </div>
      <div className="bg-white  mb-5 flex flex-col justify-center items-center m-auto w-[90%] overflow-hidden list-disc p-[1rem] md:p-[3rem] text-xl md:text-[1.5rem]   gap-[2rem] border-[2px] border-black h-full">
        <p>
          <p className="md:text-[1.5rem] text-[1rem] font-extralight">
            It was at the XXII IGC (International Geological Congress) at New
            Delhi in December 1964 that the engineering geological fraternity
            attending the IGC gave due credence to the global surge in
            engineering geological activities and initiated the proposal of a
            Commission or an International Organisation in Engineering Geology.
            A group of “Eight” with Mr A. Shadmon of Israel as the main
            initiator, and leading Indian engineering geologists like Shri M.S.
            Balasundaram and V.S. Krishnaswamy of the GSI onboard, took the
            initiative that in due course led to the creation of the
            International Association for Engineering Geology. Affiliated to the
            International Union of Geological Sciences (IUGS), and associated
            with the Federation of International Geo-engineering Societies
            (FedIGS), the IAEG is a renowned international organization. The
            IAEG unites the national engineering geological organisations and
            keeps serving the global society with iconic features like the
            Bulletin of Engineering Geology and the Environment, four-yearly
            International Congresses, frequent Regional Engineering Geological
            Conferences, etc The ISEG was inaugurated on 15 October 1965 in the
            premises of the GSI at the erstwhile Calcutta by an eminent engineer
            and the then Union Minister for Irrigation and Power Dr KL Rao.
            Following the mandate contained in the Articles and Bylaws of the
            Society, the torch bearers donned the mantle of the serious
            crusaders and proactively engaged themselves in the dissemination of
            geoscientific information through publications and deliberations at
            various events. The ISEG carries on its rich heritage and keeps
            serving as a formidable bridge between geologists and engineers;
            provides vibrant platform for discussions and debate on a host of
            geotechnical problems and state-of-the-art technologies; and
            projects the nation's achievements in the field of geotechniques and
            allied expertise. The ISEG takes pride in having hosted IAEG
            sponsored events, viz. the prestigious 4th International Congress of
            IAEG at New Delhi in 1982; 8th Asian Regional Conference of IAEG at
            Bangalore in 2011; and Golden Jubilee International Conference EGNM
            at New Delhi in the year 2015. The proposed EGCON 2025 is a
            testimony to the ISEG's efforts in keep bringing the international
            engineering geological fraternity together for vibrant deliberations
            on the development in the industry and academia.
          </p>
        </p>
      </div>
      <div
        className="flex flex-col items-center m-auto justify-center w-[90%]  gap-2 mb-5 mt-5"
        id="dates"
      >
        <h1 className="text-[2rem] md:text-[3.5rem]">Key Dates</h1>
        <hr className="w-[40%] bg-black h-[3px]" />
      </div>
      <div className="grid grid-cols-4 parent gap-1 bg-white w-[95%] m-auto border-[1px] p-5 border-black">
        <p className="col-span-1">01 August 2024</p>
        <p className="col-span-3">
          Commencement of submission of Extended Abstract
        </p>
        <p className="col-span-1">01 January 2025</p>
        <p className="col-span-3">
          Commencement of submission of Full-length paper
        </p>
        <p className="col-span-1">01 August 2025</p>
        <p className="col-span-3">Delegate Registration opens</p>
        <p className="col-span-1">29 November 2025</p>
        <p className="col-span-3">IAEG meetings</p>
        <p className="col-span-1">30 November 2025</p>
        <p className="col-span-3">
          IAEG/ YEG meetings; Pre-Conference Delhi Tour (complimentary)
        </p>
        <p className="col-span-1">01 December 2025</p>
        <p className="col-span-3">
          Conference Day-1: Inauguration, Keynote Lectures, Parallel Sessions
        </p>

        <p className="col-span-1">02 December 2025</p>
        <p className="col-span-3">
          Conference Day-2: Parallel Sessions, Cultural Evening
        </p>
        <p className="col-span-1">03 December 2025</p>
        <p className="col-span-3">
          Conference Day-3: Parallel Sessions, Valedictory Function
        </p>
        <p className="col-span-1">04 December 2025</p>
        <p className="col-span-3">
          Commencement of post-Conference Excursions and Group & Customised
          Tours
        </p>
      </div>
      <div
        id="themes"
        className="flex flex-col items-center m-auto justify-center w-[90%]  gap-2 mb-5 mt-5"
      >
        <h1 className="text-[2rem] md:text-[3.5rem]">Conference Themes</h1>
        <hr className="w-[40%] bg-black h-[3px]" />
      </div>
      <ul className="list-disc w-max m-auto p-10 text-xl bg-white">
        <li>Engineering geological mapping</li>
        <li>Rock mass characterization</li>
        <li>Engineering geological model</li>
        <li>Field and laboratory investigations</li>
        <li>Infrastructure projects</li>
        <li>Construction methodologies</li>
        <li>Rehabilitation methodologies</li>
        <li>Geological hazards</li>
        <li>Environmental studies</li>
        <li>Contract management</li>
      </ul>

      <div
        id="keynote"
        className="flex flex-col items-center m-auto justify-center w-[90%]  gap-2 mb-5 mt-5"
      >
        <h1 className="text-[2rem] md:text-[3.5rem]">Keynote Lectures</h1>
        <hr className="w-[40%] bg-black h-[3px]" />
      </div>
      <div className="bg-white  mb-5 flex flex-col justify-center items-center m-auto w-[90%] overflow-hidden list-disc p-[1rem] md:p-[3rem] text-xl md:text-[1.5rem]   gap-[2rem] border-[2px] border-black h-full">
        <p>
          It is proposed to dedicate the first day of the Conference to the
          Keynote Lectures that would invite full attention of the delegates
          attending the EGCON 2025. If required, a few keynote lectures shall be
          accommodated between parallel sessions. The list of Keynote Speakers
          shall be announced in the subsequent releases from the Organising
          Committee.
        </p>
      </div>
      <div
        id="abstract"
        className="flex flex-col items-center m-auto justify-center w-[90%]  gap-2 mb-5 mt-5"
      >
        <h1 className="text-[2rem] md:text-[3.5rem]">
          Abstracts and Full Papers
        </h1>
        <hr className="w-[40%] bg-black h-[3px]" />
      </div>
      <div className="bg-white  mb-5 flex flex-col justify-center items-center m-auto w-[90%] overflow-hidden list-disc p-[1rem] md:p-[3rem] text-xl md:text-[1.5rem]   gap-[2rem] border-[2px] border-black h-full">
        <p>
          The invitation for extended abstracts shall be rolled out on 01 August
          2024. The abstract submission shall be online. The authors of accepted
          abstracts shall have the opportunity to make oral /poster
          presentations during the Conference. The authors of accepted abstracts
          shall be invited to submit full papers starting 01 January 2025. While
          the extended abstracts shall be published and released during the
          conference, the full papers shall be peer reviewed and published in a
          post-conference special publication.
        </p>
      </div>
      <div className="flex flex-col items-center m-auto justify-center w-[90%]  gap-2 mb-5 mt-5">
        <h1 className="text-[2rem] md:text-[3.5rem]">The Venue</h1>
        <hr className="w-[40%] bg-black h-[3px]" />
      </div>
      <div className="bg-white  mb-5 flex flex-col justify-center items-center m-auto w-[90%] overflow-hidden list-disc p-[1rem] md:p-[3rem] text-xl md:text-[1.5rem]   gap-[2rem] border-[2px] border-black h-full">
        <p>
          The EGCON 2025 shall be held at the India Habitat Centre, a
          prestigious convention center in New Delhi. The campus weaves in a
          unique interplay of institutions, supporting infrastructure and
          facilities such as conference venues, auditoria, hospitality areas,
          the library, resource centre, and art galleries. Elegantly designed,
          the campus is a hub of activity while remaining serene. The
          architectural and design elements enable it to be a paradoxical blend
          of landscaping, horticulture and fountains.
        </p>
      </div>
      <div
        id="explore"
        className="flex flex-col items-center m-auto justify-center w-[90%]  gap-2 mb-5 mt-5"
      >
        <h1 className="text-[2rem] md:text-[3.5rem]">Explore India</h1>
        <hr className="w-[40%] bg-black h-[3px]" />
      </div>
      <div className="bg-white  mb-5 flex flex-col justify-center items-center m-auto w-[90%] overflow-hidden list-disc p-[1rem] md:p-[3rem] text-xl md:text-[1.5rem]   gap-[2rem] border-[2px] border-black h-full">
        <p>
          A one-day Delhi tour on 30 November 2025 comes as a complimentary
          engagement to all registered delegates. The seat of many powerful
          empires in the past, its long history can be traced in its many
          carefully preserved monuments, ancient forts and tombs. It is home to
          three World Heritage monuments—Qutub Minar, Red Fort and Humayun's
          Tomb that have survived many centuries and give an idea of
          architectural wonders in this part of India
          (https://delhitourism.gov.in/delhitourism/index.jsp). A visit to Delhi
          is not complete without an experience of its famed cuisine such as its
          delicious curries, barbecued tikkas and kebabs. It is also a shoppers'
          haven with some rich woven silks, handic
        </p>
      </div>
      <div className="flex flex-col items-center m-auto justify-center w-[90%]  gap-2 mb-5 mt-5">
        <h1 className="text-[2rem] md:text-[3.5rem]">
          Post-Conference Excursion
        </h1>
        <hr className="w-[40%] bg-black h-[3px]" />
      </div>
      <div className="bg-white  mb-5 flex flex-col justify-center items-center m-auto w-[90%] overflow-hidden list-disc p-[1rem] md:p-[3rem] text-xl md:text-[1.5rem]   gap-[2rem] border-[2px] border-black h-full">
        <p>
          A post-conference excursion to the prestigious major projects like
          Tehri and Bhakra Dam in the Himalaya will be organised. Involving a
          two-days outing, the visitor gets to acquaint with the technical
          intricacies of the project and Himalayan tectonics in the vicinity.
        </p>
      </div>
      <div className="flex flex-col items-center m-auto justify-center w-[90%]  gap-2 mb-5 mt-5">
        <h1 className="text-[2rem] md:text-[3.5rem]">
          Group and Customised Post-Conference Tours
        </h1>
        <hr className="w-[40%] bg-black h-[3px]" />
      </div>
      <div className="bg-white  mb-5 flex flex-col justify-center items-center m-auto w-[90%] overflow-hidden list-disc p-[1rem] md:p-[3rem] text-xl md:text-[1.5rem]   gap-[2rem] border-[2px] border-black h-full">
        <p>
          India, a land of diverse cultures, breathtaking landscapes, and rich
          history, beckons travellers from around the globe to embark on a
          journey of discovery and exploration. From the snow-capped peaks of
          the Himalayas in the north to the sun-kissed beaches of Kerala in the
          south, India offers a kaleidoscope of experiences waiting to be
          uncovered.
        </p>
        <p>
          Step back in time as you wander through the ancient ruins of Hampi or
          marvel at the architectural splendour of the Taj Mahal in Agra, an
          enduring symbol of love and beauty. Immerse yourself in the vibrant
          chaos of Delhi's bustling streets, where centuries-old monuments stand
          alongside modern skyscrapers, reflecting the country's dynamic blend
          of tradition and innovation.
        </p>
        <p>
          Indulge your senses in the culinary delights of Indian cuisine, from
          the fiery flavours of street food to the aromatic spices of regional
          specialties. Experience the spiritual serenity of Varanasi as you
          witness the age-old rituals along the banks of the sacred Ganges
          River, or join the colourful festivities of Rajasthan's desert
          festivals, alive with music, dance, and tradition.
        </p>
        <p>
          India's rich cultural heritage encompasses a diverse array of
          religious, philosophical, and artistic traditions supporting her to
          stand as the world's largest democracy and a thriving hub of culture,
          innovation, and economic growth, while still preserving and
          celebrating its rich ancient heritage.
        </p>

        <p>
          The Organising Committee shall be coming up with options of group and
          customized tours for you to explore and experience India. Do come
          onboard and enjoy an exciting mix of technical deliberations and great
          outings.
        </p>
      </div>
      <div
        id="register"
        className="flex flex-col items-center m-auto justify-center w-[90%]  gap-2 mb-5 mt-5"
      >
        <h1 className="text-[2rem] md:text-[3.5rem]">Registration Fee</h1>
        <hr className="w-[40%] bg-black h-[3px]" />
      </div>
      <div className="bg-white  mb-5 flex flex-col justify-center items-center m-auto w-[90%] overflow-hidden list-disc p-[1rem] md:p-[3rem] text-xl md:text-[1.5rem]   gap-[2rem] border-[2px] border-black h-full">
        <p>
          The proposed Registration Fee model presented includes the Conference
          kit, lunch and refreshments for all three days of the event,
          Pre-Conference Delhi tour, Post-Conference excursion to Bhakra Dam,
          Ice Breaker, and Conference Banquet. The Registration fee is to be
          paid in Indian currency (INR). The Registration Fee in USD is to be
          paid in equivalent to INR.
        </p>
        <div className="  mb-5 flex flex-col justify-center items-center m-auto w-[90%] overflow-hidden list-disc p-[1rem] md:p-[3rem] text-xl md:text-[1.5rem]   gap-[2rem]  h-full">
          <div className="grid grid-cols-5 gap-10 md:gap-4 text-sm">
            <div className="font-bold">Category</div>
            <div className="font-bold">Standard (USD) Early Bird</div>
            <div className="font-bold">Standard (USD) Normal</div>
            <div className="font-bold">SAARC (INR) Early Bird</div>
            <div className="font-bold">SAARC (INR) Normal</div>

            <div>General</div>
            <div>400</div>
            <div>500</div>
            <div>8,000</div>
            <div>10,000</div>

            <div>YEG Members</div>
            <div>300</div>
            <div>400</div>
            <div>6,000</div>
            <div>8,000</div>
          </div>
        </div>

        <p>
          Notes: As a token of financial assistance, concessions on registration
          fee may be considered
        </p>
      </div>
      <div
        id="sponsor"
        className="flex flex-col items-center m-auto justify-center w-[90%]  gap-2 mb-5 mt-5"
      >
        <h1 className="text-[2rem] md:text-[3.5rem]">Sponsorship</h1>
        <hr className="w-[40%] bg-black h-[3px]" />
      </div>
      <div className="bg-white  mb-5 flex flex-col justify-center items-center m-auto w-[90%] overflow-hidden list-disc p-[1rem] md:p-[3rem] text-xl md:text-[1.5rem]   gap-[2rem] border-[2px] border-black h-full">
        <p>
          Indian and international sponsors involved in engineering geological
          investigations, rock and soil mechanics, civil infrastructure
          development agencies, agencies involved in TBM, tunneling, mining,
          drilling, exploration, construction, geohazard management, etc. are
          invited to support the event. The offered sponsorship shall range from
          Standard to Platinum category through Silver, Gold and Diamond, and
          likely to cost INR equivalent of USD 2,500 to USD 12,000 to (INR
          100,000 to 1,000,000). Besides specific number of complimentary
          delegate registrations, the sponsors shall be entitled to exclusive
          stalls to showcase their product, and visibility through prominent
          display of company logo at the venue and a full-page advertisement in
          the Souvenir volume.
        </p>
      </div>
      <div
        id="accommodation"
        className="flex flex-col items-center m-auto justify-center w-[90%]  gap-2 mb-5 mt-5"
      >
        <h1 className="text-[2rem] md:text-[3.5rem]">
          Accommodation / Transport
        </h1>
        <hr className="w-[40%] bg-black h-[3px]" />
      </div>
      <div className="bg-white  mb-5 flex flex-col justify-center items-center m-auto w-[90%] overflow-hidden list-disc p-[1rem] md:p-[3rem] text-xl md:text-[1.5rem]   gap-[2rem] border-[2px] border-black h-full">
        <p>
          Several hotels are available nearby the Conference venue to suit
          requirements of the delegates. A list of hotels with scheduled tariffs
          shall be released in the subsequent Conference releases. If needed,
          the Organising Committee shall extend help to the delegates in this
          regard. The Organizing Committee shall extend on-request pooled
          transport facility between designated hotels and the Conference venue.
        </p>
      </div>
      <div className="flex flex-col items-center m-auto justify-center w-[90%]  gap-2 mb-5 mt-5">
        <h1 className="text-[2rem] md:text-[3.5rem]">Organising Committee</h1>
        <hr className="w-[40%] bg-black h-[3px]" />
      </div>
      <div className="grid grid-cols-3 gap-2 p-4 border bg-white w-[90%] border-black m-auto">
        <div className="font-bold border border-gray-300 p-2 col-span-1">
          Patron
        </div>
        <div className="border border-gray-300 p-2 col-span-2">
          Shri Janardan Prasad, DG, GSI
          <br />
          Shri R.K. Chaudhary, Director(Tech). NHPC Ltd.
        </div>

        <div className="font-bold border border-gray-300 p-2 col-span-1">
          Chair
        </div>
        <div className="border border-gray-300 p-2 col-span-2">
          Shri Yogendra Deva, Formerly IAEG Vice President (Asia)
        </div>

        <div className="font-bold border border-gray-300 p-2 col-span-1">
          Co-Chair
        </div>
        <div className="border border-gray-300 p-2 col-span-2">
          Dr. Joyesh Bagchi, ADG, GSI
          <br />
          Dr. Ranjan Kumar Dahal, IAEG Vice President (Asia)
        </div>

        <div className="font-bold border border-gray-300 p-2 col-span-1">
          Convener
        </div>
        <div className="border border-gray-300 p-2 col-span-2">
          Shri Mandapalli Raju, President, ISEG & Formerly DG, GSI
        </div>

        <div className="font-bold border border-gray-300 p-2 col-span-1">
          Co-Conveners
        </div>
        <div className="border border-gray-300 p-2 col-span-2">
          Dr. Saibal Ghosh, Vice President, ISEG & DDG, GSI
          <br />
          Dr. V.K. Sharma, Vice President, ISEG & Formerly DDG, GSI
          <br />
          Shri Imran Sayeed, Formerly Secretary, ISEG and CGM, NHPC
        </div>

        <div className="font-bold border border-gray-300 p-2 col-span-1">
          Organising Secretary
        </div>
        <div className="border border-gray-300 p-2 col-span-2">
          Dr. Mridul Srivastava, Secretary, ISEG & Director, GSI
        </div>

        <div className="font-bold border border-gray-300 p-2 col-span-1">
          Joint Organising Secretaries
        </div>
        <div className="border border-gray-300 p-2 col-span-2">
          Shri Arindom Chakraborty, Jt. Secretary, ISEG & DGM, NHPC
          <br />
          Shri Vachaspati Pandey, Jt. Secretary, ISEG & DGM, NHPC
        </div>

        <div className="font-bold border border-gray-300 p-2 col-span-1">
          Treasurer
        </div>
        <div className="border border-gray-300 p-2 col-span-2">
          Shri Pravin Kumar Sharma, Treasurer, ISEG & Director, GSI
        </div>
      </div>
      <div className="flex flex-col items-center m-auto justify-center w-[90%]  gap-2 mb-5 mt-5">
        <h1 className="text-[2rem] md:text-[3.5rem]">Editorial</h1>
        <hr className="w-[40%] bg-black h-[3px]" />
      </div>
      <div className="grid grid-cols-3 gap-2 p-4 border bg-white w-[90%] border-black m-auto">
        <div className="font-bold border border-gray-300 p-2 col-span-1">
          Patron
        </div>
        <div className="border border-gray-300 p-2 col-span-2">
          Editor-in-Chief
          <br />
          Prof. Dr. Arindam Basu, Editor, ISEG & Professor, IIT, Kharagpur
        </div>

        <div className="font-bold border border-gray-300 p-2 col-span-1">
          Editors
        </div>
        <div className="border border-gray-300 p-2 col-span-2 w-[90%]">
          Shri B. Ajaya Kumar, DDG, GSI Dr Harish Bahuguna, DDG, GSI Shri
          Akhouri Bishwapriya, DDG, GSI Prof. Dr. S.N. Patil, North Maharashtra
          Univ., Jalgaon Prof Neelima Satyam, IIT Indore Dr. A.K. Naithani,
          Council Member, ISEG & Scientist, NIRM Ms Neetu Chauhan, Director, GSI
          Shri Vivek Sharma, Jt. Editor, ISEG & SM, NHPC Dr. Sumit Dabral, Jt.
          Editor, ISEG & SM, NHPC
        </div>
      </div>
      <div
        id="committee"
        className="flex flex-col items-center m-auto justify-center w-[90%]  gap-2 mb-5 mt-5"
      >
        <h1 className="text-[2rem] md:text-[3.5rem]">Scientific Committee</h1>
        <hr className="w-[40%] bg-black h-[3px]" />
      </div>
      <ul className="list-disc border bg-white w-[90%] md:w-max border-black m-auto p-5">
        <li>
          Dr. S.K. Wadhawan, Formerly D.G., GSI & Past Vice President, ISEG
        </li>
        <li>Dr. Gopal Dhawan, Formerly CMD, MECL & Past President, ISEG</li>
        <li>Shri R.N. Misra, Formerly CMD, SJVN & Past President, ISEG</li>
        <li>Dr. Prabhas Pande, Formerly ADG, GSI & Past Secretary, ISEG</li>
        <li>Dr. K.S. Rao, Formerly Professor, IITD, & Past President, ISEG</li>
        <li>Shri S.L.Kapil, Formerly ED, NHPC; Past President, ISEG</li>
        <li>Shri Gurdeep Singh, CMD, NTPC</li>
        <li>Shri R.K.Vishnoi, CMD, THDC</li>
        <li>Shri Sushil Sharma, CMD, SJVN</li>
        <li>Shri Arvind Sinha, Formerly DDG, GSI</li>
        <li>Shri Ashok Kumar, Formerly DDG, GSI</li>
        <li>Dr K.Jayabalan, Formerly DDG, GSI</li>
        <li>Dr. Y. P. Sharda, Formerly Director, GSI & Past Secretary, ISEG</li>
        <li>Dr O.P.Mishra, Director, NCS, MOES</li>
        <li>Shri Pradeep Singh, DDG and Director (Tech.), Ministry of Mines</li>
        <li>Shri P.M.Nanda, Executive Vice President, Greenko</li>

        <li>Shri Naresh Telgu, COO Projects, Adani Green Energy Limited</li>
      </ul>
      <div className="flex flex-col items-center  m-auto justify-center w-[90%]  gap-2 mb-5 mt-5">
        <h1 className="text-[2rem] md:text-[3.5rem]">
          ISEG Executive Council 2024-25
        </h1>
        <hr className="w-[40%] bg-black h-[3px]" />
      </div>
      <div className="grid grid-cols-3 bg-white md:w-max m-auto p-5 w-[90%] gap-0 border border-black">
        <div className="font-bold border border-gray-300 p-2 col-span-1">
          Patron
        </div>
        <div className="border border-gray-300 p-2 col-span-2">
          Shri Janardan Prasad, DG, GSI
          <br />
          Shri R.K. Chaudhary, Director(Tech). NHPC Ltd.
        </div>

        <div className="font-bold border border-gray-300 p-2 col-span-1">
          Chair
        </div>
        <div className="border border-gray-300 p-2 col-span-2">
          Shri Yogendra Deva, Formerly IAEG Vice President (Asia)
        </div>

        <div className="font-bold border border-gray-300 p-2 col-span-1">
          Co-Chair
        </div>
        <div className="border border-gray-300 p-2 col-span-2">
          Dr. Joyesh Bagchi, ADG, GSI
          <br />
          Dr. Ranjan Kumar Dahal, IAEG Vice President (Asia)
        </div>

        <div className="font-bold border border-gray-300 p-2 col-span-1">
          Convener
        </div>
        <div className="border border-gray-300 p-2 col-span-2">
          Shri Mandapalli Raju, President, ISEG & Formerly DG, GSI
        </div>

        <div className="font-bold border border-gray-300 p-2 col-span-1">
          Co-Conveners
        </div>
        <div className="border border-gray-300 p-2 col-span-2">
          Dr. Saibal Ghosh, Vice President, ISEG & DDG, GSI
          <br />
          Dr. V.K. Sharma, Vice President, ISEG & Formerly DDG, GSI
          <br />
          Shri Imran Sayeed, Formerly Secretary, ISEG and CGM, NHPC
        </div>

        <div className="font-bold border border-gray-300 p-2 col-span-1">
          Organising Secretary
        </div>
        <div className="border border-gray-300 p-2 col-span-2">
          Dr. Mridul Srivastava, Secretary, ISEG & Director, GSI
        </div>

        <div className="font-bold border border-gray-300 p-2 col-span-1">
          Joint Organising Secretaries
        </div>
        <div className="border border-gray-300 p-2 col-span-2">
          Shri Arindom Chakraborty, Jt. Secretary, ISEG & DGM, NHPC
          <br />
          Shri Vachaspati Pandey, Jt. Secretary, ISEG & DGM, NHPC
        </div>

        <div className="font-bold border border-gray-300 p-2 col-span-1">
          Treasurer
        </div>
        <div className="border border-gray-300 p-2 col-span-2">
          Shri Pravin Kumar Sharma, Treasurer, ISEG & Director, GSI
        </div>
      </div>
      <div className="p-8" id="contact">
        <div className="text-center mb-4">
          <a
            href="http://isegindia.org"
            className="text-blue-600 hover:underline"
          >
            Visit Us: isegindia.org
          </a>
        </div>
        <div className="text-center mb-8">
          <span className="text-xl font-semibold">Contact Us</span>
        </div>
        <div className="grid md:grid-cols-3 grid-rows-3 md:grid-rows-1 w-max m-auto overflow-hidden gap-3 md:gap-8 text-left">
          <div>
            <div className="font-bold">Organizing Secretariat</div>
            <div>
              <a
                href="mailto:info@isegindia.org"
                className="text-blue-600 hover:underline"
              >
                info@isegindia.org
              </a>
            </div>
            <div className="font-bold">Phone:</div>
            <div>+91 83330 43480</div>
          </div>
          <div>
            <div className="font-bold">Organising Secretary</div>
            <div>Dr Mridul Srivastava</div>
            <div className="font-bold">Email:</div>
            <div>
              <a
                href="mailto:aaradhy4712@gmail.com"
                className="text-blue-600 hover:underline"
              >
                aaradhy4712@gmail.com
              </a>
            </div>
          </div>
          <div>
            <div className="font-bold">Joint Organising Secretary</div>
            <div>Shri Arindom Chakraborty</div>
            <div className="font-bold">Email:</div>
            <div>
              <a
                href="mailto:arindomiseg@gmail.com"
                className="text-blue-600 hover:underline"
              >
                arindomiseg@gmail.com
              </a>
            </div>
            <div>Shri Vachaspati Pandey</div>
            <div className="font-bold">Email:</div>
            <div>
              <a
                href="mailto:vpnhpc@gmail.com"
                className="text-blue-600 hover:underline"
              >
                vpnhpc@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
