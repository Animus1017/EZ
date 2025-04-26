import React from "react";

const UspCard = ({ title, icon, link, description }) => {
  return (
    <div className="perspective w-full h-[180px]">
      <a
        href={link}
        className="relative w-full h-full block group focus:outline-none"
        tabIndex={0}
      >
        <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus:[transform:rotateY(180deg)]">
          {/* Front */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a2f] to-[#1a2a4f] text-white rounded-xl p-8 pt-10 shadow-lg flex flex-col items-start [backface-visibility:hidden]">
            <div className="text-3xl mb-4">{icon}</div>
            <div className="text-lg font-semibold mb-2">{title}</div>
            <div className="absolute top-4 right-4 text-xl opacity-70">↗</div>
          </div>
          {/* Back */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a2a4f] to-[#0a1a2f] text-white rounded-xl p-6 pt-8 shadow-lg flex flex-col justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="text-lg font-semibold mb-2 text-left">{title}</div>
            <div className="text-sm text-left mb-4">{description}</div>
            <a
              href={link}
              className="text-white font-bold underline text-left hover:text-blue-300"
            >
              Read More
            </a>
          </div>
        </div>
      </a>
    </div>
  );
};

export default UspCard;
