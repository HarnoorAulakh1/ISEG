import { useState } from "react";
import { motion } from "framer-motion";



export default function Contact() {
  function handle(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    console.log(formData);
    alert("Thank you for contacting us. We will get back to you soon.");
    form.reset();
  }
  return (
    <div className="bg-[#d4d4d4]">
      <div className="flex flex-col items-center m-auto justify-center w-[90%] gap-2 mb-5 mt-5 bg-[#d4d4d4]">
        <h1 className="text-[2rem] md:text-[3.5rem]">Contact Us</h1>
        <hr className="w-[40%] bg-black h-[3px]" />
      </div>
      <div className="bg-white mb-5 flex flex-col justify-center items-start m-auto w-[90%] overflow-hidden list-disc p-[1rem] md:p-[3rem] text-xl md:text-[1.5rem]   gap-[2rem] border-[2px] border-black h-full">
        <p className="font-bold center">The Secretary</p>
        <p className="font-bold center">
          Indian Society of Engineering Geology
        </p>
        <p>Phone: +91 83330-43480</p>
        <p>E-mail:info@isegindia.org</p>
      </div>
      <div className="flex flex-col items-center m-auto justify-center w-[90%]  gap-2 mb-5 mt-5 bg-[#d4d4d4]">
        <h1 className="text-[2rem] md:text-[3.5rem]">Contact Secretariat</h1>
        <hr className="w-[40%] bg-black h-[3px]" />
      </div>

      <form
        onSubmit={(e) => handle(e)}
        className="bg-white mb-5 flex flex-col justify-center items-center m-auto w-[90%] overflow-hidden list-disc p-[1rem] md:p-[3rem] text-xl md:text-[1.5rem]   gap-[2rem] border-[2px] border-black h-full"
      >
        <div className="flex flex-row justify-between w-full">
          <p>Name</p>
          <input type="text" name="Name" className="bg-[#ebebeb] w-[20rem] p-2" />
        </div>
        <div className="flex flex-row justify-between w-full">
          <p>Email Address</p>
          <input type="email" name="Email" className="bg-[#ebebeb] w-[20rem] p-2" />
        </div>
        <div className="flex flex-row justify-between w-full">
          <p>Subject</p>
          <select className="text-sm border-[1px] border-black" name="Subject">
            <option value="General">---Select a Subject---</option>
            <option value="General">General</option>
            <option value="Membership">Membership</option>
            <option value="ISEG Webpage">ISEG Webpage</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className="flex flex-row justify-between w-full">
          <p>Query</p>
          <textarea className="bg-[#ebebeb] p-2 w-[20rem]" name="Query" />
        </div>
        <button type="submit" className="bg-[#ebebeb] p-2 rounded-xl ">
          submit
        </button>
      </form>
      <div className="flex flex-col items-center m-auto justify-center w-[90%] gap-2 mb-5 mt-5 bg-[#d4d4d4]">
        <h1 className="text-[2rem] md:text-[3.5rem]">FAQ'S</h1>
        <hr className="w-[40%] bg-black h-[3px]" />
      </div>
      <div className=" m-auto w-[90%] overflow-hidden list-disc p-[1rem] md:p-[3rem] flex flex-col items-center text-xl md:text-[1.5rem]   gap-[2rem] h-full">
        <Accordian height="25rem">
          <>
            <div className="flex flex-row font-bold justify-between w-full mb-[2rem]">
              <p>What are benefits an ISEG Member is entitled to?</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className=" center">
                (i) Both ISEG Annual and Life Member is entitled to get one copy
                of publications of the Society, published during the period of
                validity, which include Journal of Engineering Geology and ISEG
                News.
              </p>
              <p className=" center">
                (ii) Associated / Institutional Members are entitled for five
                copies of publications of the Society, published during the
                period of validity.
              </p>
              <p className=" center">
                (iii) All Life Members are eligible to join IAEG at concessional
                fee.
              </p>
              <p className="center">
                (iv) All Members are eligible to participate in ISEG General
                Body Meetings and Annual General Body Meetings.
              </p>
              <p>
                (v) All Annual and Life Members are eligible to cast their vote,
                if required, in all ISEG meetings.
              </p>
              <p>
                (vi) All Life Members along with valid Membership of IAEG, are
                eligible to contest elections of ISEG Executive Council.
              </p>
            </div>
          </>
        </Accordian>
        <Accordian height="25rem">
          <>
            <div className="flex flex-row font-bold justify-between w-full mb-[2rem]">
              <p>Who can join ISEG?</p>
            </div>
            <div className="flex flex-col gap-2">
              <p>
                The Membership of the Society shall be open to individuals and
                Institutions connected with or interested in the field of
                Engineering Geology and allied Sciences. This is open to
                individuals associated or interested in the field of Engineering
                Geology and allied Sciences. The minimum qualifications for the
                individual membership shall be anyone of the following:
              </p>
              <p className=" center">
                (i) A degree or diploma in Geology or Geophysics or Applied
                Geology or its equivalent.
              </p>
              <p className=" center">
                (ii) Any recognized engineering degree or diploma or its
                equivalent.
              </p>
              <p className=" center">(iii) Any recognized degree in Science.</p>
            </div>
          </>
        </Accordian>
        <Accordian height="34rem">
          <>
            <div className="flex flex-row font-bold justify-between w-full mb-[2rem]">
              <p>How to join ISEG?</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className=" center">
                (i) To fill the Registration form, copy available in the ISEG
                Webpage.
              </p>
              <p className=" center">
                (ii) To pay the Registration fee, through Demand Draft to ISEG,
                payable at Lucknow.
              </p>
              <p className=" center">
                The amount of fee depends on age group, which is detailed below.
              </p>
              <p className="center">
                Admission Fee (One time) : Rs 1,000/=
                <br />
                Institutional/Associate Membership : Rs 2,000/=
              </p>
              <br />
              <p>Individual Membership:</p>
              <br />
              <p>
                OrdinaryMembership (Annual) :Rs500/- Life Membership : Rs
                5,000/= (for age below 35 years)
              </p>
              <p>Rs 4,000/= (for age 35-50 years)</p>
              <p>Rs 3,000/= (for age more than 50 years)</p>
            </div>
          </>
        </Accordian>
        <Accordian height="22rem">
          <>
            <div className="flex flex-row font-bold justify-between w-full mb-[2rem]">
              <p>What is the Membership fee of IAEG ?</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className=" center">
                International Association for Engineering Geology and the
                Environment (IAEG)
              </p>
              <br />
              <p className=" center">Annual Membership fee for ISEG Members</p>
              <p className=" center">Members of National Groups:</p>
              <p className="center">Without Bulletin : 4 Euros</p>
              <p>With Bulletin : 24 Euros</p>
            </div>
          </>
        </Accordian>
        <Accordian height="17rem">
          <>
            <div className="flex flex-row font-bold justify-between w-full mb-[2rem]">
              <p>What is the management structure of the ISEG?</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className=" center">
                The ISEG is controlled by the Executive Council, elected for a
                period of two years. The Executive Council has One President,
                Three Vice Presidents, One Secretary, Two Jt. Secretaries, One
                Treasurer, One Editor, One Jt. Editor and Ten Council Members.
                Past President and Past Secretary are also part of the Executive
                Council.
              </p>
            </div>
          </>
        </Accordian>
        <Accordian height="22rem">
          <>
            <div className="flex flex-row font-bold justify-between w-full mb-[2rem]">
              <p>What are aims of the ISEG?</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className=" center">The aim of the Society shall be :</p>
              <br />
              <p className=" center">
                (a) To promote the study of the subject of Engineering Geology
                and allied Sciences and their application.
              </p>
              <p className=" center">
                (b) To disseminate knowledge and provide a forum for discussion
                of all disciplines by holding periodical meetings, seminars and
                symposia.
              </p>
              <p className="center">
                (c) To publish a half yearly Journal of Engineering Geology.
              </p>
            </div>
          </>
        </Accordian>
      </div>
    </div>
  );
}

function Accordian({
  children,
  height,
}: {
  children: React.ReactNode;
  height: string;
}) {
  const [state, set] = useState<boolean>(false);
  console.log(height);
  return (
    <motion.div
      initial={{ height: "4rem" }}
      animate={{ height: state ? `${height}` : "4rem" }}
      transition={{ duration: 0.8, type: "ease" }}
      onClick={() => set((x) => !x)}
      className="w-full overflow-hidden p-5 text-sm md:text-xl rounded-xl bg-white"
    >
      {children}
    </motion.div>
  );
}
