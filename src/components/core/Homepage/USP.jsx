import React from "react";
import UspCard from "./UspCard";
const usps = [
  {
    title: "Consistently High Quality",
    icon: "⭐⭐⭐",
    link: "/articles/high-quality",
  },
  {
    title: "Round the Clock Availability",
    icon: "⏰",
    link: "/articles/round-the-clock",
  },
  {
    title: "Faster than the Fastest",
    icon: "🏃",
    link: "/articles/faster-than-fastest",
  },
  {
    title: "Information Security",
    icon: "🌐 ISO",
    link: "/articles/information-security",
  },
];
const USP = () => {
  return (
    <div className="bg-[#f3f6fa] py-10 font-sans">
      <h1 className="text-center text-3xl font-bold text-[#1a2a4f] mb-8">
        What makes us so special?
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-start gap-12 max-w-6xl mx-auto">
        {/* Timeline */}
        <div className="flex-1 min-w-[320px] pr-0 md:pr-8 border-r-0 md:border-r-2 border-[#dbe3ef] relative">
          <h2 className="text-xl text-[#1a2a4f] mb-8 font-semibold">
            The 10-20-30 Rule at EZ
          </h2>
          <div className="relative pl-0">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-2 top-6 w-1 h-[calc(100%-2rem)] bg-[#1a2a4f] z-0 rounded"></div>
            {/* Timeline items */}
            {[
              { time: 10, step: "Acknowledge Request" },
              { time: 20, step: "Allocate Experts" },
              { time: 30, step: "Begin Assignment" },
            ].map((item, idx) => (
              <div
                key={item.time}
                className="flex items-center mb-12 relative z-10"
              >
                <div className="w-4 h-4 bg-[#1a2a4f] rounded-full mr-4 z-10"></div>
                <div>
                  <span className="text-3xl font-bold text-[#1a2a4f] mr-1">
                    {item.time}
                  </span>
                  <span className="text-base text-[#1a2a4f] font-medium">
                    Minutes
                  </span>
                </div>
                <div className="bg-[#e3e8f0] text-[#1a2a4f] text-base rounded-lg px-7 py-2 ml-8 min-w-[160px] text-center font-medium">
                  {item.step}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* USP Cards */}
        <div className="flex-1.2 grid grid-cols-1 sm:grid-cols-2 gap-8 pl-0 md:pl-12 w-full">
          {usps.map((usp, idx) => (
            <UspCard key={idx} {...usp} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default USP;
