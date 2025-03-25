import clsx from "clsx";
import { Calendar1, MapPin, Star } from "lucide-react";
import React, { useRef, useState } from "react";
import Slider, { Settings } from "react-slick";

export default function BarbershopRecommended() {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const sliderRef = useRef<Slider | null>(null);

  const settings: Settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4500,
    afterChange: (current: number) => setActiveSlide(current),
  };

  const handleDotClick = (index: number) => {
    setActiveSlide(index);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl font-bold">Most recommended</h2>

      <Slider ref={sliderRef} {...settings} className="">
        {Array.from({ length: 6 }).map((item, index) => (
          <div key={index} className="px-1">
            <div className="flex flex-col gap-3">
              <div className="h-[216px] rounded relative overflow-hidden">
                <img
                  className="w-full"
                  src="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="Sunset in the mountains"
                />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                <div className="absolute bottom-0 right-0 inline-flex items-center gap-2 bg-fuchsia-950 px-4 py-2 text-white font-bold text-sm rounded-tl-xl">
                  Booking
                  <Calendar1 className="h-5 w-5" />
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
                  <span className="text-gray-500 text-sm">{index}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex justify-end">
        {Array.from({ length: 6 }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            style={{
              width: activeSlide === index ? "12px" : "10px",
              height: activeSlide === index ? "12px" : "10px",
              borderRadius: "50%",
              border: "1px solid #CBD5E0",
              margin: "0 5px",
              cursor: "pointer",
            }}
            className={clsx(
              index === activeSlide ? "bg-fuchsia-950" : "#F9F9FF"
            )}
          />
        ))}
      </div>
    </div>
  );
}
