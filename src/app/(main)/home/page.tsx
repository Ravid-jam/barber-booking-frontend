"use client";
import { FunnelX, MapPin, X } from "lucide-react";
import React, { useState } from "react";
import BarbershopList from "./component/BarbershopList";
import BarbershopRecommended from "./component/BarbershopRecommended";
import BottomNavigation from "./component/BottomNavigation";
import Drawer from "@/app/components/common/Drawer";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex flex-col gap-7 container">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              <MapPin className="h-5 text-fuchsia-950" />
              <span className="text-gray-500 text-sm">Yogyakarta</span>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-black">Joe Samanta</h2>
            </div>
          </div>
          <img
            className="w-11 h-11 rounded-full"
            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            alt="Rounded avatar"
          />
        </div>
        <div className="flex justify-center">
          <img src="/assets/Home-Card.png" className="w-full" />
        </div>
        <div className="flex items-center gap-3">
          <div className="flex flex-1 gap-3 px-4 py-3 rounded-md border border-fuchsia-950 overflow-hidden max-w-md mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192.904 192.904"
              width="16px"
              className="fill-fuchsia-950"
            >
              <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
            </svg>
            <input
              type="email"
              placeholder="Search barber’s, haircut service"
              className="w-full outline-none bg-transparent text-gray-600 text-sm"
            />
          </div>
          <div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 bg-fuchsia-950 rounded-sm"
            >
              <FunnelX color="white" />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-bold">Nearest Babershop</h2>
          <BarbershopList />
        </div>
        <BarbershopRecommended />
        <BarbershopList />
      </div>
      <BottomNavigation />
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/35 bg-opcity-20 transition-opacity"
          onClick={() => setIsOpen(false)} // Clicking outside will close the drawer
        ></div>
      )}
    </div>
  );
}
