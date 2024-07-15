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
        <Tab />
        <Tab />
        <Tab />
        <Tab />
        <Tab />
        <Tab />
      </div>
    </div>
  );
}

function Tab() {
  return (
    <div className="hover:bg-[#345D8D] font-extralight px-[1rem] md:px-[2rem] md:text-[2rem] text-[1.5rem] rounded-md bg-[#e1e0e0] hover:text-white w-[90%] flex flex-row justify-between">
      <p className="underline">Newsletter</p>
      <p >April,2021</p>
    </div>
  );
}

export default NewsLetter;
