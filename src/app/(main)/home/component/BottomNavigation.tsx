"use client";
import clsx from "clsx";
import { CalendarDays, House, MessageCircleMore, User } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const navItems = [
  { label: "Home", path: "/home", icon: House },
  { label: "Booking", path: "/booking", icon: CalendarDays },
  { label: "Chat", path: "/chat", icon: MessageCircleMore },
  { label: "Profile", path: "/profile", icon: User },
];

export default function BottomNavigation() {
  const pathName = usePathname();
  const router = useRouter();
  return (
    <div className="fixed bottom-0 left-0 z-40 w-full h-16 bg-white border-t border-gray-200">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        {navItems.map(({ label, path, icon: Icon }) => (
          <button
            key={path}
            type="button"
            className="inline-flex flex-col items-center justify-center px-5"
            onClick={() => router.push(path)}
          >
            <Icon
              className={clsx(
                "h-5 w-5 mb-1",
                pathName === path ? "text-fuchsia-950" : "text-gray-400"
              )}
            />
            <span
              className={clsx(
                "text-xs",
                pathName === path ? "text-fuchsia-950" : "text-gray-400"
              )}
            >
              {label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
