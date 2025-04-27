import React from "react";
import UspCard from "./UspCard";
import { uspData } from "../../../data/usp";
const USP = () => {
  return (
    <div className="my-12 relative">
      <div className="[clip-path:polygon(29%_0,100%_7%,100%_96%,72%_100%,0_96%,0_5%)] bg-darkBlue/10 absolute inset-0 scale-y-100 lg:scale-y-110"></div>
      <div className="max-w-maxContent w-11/12 mx-auto flex flex-col text-darkBlue gap-12">
        <h2 className="text-darkBlue text-5xl font-semibold text-center">
          What makes us so special?
        </h2>
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-6 xl:gap-8">
          {/* left usp */}
          <div className="flex flex-col gap-6">
            <h3 className="text-[32px] font-semibold text-center ">
              The 10-20-30 Rule at EZ
            </h3>
            <div className=" flex gap-3 sm:gap-4 xl:gap-8 items-center justify-between">
              {/* dot line */}
              <div className="flex flex-col items-center gap-2">
                <div className="rounded-full bg-darkBlue w-4 aspect-square"></div>
                <div className="bg-darkBlue/60 w-[5px] rounded-lg h-24 sm:h-40 lg:h-24 xl:h-28"></div>
                <div className="rounded-full bg-darkBlue w-4 aspect-square"></div>
                <div className="bg-darkBlue/60 w-[5px] rounded-lg h-24 sm:h-40 lg:h-24 xl:h-28"></div>
                <div className="rounded-full bg-darkBlue w-4 aspect-square"></div>
              </div>
              {/* minutes */}
              <div className="flex flex-col gap-[72px]">
                <p className="text-6xl sm:text-[80px] lg:text-6xl xl:text-[80px] font-bold">
                  10
                  <span className="text-2xl sm:text-[28px] lg:text-2xl xl:text-[28px]">
                    Minutes
                  </span>
                </p>
                <p className="text-6xl sm:text-[80px] lg:text-6xl xl:text-[80px] font-bold">
                  20
                  <span className="text-2xl sm:text-[28px] lg:text-2xl xl:text-[28px]">
                    Minutes
                  </span>
                </p>
                <p className="text-6xl sm:text-[80px] lg:text-6xl xl:text-[80px] font-bold">
                  30
                  <span className="text-2xl sm:text-[28px] lg:text-2xl xl:text-[28px]">
                    Minutes
                  </span>
                </p>
              </div>
              {/* usp box */}
              <div className="flex flex-col justify-between h-full gap-3 sm:gap-20 lg:gap-3 xl:gap-0">
                <div className="text-2xl sm:text-[28px] lg:text-xl xl:text-[28px] bg-richblack-5 p-3 sm:p-4 lg:p-3 xl:p-0 py-0 xl:py-4 w-full sm:w-72 lg:w-full xl:w-72 grid place-items-center text-center rounded-xl h-28">
                  Acknowledge <br className="" /> Request
                </div>
                <div className="text-2xl sm:text-[28px] lg:text-xl xl:text-[28px] bg-richblack-5 p-3 sm:p-4 lg:p-3 xl:p-0 py-0 xl:py-4 w-full sm:w-72 lg:w-full xl:w-72 grid place-items-center text-center rounded-xl h-28">
                  Allocate <br className="sm:hidden inline" /> Experts
                </div>
                <div className="text-2xl sm:text-[28px] lg:text-xl xl:text-[28px] bg-richblack-5 p-3 sm:p-4 lg:p-3 xl:p-0 py-0 xl:py-4 w-full sm:w-72 lg:w-full xl:w-72 grid place-items-center text-center rounded-xl h-28">
                  Begin <br className="sm:hidden inline" /> Assignment
                </div>
              </div>
            </div>
          </div>
          {/* middle line */}
          <div className="border-borderBlue border hidden lg:block"></div>
          {/* right usp */}
          <div className="grid grid-cols-1 sm:grid-cols-2 flex-grow gap-8 sm:gap-3.5">
            {uspData.map((item) => (
              <UspCard
                key={item.id}
                title={item.heading}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default USP;
