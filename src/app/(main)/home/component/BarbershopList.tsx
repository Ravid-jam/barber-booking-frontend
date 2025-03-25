import { useState } from "react";
import { MapPin, SquareArrowUpRight, Star } from "lucide-react";
import { dataOnShop } from "@/app/components/data/barberShop";
import { useRouter } from "next/navigation";

export default function BarbershopList() {
  const [visibleCount, setVisibleCount] = useState(3);
  const totalItems = 4;

  const router = useRouter();

  return (
    <div className="flex flex-col gap-5">
      {dataOnShop.map(
        (item, index) =>
          index < visibleCount && (
            <div key={index} className="flex gap-5">
              <div className="h-28 w-28 shrink-0">
                <img
                  src={item.image}
                  className="h-full w-full object-cover object-center rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h2
                  className="text-base font-bold text-wrap"
                  onClick={() => {
                    router.push(`/detail`);
                  }}
                >
                  {item.title}
                </h2>
                <div className="flex items-center gap-1">
                  <MapPin className="h-5 w-5 text-fuchsia-950" />
                  <span className="text-gray-500 text-sm">{item.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 text-fuchsia-950" />
                  <span className="text-gray-500 text-sm">{item.rating}</span>
                </div>
              </div>
            </div>
          )
      )}
      <div className="flex justify-center">
        <button
          onClick={() => setVisibleCount(visibleCount === 3 ? totalItems : 3)}
          className="mt-3 inline-flex items-center gap-2 self-start px-3 py-2 border-2 cursor-pointer border-fuchsia-950 text-fuchsia-950 rounded-md"
        >
          {visibleCount === 3 ? "Show More" : "Show Less"}
          <SquareArrowUpRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
