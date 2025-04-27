import React from "react";
import UspCard from "./UspCard";
import { uspData } from "../../../data/usp";
const USP = () => {
  return (
    <div className="my-12 relative">
      <div className="[clip-path:polygon(29%_0,100%_7%,100%_96%,72%_100%,0_96%,0_5%)] bg-darkBlue/10 absolute inset-0 scale-y-110"></div>
      <div className="max-w-maxContent w-11/12 mx-auto flex flex-col text-darkBlue gap-12">
        <h2 className="text-darkBlue text-5xl font-semibold text-center">
          What makes us so special?
        </h2>
        <div className="flex gap-8">
          {/* left usp */}
          <div className="flex flex-col gap-6">
            <h3 className="text-[32px] font-semibold text-center ">
              The 10-20-30 Rule at EZ
            </h3>
            <div className=" flex gap-8 items-center">
              <div className="flex flex-col items-center gap-2">
                <div className="rounded-full bg-darkBlue w-4 aspect-square"></div>
                <div className="bg-darkBlue/60 w-[5px] rounded-lg h-40"></div>
                <div className="rounded-full bg-darkBlue w-4 aspect-square"></div>
                <div className="bg-darkBlue/60 w-[5px] rounded-lg h-40"></div>
                <div className="rounded-full bg-darkBlue w-4 aspect-square"></div>
              </div>
              <div className="flex flex-col gap-[72px]">
                <p className="text-[80px] font-bold">
                  10<span className="text-[28px]">Minutes</span>
                </p>
                <p className="text-[80px] font-bold">
                  20<span className="text-[28px]">Minutes</span>
                </p>
                <p className="text-[80px] font-bold">
                  30<span className="text-[28px]">Minutes</span>
                </p>
              </div>
              <div className="flex flex-col justify-between h-full">
                <div className="text-[28px] bg-richblack-5 py-4 w-72 grid place-items-center text-center rounded-xl h-28">
                  Acknowledge <br /> Request
                </div>
                <div className="text-[28px] bg-richblack-5 py-4 w-72 grid place-items-center rounded-xl h-28 ">
                  Allocate Experts
                </div>
                <div className="text-[28px] bg-richblack-5 py-4 w-72 grid place-items-center rounded-xl h-28 ">
                  Begin Assignment
                </div>
              </div>
            </div>
          </div>
          {/* middle line */}
          <div className="border-borderBlue border"></div>
          {/* right usp */}
          <div className="grid grid-rows-2 grid-cols-2 flex-grow gap-3.5">
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
