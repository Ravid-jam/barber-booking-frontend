"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="relative h-full">
      <div className="w-full h-[50vh] z-30">
        <img src="/assets/login.png" className="w-full" />
      </div>
      <div className=" flex  justify-center w-full h-full">
        <div className="absolute -bottom-60 flex flex-col gap-20 h-full">
          <div className="flex flex-col  items-center gap-5">
            <img src="/assets/Logo.png" className="w-[68px] h-[62px]" />
            <div className="flex flex-col gap-4 items-center justify-center">
              <h1 className="text-4xl max-w-xs text-center font-bold text-black">
                Book your haircut in seconds
              </h1>
              <span className="text-[#888888] max-w-sm text-sm text-center">
                Schedule your next haircut within a few seconds. Easily reserve
                and manage your appointments.
              </span>
            </div>
          </div>
          <div className="w-full h-full flex flex-col justify-end">
            <div className="flex flex-col gap-5 my-5">
              <button
                onClick={() => router.push("/login")}
                className="text-white bg-gray-800  font-medium rounded-lg text-base h-[60px] mx-3"
              >
                Log In
              </button>
              <button className="text-black bg-none  border border-black font-medium rounded-lg text-base h-[60px] mx-3">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
