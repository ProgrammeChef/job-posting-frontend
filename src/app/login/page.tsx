"use client";
import Link from "next/link";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from 'next/navigation';
import "react-toastify/dist/ReactToastify.css";
import Http from "@/utils/http";
import { GoogleLogin } from '@react-oauth/google';

export default function Login() {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter()

  let message = "";

  const ongooglelog = () => {

  };

  const onLogin = () => {
    Http.post("/auth/login", { email, password })
      .then((result: any) => {
        message = result.data.message;
        toast.info(`${message}`, {
          autoClose: 3000,
        });
        setTimeout(() => {
          router.push('/job/joblist');
        }, 1000);
      })
      .catch((result: any) => {
        if (result.code && result.code == "ERR_NETWORK")
          message = "Server Error!!!";
        else message = result.response.data.message;
        toast.warning(`${message}`, {
          autoClose: 3000,
        });
      });
  };


  return (

    <div className="w-[100%] h-[100%] pl-[599px] pr-[600px] pt-[200.67px] pb-[181.33px] bg-slate-200 justify-center items-center flex">
      <ToastContainer />
      <div className="grow shrink basis-0 self-stretch p-6 bg-white rounded-2xl shadow justify-start items-start gap-6 inline-flex">
        <img
          className="w-[246px] self-stretch rounded-lg"
          src="/loginSplash.png"
        />
        <div className="grow shrink basis-0 self-stretch pt-6 flex-col justify-start items-center gap-6 inline-flex">
          <div className="w-[258px] h-7 justify-center items-center inline-flex">
            <img className="w-[258px] h-7 relative" src="/logo.svg" />
          </div>
          <div className="flex-col justify-start items-center gap-1 flex">
            <div className="text-sky-700 text-base font-semibold font-['Rubik']">
              Welcome to back
            </div>
            <div className="text-zinc-400 text-[10px] font-normal font-['Rubik']">
              Sign in to continue
            </div>
          </div>
          <div className="self-stretch h-[136px] flex-col justify-start items-center gap-[18px] flex">
            <div className="self-stretch h-[59px] flex-col justify-start items-start gap-2.5 flex">
              <div className="text-neutral-600 text-sm font-normal font-['Rubik']">
                Email Address
              </div>
              <div className="self-stretch h-8 p-2 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2 inline-flex">
                <img className="w-[18px] h-[18px] relative" src="/search.svg" />
                <input
                  className="text-zinc-400 text-sm font-normal font-['Rubik'] outline-none"
                  style={{ width: "-webkit-fill-available" }}
                  type="email"
                  placeholder="Please Input here."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="self-stretch h-[59px] flex-col justify-start items-start gap-2.5 flex">
              <div className="text-neutral-600 text-sm font-normal font-['Rubik']">
                User Password
              </div>
              <div className="self-stretch h-8 px-4 py-2 bg-white rounded-lg border border-gray-300 justify-between items-center inline-flex">
                <input
                  className="text-zinc-400 text-sm font-normal font-['Rubik'] outline-none"
                  style={{ width: "-webkit-fill-available" }}
                  type="password"
                  placeholder="Please Input here."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="w-6 h-6 px-[3px] py-1.5 justify-center items-center flex">
                  <img className="w-[18px] h-3 relative" src="/eye.svg" />
                </div>
              </div>
            </div>
          </div>
          <div
            className="self-stretch justify-start items-start gap-2.5 inline-flex cursor-pointer"
            onClick={onLogin}
          >
            <div className="grow shrink basis-0 h-8 px-6 py-2 bg-indigo-900 rounded-lg justify-center items-center gap-2.5 flex">
              <input
                type="button"
                className="text-slate-200 text-sm font-normal font-['Rubik'] capitalize cursor-pointer"
                value="Login"
              />
            </div>
          </div>
          <div className="self-stretch justify-start items-center gap-3 inline-flex">
            <div className="grow shrink basis-0 h-[0px] border border-zinc-400"></div>
            <div className="text-zinc-400 text-sm font-normal font-['Rubik']">
              or
            </div>
            <div className="grow shrink basis-0 h-[0px] border border-zinc-400"></div>
          </div>
          <div className="self-stretch h-[76px] flex-col justify-start items-start gap-3 flex">
            <GoogleLogin
              onSuccess={credentialResponse => {
                const gemail = credentialResponse.clientId;
                const gpassword = credentialResponse.credential;
                console.log(gemail);
                Http.post("/auth/googleRegister", { gemail, gpassword })
                  .then((result: any) => {
                    message = result.data.message;
                    console.log(message);
                    toast.info(`${message}`, {
                      autoClose: 3000,
                    });
                    setTimeout(() => {
                      router.push('/job/joblist');
                    }, 1000);
                  })
                  .catch((result: any) => {
                    if (result.code && result.code == "ERR_NETWORK")
                      message = "Server Error!!!";
                    else message = result.response.data.message;
                    toast.warning(`${message}`, {
                      autoClose: 3000,
                    });
                  });
              }}
              onError={() => {
                console.log('Login Failed');
              }}
            />
            <div className="self-stretch h-8 px-6 py-2 bg-white rounded-lg border border-gray-300 justify-center items-center gap-2.5 inline-flex cursor-pointer">
              <img className="w-5 h-5 relative" src="/facebook.svg" />
              <div className="text-indigo-900 text-sm font-normal font-['Rubik'] capitalize">
                Facebook
              </div>
            </div>
          </div>
          <div className="justify-center items-start gap-1 inline-flex">
            <div className="text-neutral-600 text-sm font-normal font-['Rubik']">
              Don’t have an account?
            </div>
            <div className="justify-center items-center gap-2.5 flex">
              <Link
                className="text-blue-500 text-sm font-medium font-['Rubik'] underline cursor-pointer"
                href="/register"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
