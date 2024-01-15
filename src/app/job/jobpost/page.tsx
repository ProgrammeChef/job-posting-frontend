"use client";
import Header from "@/components/header";
import Link from "next/link";
import Footer from "@/components/footer";
import { useState } from "react";
import { toast } from "react-toastify";
import Http from "@/utils/http";

const JobPost = () => {
  const [data, setData] = useState({
    companyName: "",
    hireMName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    roleType: "",
    title: "",
    cType: "",
    salary: "",
    ote: "",
    inboundLeads: false,
    prospecting: false,
    averageOrder: "",
    industry: "",
    jobDescription: "",
    jobType: false,
    created_at: "",
    expiration_date: "",
    jstatus: "",
    companyDescription: "",
    companyUrl: "",
    headerImageUrl: "",
  });

  let message = "";

  const validateFields = () => {
    let boolenKeys = ["inboundLeads", "prospecting", "jobType"];
    let validate = true;
    Object.keys(data).map((key) => {
      if (boolenKeys.indexOf(key) < 0 && data[`${key}`] == "") {
        toast.warn(`please input ${key}.`, {
          autoClose: 3000,
        });
        validate = false;
      }
    });
    return validate;
  };

  const onLogin = () => {
    if (validateFields()) {
      Http.post("/job/post", data)
        .then((result: any) => {
          message = result.data.message;
          toast.success(`${message}`, {
            autoClose: 3000,
          });
          setData({
            companyName: "",
            hireMName: "",
            email: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            roleType: "",
            title: "",
            cType: "",
            salary: "",
            ote: "",
            inboundLeads: false,
            prospecting: false,
            averageOrder: "",
            industry: "",
            jobDescription: "",
            jobType: false,
            created_at: "",
            expiration_date: "",
            jstatus: "",
            companyDescription: "",
            companyUrl: "",
            headerImageUrl: "",
          });
        })
        .catch((result: any) => {
          message = result.response.data.message;
          toast.warning(`${message}`, {
            autoClose: 3000,
          });
        });
    }
  };
  
  return (
    <div>
      <Header />
      <div className="w-full flex-col justify-start items-center gap-2.5 inline-flex relative">
        <img className='w-full h-[184px] bg-white bg-opacity-50' src='/jobList.png' alt='JOB image' />
        <div className="w-full h-full p-8 flex-col justify-start items-center gap-2.5 inline-flex absolute">
          <div className="w-full h-[120px]  flex-col justify-center items-start gap-8 inline-flex absolute pl-[10rem]">
            <div className="w-[738px] h-16 py-6 justify-start items-center gap-6 inline-flex ">
              <div className="p-2 bg-slate-200 rounded-2xl justify-start items-center gap-2.5 flex">
                <img src='/Avatar_Header.png' alt='JOB image' />
              </div>
              <div className="flex-col justify-center items-start gap-2 inline-flex ">
                <div className="text-neutral-600 text-[32px] font-normal font-['Rubik']  capitalize">New Post Job
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
                <Link href={'joblist'}>
                  <div
                    className="w-[103px] px-6 py-2 bg-slate-300 rounded-lg justify-center items-center gap-2.5 flex">
                    <div className="text-sky-700 text-sm font-normal font-['Rubik'] capitalize">My Jobs</div>
                  </div>
                </Link>

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
      </div>
      <div className="w-[100%] grid py-3.5 justify-center items-center gap-8">
        <div className="w-[1400px] rounded-2xl flex-col justify-start items-start gap-8 inline-flex">
          <div className="w-[1400px] h-[1768px] p-6 bg-white rounded-2xl flex-col justify-start items-center gap-3 inline-flex">
            <div className="self-stretch h-[1720px] p-6 rounded-lg border border-black border-opacity-10 flex-col justify-start items-start gap-3 flex">
              <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-neutral-600 text-sm font-medium font-['Rubik']">
                    Company Name
                  </div>
                  <div className="h-3 justify-between items-center flex">
                    <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">
                      Required
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex">
                  <input
                    style={{ width: "-webkit-fill-available" }}
                    className="text-zinc-400 text-sm font-normal font-['Rubik'] outline-none"
                    type="floating_email"
                    placeholder="Please input here."
                    value={data.companyName}
                    onChange={(e) =>
                      setData({ ...data, companyName: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-neutral-600 text-sm font-medium font-['Rubik']">
                    Hiring Manager Name
                  </div>
                  <div className="h-3 justify-between items-center flex">
                    <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">
                      Required
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex">
                  <input
                    style={{ width: "-webkit-fill-available" }}
                    className="text-zinc-400 text-sm font-normal font-['Rubik'] outline-none"
                    type="floating_email"
                    placeholder="Please input here."
                    value={data.hireMName}
                    onChange={(e) =>
                      setData({ ...data, hireMName: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-neutral-600 text-sm font-medium font-['Rubik']">
                    Email
                  </div>
                  <div className="h-3 justify-between items-center flex">
                    <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">
                      Required
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex">
                  <input
                    style={{ width: "-webkit-fill-available" }}
                    className="text-zinc-400 text-sm font-normal font-['Rubik'] outline-none"
                    type="floating_email"
                    placeholder="Please input here."
                    value={data.email}
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-neutral-600 text-sm font-medium font-['Rubik']">
                    Address
                  </div>
                  <div className="h-3 justify-between items-center flex">
                    <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">
                      Required
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex">
                  <input
                    style={{ width: "-webkit-fill-available" }}
                    className="text-zinc-400 text-sm font-normal font-['Rubik'] outline-none"
                    type="floating_email"
                    placeholder="Please input here."
                    value={data.address}
                    onChange={(e) =>
                      setData({ ...data, address: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-neutral-600 text-sm font-medium font-['Rubik']">
                    City
                  </div>
                  <div className="h-3 justify-between items-center flex">
                    <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">
                      Required
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex">
                  <input
                    style={{ width: "-webkit-fill-available" }}
                    className="text-zinc-400 text-sm font-normal font-['Rubik'] outline-none"
                    type="floating_email"
                    placeholder="Please input here."
                    value={data.city}
                    onChange={(e) => setData({ ...data, city: e.target.value })}
                  />
                </div>
              </div>
              <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-neutral-600 text-sm font-medium font-['Rubik']">
                    State
                  </div>
                  <div className="h-3 justify-between items-center flex">
                    <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">
                      Required
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex">
                  <input
                    style={{ width: "-webkit-fill-available" }}
                    className="text-zinc-400 text-sm font-normal font-['Rubik'] outline-none"
                    type="floating_email"
                    placeholder="Please input here."
                    value={data.state}
                    onChange={(e) =>
                      setData({ ...data, state: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-neutral-600 text-sm font-medium font-['Rubik']">
                    Zip
                  </div>
                  <div className="h-3 justify-between items-center flex">
                    <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">
                      Required
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex">
                  <input
                    style={{ width: "-webkit-fill-available" }}
                    className="text-zinc-400 text-sm font-normal font-['Rubik'] outline-none"
                    type="floating_email"
                    placeholder="Please input here."
                    value={data.zip}
                    onChange={(e) => setData({ ...data, zip: e.target.value })}
                  />
                </div>
              </div>
              <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-neutral-600 text-sm font-medium font-['Rubik']">
                    Role Type
                  </div>
                  <div className="h-3 justify-between items-center flex">
                    <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">
                      Required
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex">
                  <input
                    style={{ width: "-webkit-fill-available" }}
                    className="text-zinc-400 text-sm font-normal font-['Rubik'] outline-none"
                    type="floating_email"
                    placeholder="Please input here."
                    value={data.roleType}
                    onChange={(e) =>
                      setData({ ...data, roleType: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-neutral-600 text-sm font-medium font-['Rubik']">
                    Title
                  </div>
                  <div className="h-3 justify-between items-center flex">
                    <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">
                      Required
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex">
                  <input
                    style={{ width: "-webkit-fill-available" }}
                    className="text-zinc-400 text-sm font-normal font-['Rubik'] outline-none"
                    type="floating_email"
                    placeholder="Please input here."
                    value={data.title}
                    onChange={(e) =>
                      setData({ ...data, title: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-neutral-600 text-sm font-medium font-['Rubik']">
                    Compensation Type
                  </div>
                  <div className="h-3 justify-between items-center flex">
                    <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">
                      Required
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex">
                  <input
                    style={{ width: "-webkit-fill-available" }}
                    className="text-zinc-400 text-sm font-normal font-['Rubik'] outline-none"
                    type="floating_email"
                    placeholder="Please input here."
                    value={data.cType}
                    onChange={(e) =>
                      setData({ ...data, cType: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-neutral-600 text-sm font-medium font-['Rubik']">
                    Salary Amount
                  </div>
                  <div className="h-3 justify-between items-center flex">
                    <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">
                      Required
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex">
                  <input
                    style={{ width: "-webkit-fill-available" }}
                    className="text-zinc-400 text-sm font-normal font-['Rubik'] outline-none"
                    type="floating_email"
                    placeholder="Please input here."
                    value={data.salary}
                    onChange={(e) =>
                      setData({ ...data, salary: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-neutral-600 text-sm font-medium font-['Rubik']">
                    OTE
                  </div>
                  <div className="h-3 justify-between items-center flex">
                    <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">
                      Required
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex">
                  <input
                    style={{ width: "-webkit-fill-available" }}
                    className="text-zinc-400 text-sm font-normal font-['Rubik'] outline-none"
                    type="floating_email"
                    placeholder="Please input here."
                    value={data.ote}
                    onChange={(e) => setData({ ...data, ote: e.target.value })}
                  />
                </div>
              </div>
              <div className="self-stretch h-[18px] flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch justify-between items-end inline-flex">
                  <div className="flex-col justify-start items-start gap-2 inline-flex">
                    <div className="text-neutral-600 text-sm font-medium font-['Rubik']">
                      Inbound Leads?
                    </div>
                  </div>
                  <input
                    className="pl-px pr-[17px] py-px justify-start items-center flex
                    mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                    role="switch"
                    type="checkbox"
                    checked={data.inboundLeads}
                    onChange={(e) =>
                      setData({ ...data, inboundLeads: e.target.checked })
                    }
                  />
                </div>
              </div>
              <div className="self-stretch h-[18px] flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch justify-between items-end inline-flex">
                  <div className="flex-col justify-start items-start gap-2 inline-flex">
                    <div className="text-neutral-600 text-sm font-medium font-['Rubik']">
                      Prospecting Required?
                    </div>
                  </div>
                  <input
                    className="pl-px pr-[17px] py-px justify-start items-center flex
                    mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                    role="switch"
                    type="checkbox"
                    checked={data.prospecting}
                    onChange={(e) =>
                      setData({ ...data, prospecting: e.target.checked })
                    }
                  />
                </div>
              </div>
              <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-neutral-600 text-sm font-medium font-['Rubik']">
                    Average Order
                  </div>
                  <div className="h-3 justify-between items-center flex">
                    <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">
                      Required
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex">
                  <input
                    style={{ width: "-webkit-fill-available" }}
                    className="text-zinc-400 text-sm font-normal font-['Rubik'] outline-none"
                    type="floating_email"
                    placeholder="Please input here."
                    value={data.averageOrder}
                    onChange={(e) =>
                      setData({ ...data, averageOrder: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-neutral-600 text-sm font-medium font-['Rubik']">
                    Industry
                  </div>
                  <div className="h-3 justify-between items-center flex">
                    <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">
                      Required
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex">
                  <input
                    style={{ width: "-webkit-fill-available" }}
                    className="text-zinc-400 text-sm font-normal font-['Rubik'] outline-none"
                    type="floating_email"
                    placeholder="Please input here."
                    value={data.industry}
                    onChange={(e) =>
                      setData({ ...data, industry: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="self-stretch h-[107px] flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-neutral-600 text-sm font-medium font-['Rubik']">
                    Job Description
                  </div>
                  <div className="h-3 justify-between items-center flex">
                    <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">
                      Required
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[83px] px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-start gap-2.5 inline-flex">
                  <input
                    style={{ width: "-webkit-fill-available" }}
                    className="text-zinc-400 text-sm font-normal font-['Rubik'] outline-none"
                    type="floating_email"
                    placeholder="Please input here."
                    value={data.jobDescription}
                    onChange={(e) =>
                      setData({ ...data, jobDescription: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="self-stretch h-[18px] flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch justify-between items-end inline-flex">
                  <div className="flex-col justify-start items-start gap-2 inline-flex">
                    <div className="text-neutral-600 text-sm font-medium font-['Rubik']">
                      Customer Service/ Success Support?
                    </div>
                  </div>
                  <input
                    className="pl-px pr-[17px] py-px justify-start items-center flex
                    mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                    role="switch"
                    type="checkbox"
                    checked={data.jobType}
                    onChange={(e) =>
                      setData({ ...data, jobType: e.target.checked })
                    }
                  />
                </div>
              </div>
              <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-neutral-600 text-sm font-medium font-['Rubik']">
                    Created Date
                  </div>
                  <div className="h-3 justify-between items-center flex">
                    <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">
                      Required
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex">
                  <input
                    style={{ width: "-webkit-fill-available" }}
                    className="text-zinc-400 text-sm font-normal font-['Rubik'] outline-none"
                    type="floating_email"
                    placeholder="Please input here."
                    value={data.created_at}
                    onChange={(e) =>
                      setData({ ...data, created_at: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-neutral-600 text-sm font-medium font-['Rubik']">
                    Expiration Date
                  </div>
                  <div className="h-3 justify-between items-center flex">
                    <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">
                      Required
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex">
                  <input
                    style={{ width: "-webkit-fill-available" }}
                    className="text-zinc-400 text-sm font-normal font-['Rubik'] outline-none"
                    type="floating_email"
                    placeholder="Please input here."
                    value={data.expiration_date}
                    onChange={(e) =>
                      setData({ ...data, expiration_date: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-neutral-600 text-sm font-medium font-['Rubik']">
                    Status
                  </div>
                  <div className="h-3 justify-between items-center flex">
                    <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">
                      Required
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex">
                  <input
                    style={{ width: "-webkit-fill-available" }}
                    className="text-zinc-400 text-sm font-normal font-['Rubik'] outline-none"
                    type="floating_email"
                    placeholder="Please input here."
                    value={data.jstatus}
                    onChange={(e) =>
                      setData({ ...data, jstatus: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="self-stretch h-[108px] flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-neutral-600 text-sm font-medium font-['Rubik']">
                    Company Description
                  </div>
                  <div className="h-3 justify-between items-center flex">
                    <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">
                      Required
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[83px] px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-start gap-2.5 inline-flex">
                  <input
                    style={{ width: "-webkit-fill-available" }}
                    className="text-zinc-400 text-sm font-normal font-['Rubik']"
                    value={data.companyDescription}
                    onChange={(e) =>
                      setData({ ...data, companyDescription: e.target.value })
                    }
                    placeholder="Please input here."
                  />
                </div>
              </div>
              <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-neutral-600 text-sm font-medium font-['Rubik']">
                    Company URL
                  </div>
                  <div className="h-3 justify-between items-center flex">
                    <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">
                      Required
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex">
                  <input
                    style={{ width: "-webkit-fill-available" }}
                    className="text-zinc-400 text-sm font-normal font-['Rubik'] outline-none"
                    type="floating_email"
                    placeholder="Please input here."
                    value={data.companyUrl}
                    onChange={(e) =>
                      setData({ ...data, companyUrl: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="self-stretch h-[57px] flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-neutral-600 text-sm font-medium font-['Rubik']">
                    Header Image URL
                  </div>
                  <div className="h-3 justify-between items-center flex">
                    <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">
                      Required
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex">
                  <input
                    style={{ width: "-webkit-fill-available" }}
                    className="text-zinc-400 text-sm font-normal font-['Rubik'] outline-none"
                    type="floating_email"
                    placeholder="Please input here."
                    value={data.headerImageUrl}
                    onChange={(e) =>
                      setData({ ...data, headerImageUrl: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="self-stretch h-8 py-2 justify-end items-center inline-flex">
                <div className="w-[125px] h-8 flex-col justify-start items-end gap-2.5 inline-flex">
                  <div
                    className="self-stretch h-8 px-6 py-2 bg-indigo-900 rounded-lg justify-center items-center gap-2.5 inline-flex"
                    style={{ cursor: "pointer" }}
                    onClick={onLogin}
                  >
                    <div className="w-5 h-5 relative">
                      <img src="/iconoir_check.svg" />
                    </div>
                    <div className="text-slate-200 text-sm font-normal font-['Rubik'] capitalize">
                      Submit
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JobPost;
