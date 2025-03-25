"use client";
import {
  ArrowLeft,
  BadgeInfo,
  Calendar1,
  Heart,
  MapPin,
  Scissors,
  Share2,
  Star,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
// data.js

const Data = [
  {
    title: "About",
    icon: <BadgeInfo className="h-6 w-6" />,
    content: `JavaScript is a lightweight, cross-platform, single-threaded, 
				and interpreted compiled programming language. It is also known
				as the scripting language for webpages. It is well-known 
				for the development of web pages, and many 
				non-browser environments also use it.`,
  },
  {
    title: "Service",
    icon: <Scissors className="h-6 w-6" />,
    content: `ReactJS is an open-source JavaScript library used to create 
				user interfaces in a declarative and efficient way. 
				It is a component-based front-end library responsible only
				for the view layer of a Model View Controller(MVC) architecture. 
				Before you start learning ReactJS, we assume that you have knowledge of 
				HTML, CSS and JavaScript.`,
  },
  {
    title: "Schedule",
    icon: <Calendar1 className="h-6 w-6" />,
    content: `Node.js is an open-source and cross-platform runtime environment
				for executing JavaScript code outside a browser. NodeJS is not
				a framework and it’s not a programming language. 
				Node.js is used to build back-end services like APIs like
				Web App or Mobile App.`,
  },
  {
    title: "Review",
    icon: <Heart className="h-6 w-6" />,
    content: `ReactJS is a popular JavaScript library for building user interfaces.
                It is used for creating single-page applications (SPAs) and
                it has been developed by Facebook. ReactJS uses a virtual DOM
                to update the user interface in a performant and efficient manner.
                ReactJS is known for its simplicity, reusability, and
                flexibility, making it suitable for building large-scale applications.`,
  },
];

export default function Page() {
  const [visibleTab, setVisibleTab] = React.useState(0);
  const router = useRouter();

  return (
    <div>
      <div className="container flex flex-col gap-7">
        <div className="fixed top-0 z-50 bg-white w-full p-2 flex items-center gap-x-4">
          <button
            onClick={() => router.push(`/home`)}
            className="cursor-pointer"
          >
            <ArrowLeft />
          </button>
          <h1 className="font-bold text-base">Detail Barber</h1>
        </div>
        <div className="flex flex-col gap-3 mt-10">
          <div className="h-[216px] rounded relative overflow-hidden">
            <img
              className="w-full"
              src="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Sunset in the mountains"
            />
            <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
            <div className="absolute top-0 right-0 inline-flex items-center gap-2 bg-fuchsia-950 px-4 py-2 text-white font-bold text-sm rounded-bl-xl">
              Open
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-base font-bold text-wrap">
              Alana Barbershop - Haircut massage & Spa
            </h2>
            <div className="flex items-center gap-1">
              <MapPin className="h-5 w-5 text-fuchsia-950" />
              <span className="text-gray-500 text-sm">Yogyakarta</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 text-fuchsia-950" />
              <span className="text-gray-500 text-sm">4.5</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-10">
          <div className="flex flex-col items-center gap-1">
            <MapPin className="h-9 w-9 text-fuchsia-950" />
            <span className="text-sm font-bold">Maps</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Share2 className="h-9 w-9 text-fuchsia-950" />
            <span className="text-sm font-bold">Share</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Heart className="h-9 w-9 fill-red-500" />
            <span className="text-sm font-bold">Favorite</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-1 bg-indigo-100 text-fuchsia-950">
          {Data.map((item, index) => (
            <div key={index} className="container">
              <button
                className={`  px-3 inline-flex items-center gap-1 py-1.5 text-sm rounded-md ${
                  visibleTab === index
                    ? "text-fuchsia-950 border border-fuchsia-950"
                    : "text-[#8683A1]"
                }`}
                onClick={() => setVisibleTab(index)}
              >
                {item.icon}
                {item.title}
              </button>
            </div>
          ))}
        </div>
        <div className="container">
          <p>{Data[visibleTab].content}</p>
        </div>
      </div>
    </div>
  );
}
