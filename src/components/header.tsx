import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  return (
    <div className="w-[100%] grid py-3.5 bg-white justify-center items-center">
      <ToastContainer />
      <div className="w-[1400px] grow shrink basis-0 h-[47px] justify-start items-center flex">
        <div className="w-[231px] h-[29px] justify-center items-center flex">
          <div className="w-[231px] h-[29px] relative">
            <img src="/Logo.svg" />
          </div>
        </div>
        <div className="grow shrink basis-0 pl-20 justify-center items-start gap-[54px] flex">
          <div className="flex-col justify-center items-center gap-2 inline-flex">
            <div className="flex-col justify-center items-center gap-4 flex">
              <div className="justify-center items-center gap-1.5 inline-flex">
                <div className="w-5 relative">
                  <img src="/iconoir_add-user.svg" />
                </div>
                <div className="text-blue-950 text-xl font-normal font-['Rubik']">
                  Hire
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-center items-center gap-1 inline-flex">
            <div className="justify-center items-center gap-1.5 inline-flex">
              <div className="w-5 relative">
                <img src="/iconoir_reports.svg" />
              </div>
              <div className="text-neutral-600 text-xl font-normal font-['Rubik']">
                Lead
              </div>
            </div>
          </div>
          <div className="flex-col justify-center items-center gap-1 inline-flex">
            <div className="justify-center items-center gap-1.5 inline-flex">
              <div className="w-5 h-5 px-[3.33px] py-[2.50px] justify-center items-center flex">
                <div className="w-[13.33px] h-[15px] relative">
                  <img src="/iconoir_reports.svg" />
                </div>
              </div>
              <div className="text-neutral-600 text-xl font-normal font-['Rubik']">
                Train
              </div>
            </div>
          </div>
          <div className="flex-col justify-center items-center gap-1 inline-flex">
            <div className="justify-center items-center gap-1.5 inline-flex">
              <div className="w-5 h-5 relative">
                <img src="/Group.svg" />
              </div>
              <div className="text-neutral-600 text-xl font-normal font-['Rubik']">
                Community
              </div>
            </div>
          </div>
        </div>
        <div className="w-[217px] h-9 px-4 py-2 bg-slate-200 rounded-2xl justify-start items-center gap-2.5 flex">
          <div className="w-5 h-5 relative">
            <img src="/iconoir_search.svg" />
          </div>
          <div className="text-white text-sm font-normal font-['Rubik']">
            Search
          </div>
        </div>
        <div className="w-6 h-6 relative" />
        <div className="justify-start items-center gap-3 flex">
          <div className="w- justify-center items-center flex">
            <img
              className="w-10 rounded-full border-2 border-slate-200"
              src="/Ellipse.svg"
            />
          </div>
          <div className="flex-col justify-start items-start gap-1 inline-flex">
            <div className="text-neutral-600 text-xl font-medium font-['Rubik']">
              John Doe
            </div>
            <div className="text-zinc-400 text-base font-normal font-['Rubik']">
              Hiring Manager
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
