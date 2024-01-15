const Nav = () => {
  return (
    
      <div className="w-full h-full p-8 flex-col justify-start items-center gap-2.5 inline-flex absolute">
        <div className="w-full h-[120px]  flex-col justify-center items-start gap-8 inline-flex absolute pl-[10rem]">
          <div className="w-[738px] h-16 py-6 justify-start items-center gap-6 inline-flex ">
            <div className="p-2 bg-slate-200 rounded-2xl justify-start items-center gap-2.5 flex">
              <img src='/Avatar_Header.png' alt='JOB image' />
            </div>
            <div className="flex-col justify-center items-start gap-2 inline-flex ">
              <div className="text-neutral-600 text-[32px] font-normal font-['Rubik']  capitalize">My Jobs
              </div>
              <div className="text-black text-opacity-50 text-xs font-normal font-['Rubik']">Lorem ipsum dolor
                sit amet consectetur. Tellus nulla ipsum faucibus consectetur. Felis nunc in tempor
                aenean purus.</div>
            </div>
          </div>
          <div className="w-[486px] h-8 justify-start items-center gap-2.5 inline-flex ">
            <button>
              <div
                className="w-[119px] px-6 py-2 bg-sky-700 rounded-lg justify-center items-center gap-2.5 flex">
                <div className="text-slate-200 text-sm font-normal font-['Rubik'] capitalize">Dashboard
                </div>
              </div>
            </button>
            <button>
              <div
                className="w-[103px] px-6 py-2 bg-slate-300 rounded-lg justify-center items-center gap-2.5 flex">
                <div className="text-sky-700 text-sm font-normal font-['Rubik'] capitalize">My Jobs</div>
              </div>
            </button>
            <button>
              <div
                className="w-[118px] px-6 py-2 bg-slate-300 rounded-lg justify-center items-center gap-2.5 flex">
                <div className="text-sky-700 text-sm font-normal font-['Rubik'] capitalize">Applicants</div>
              </div>
            </button>
            <button>
              <div
                className="w-[116px] px-6 py-2 bg-slate-300 rounded-lg justify-center items-center gap-2.5 flex">
                <div className="text-sky-700 text-sm font-normal font-['Rubik'] capitalize">Interviews</div>
              </div>
            </button>
          </div>
        </div>
      </div>
  );
};

export default Nav;
