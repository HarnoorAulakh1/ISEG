export default function Help() {
  function handle(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    console.log(formData);
    alert("Thank you for contacting us. We will get back to you soon.");
    form.reset();
  }
  return (
    <div className="bg-[#d4d4d4] pb-5">
      <div className="flex flex-col items-center m-auto justify-center w-[90%]  gap-2 mb-5 mt-5 ">
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
          <select className="text-sm border-[1px]  border-black" name="Subject">
            <option value="-----Select a Subject-----">
              -----Select a Subject-----
            </option>
            <option value="Engineering Geological Mapping">
              Engineering Geological Mapping
            </option>
            <option value="River Valley Storage and Diversion Structures">
              River Valley Storage and Diversion Structures
            </option>
            <option value="Underground and Deep Excavations">
              Underground and Deep Excavations
            </option>
            <option value="Geohazards">Geohazards</option>
            <option value="Construction Material">Construction Material</option>
            <option value="Communication Projects">
              Communication Projects
            </option>
            <option value="Exploration, Instruments and Laboratory Techniques">
              Exploration, Instruments and Laboratory Techniques
            </option>
            <option value="Post Construction problems">
              Post Construction problems
            </option>
            <option value="Engineering Design">Engineering Design</option>
            <option value="Environmental Issues">Environmental Issues</option>
            <option value="Reservoir Competency">Reservoir Competency </option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className="flex flex-row justify-between w-full">
          <p>Query</p>
          <textarea className="bg-[#ebebeb] w-[20rem] p-2" name="Query" />
        </div>
        <button type="submit" className="bg-[#ebebeb] p-2 rounded-xl ">
          submit
        </button>
      </form>
    </div>
  );
}
