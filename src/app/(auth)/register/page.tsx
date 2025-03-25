import React from "react";

export default function Page() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col gap-44">
        <div className="flex flex-1 flex-col items-center mt-10   gap-10">
          <div className="flex flex-col gap-5 items-center">
            <img src="/assets/Logo.png" className="w-[68px] h-[62px]" />
            <h1 className="text-black font-bold text-[34px]">Register here.</h1>
          </div>
          <form className="w-full flex flex-col items-center gap-7">
            <div className="flex flex-col gap-6">
              <input
                placeholder="Name or Phone"
                className="border p-3.5 border-[#DDDDDD] outline-none w-[350px] rounded-[5px] placeholder:text-[#888888] placeholder:text-[15px]"
              />

              <input
                type="email"
                placeholder="Email"
                className="border p-3.5 border-[#DDDDDD] outline-none w-[350px] rounded-[5px] placeholder:text-[#888888] placeholder:text-[15px]"
              />

              <div className="flex flex-col gap-7">
                <input
                  type="password"
                  placeholder="Password"
                  className="border p-3.5 border-[#DDDDDD] outline-none w-[350px] rounded-[5px] placeholder:text-[#888888] placeholder:text-[15px]"
                />
                <div className="flex justify-end">
                  <span className="text-[#888888] text-sm">
                    Forgot password?
                  </span>
                </div>
              </div>
            </div>
            <button className="text-white bg-gray-800 w-[350px]  font-medium rounded-lg text-base h-[60px] mx-3">
              Log In
            </button>
          </form>
        </div>
        <div className="flex justify-center">
          <div className="flex gap-1 text-center text-[#888888] text-sm">
            Already have an account?&nbsp;
            <a href="/login" className="text-black">
              Login?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
