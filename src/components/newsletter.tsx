import { NavLink } from "react-router-dom";

function NewsLetter() {
  return (
    <div>
      <div className="flex flex-col items-center gap-5 mb-5 mt-5 bg-[#d3d3d3] pb-5">
        <h1 className="text-[3.5rem]">Newsletter</h1>
        <hr className="w-[40%] bg-black h-[3px]" />
        <p className="md:w-[80%] w-[90%] text-[1.5rem]">
          The ISEG launched its bi-annual newsletter – the ISEG News – since
          2004, hailed as another milestone in the Society’s illustrious
          journey. Since April 2004, it has been regularly published. The
          contents of the News also include short articles, book review, etc.…
        </p>
        <p className="md:w-[80%] w-[90%] text-[1.5rem]">
          Presently, preparations for releasing the Newsletter of April 2013 are
          on and the same will be released soon.
        </p>
      </div>
      <div>
        <h1 className="pl-[5%] text-[2rem]">Previous Editions</h1>
      </div>
      <div className="flex flex-col gap-5 items-center justify-center mt-10 mb-10">
        <Tab
          date="April 2021"
          link="https://isegindia.org/pdfs/ISEGNEWS-OCT%202019.pdf"
        />
        <Tab
          date="April 2019"
          link="https://isegindia.org/pdfs/ISEGNEWS-OCT%202019.pdf"
        />
        <Tab
          date="October 2018"
          link="https://isegindia.org/pdfs/ISEG%20NEWS-OCTOBER-2018-F.pdf"
        />
        <Tab
          date="April 2018"
          link="https://isegindia.org/pdfs/ISEG-NEWS-APRIL-2018-(Final).pdf"
        />
        <Tab
          date="October 2016"
          link="https://isegindia.org/pdfs/ISEGNEWS-OCTOBER-2016-31-JAN-2017.pdf"
        />
        <Tab
          date="April 2016"
          link="https://isegindia.org/pdfs/ISEGNEWS-APRIL-2016_Final.pdf"
        />
        <Tab
          date="October 2015"
          link="https://isegindia.org/pdfs/ISEGNEWS_OCTOBER_2015.pdf"
        />
        <Tab
          date="April 2015"
          link="https://isegindia.org/pdfs/ISEGNEWS_APRIL_2015.pdf"
        />
        <Tab
          date="October 2014"
          link="https://isegindia.org/pdfs/ISEGNEWS-OCT-2014-23NOV.pdf"
        />
        <Tab
          date="April 2014"
          link="https://isegindia.org/pdfs/ISEG%20News%20April%202014%208May14%20(1).pdf"
        />
        <Tab
          date="October 2013"
          link="https://isegindia.org/pdfs/ISEG-NEWS-OCT-13-FINAL.pdf"
        />
        <Tab
          date="April 2013"
          link="https://isegindia.org/pdfs/ISEG%20NEWS-MAY-2013-13-05-FINAL(1).pdf"
        />
        <Tab
          date="October 2012"
          link="https://isegindia.org/pdfs/isegnews_april2012.pdf"
        />
        <Tab
          date="April 2011"
          link="https://isegindia.org/pdfs/isegnews_april11.pdf"
        />
        <Tab
          date="April 2010"
          link="https://isegindia.org/pdfs/isegnews_april2010.pdf"
        />
        <Tab
          date="October 2010"
          link="https://isegindia.org/pdfs/isegnews_oct10.pdf"
        />
        <Tab
          date="April 2009"
          link="https://isegindia.org/pdfs/isegnews_april2008.pdf"
        />
        <Tab
          date="October 2008"
          link="https://isegindia.org/pdfs/isegnews_oct2007.pdf"
        />
      </div>
    </div>
  );
}

function Tab({ date, link }: { date: string; link: string }) {
  return (
    <NavLink
      to={link}
      className="hover:bg-[#345D8D] font-extralight px-[1rem] md:px-[2rem] md:text-[2rem] text-[1.5rem] rounded-md bg-[#e1e0e0] hover:text-white w-[90%] flex flex-row justify-between"
    >
      <p className="underline">Newsletter</p>
      <p>{date}</p>
    </NavLink>
  );
}

export default NewsLetter;
