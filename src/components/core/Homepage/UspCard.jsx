import React from "react";
import { Link } from "react-router-dom";
import commonIcons from "../../../assets/uspIcons/common.svg";

const UspCard = ({ title, icon, description }) => {
  const linkPath = title.toLowerCase().split(" ").join("-");

  return (
    <div className="perspective h-48 sm:h-52 md:h-60 w-full my-auto relative">
      <img
        src={icon}
        className="absolute -top-[17%] left-1/2 -translate-x-2/4 z-0 scale-125 sm:scale-150"
      />
      <Link
        to={linkPath}
        className="relative group focus:outline-none z-10"
        tabIndex={0}
      >
        <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus:[transform:rotateY(180deg)]">
          {/* before flip */}
          <div className="absolute inset-0 bg-gradient-hero w-full h-full text-white rounded-xl p-2 sm:p-3 md:p-4 [backface-visibility:hidden] flex flex-col justify-between shadow-[0_10px_25px_-5px_rgba(31,41,55,0.5)]">
            <div className="flex justify-between items-start transition-opacity duration-500 group-hover:opacity-0 group-focus:opacity-0">
              <img src={icon} alt={title} className="w-8 sm:w-10 md:w-auto" />
              <img
                src={commonIcons}
                alt="common"
                className="filter brightness-0 invert w-6 sm:w-7 md:w-8 aspect-square"
              />
            </div>
            <div className="w-2/3 text-center mx-auto text-lg sm:text-xl md:text-2xl font-medium transition-opacity duration-500 group-hover:opacity-0 group-focus:opacity-0">
              {title}
            </div>
          </div>

          {/* after flip */}
          <div className="absolute inset-0 bg-gradient-hero w-full h-full text-white rounded-xl p-2 sm:p-3 md:p-4 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-between shadow-[0_10px_25px_-5px_rgba(31,41,55,0.5)]">
            <div className="flex flex-col gap-2 md:gap-3 transition-opacity duration-500 opacity-0 group-hover:opacity-100 group-focus:opacity-100 delay-150">
              <h4 className="text-center text-base sm:text-lg md:text-xl font-medium">
                {title}
              </h4>
              <p className="text-richblack-25 text-xs sm:text-sm md:text-base">
                {description}
              </p>
            </div>
            <Link
              to={linkPath}
              className="text-xs sm:text-sm text-white underline text-left transition-opacity duration-500 opacity-0 group-hover:opacity-100 group-focus:opacity-100 delay-150"
            >
              Read More
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default UspCard;
