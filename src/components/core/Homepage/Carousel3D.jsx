import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Carousel3D.css";
import { offeringSlider } from "../../../data/OfferingSlider";

const Carousel3D = ({ onActiveSlideChange }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(1);
  const [slidesPerView, setSlidesPerView] = useState(3);

  // Update slides per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    // Initial call
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-full flex flex-col items-center">
      <div className="w-full">
        <Swiper
          effect={"coverflow"}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={slidesPerView}
          spaceBetween={slidesPerView === 1 ? 0 : -50}
          coverflowEffect={{
            rotate: 0,
            stretch: slidesPerView === 1 ? 20 : 50,
            depth: slidesPerView === 1 ? 100 : 250,
            modifier: 1.5,
            slideShadows: false,
          }}
          pagination={{
            clickable: true,
            // Use standard bullets instead of dynamic bullets
            type: "bullets",
            dynamicBullets: false,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
          speed={800}
          loop={true}
          loopFillGroupWithBlank={true}
          loopAdditionalSlides={2}
          watchSlidesProgress={true}
          slideToClickedSlide={true}
          initialSlide={1}
          touchRatio={1.5}
          longSwipes={false}
          shortSwipes={true}
          resistance={true}
          resistanceRatio={0.85}
          onSlideChange={(swiper) => {
            // Get the real index considering the loop
            const realIndex = swiper.realIndex;
            setActiveSlideIndex(realIndex);
            if (onActiveSlideChange) {
              onActiveSlideChange(realIndex);
            }
          }}
        >
          {offeringSlider.map((item, index) => (
            <SwiperSlide key={item.id} className="transition-all duration-300">
              {({ isActive, isPrev, isNext }) => (
                <div
                  className={`flex flex-col gap-3 md:gap-5 text-white items-center w-full md:w-[400px] lg:w-[500px] transition-all duration-500 ${
                    isActive
                      ? "opacity-100 scale-100"
                      : isPrev || isNext
                      ? "opacity-40 scale-95"
                      : "opacity-0 scale-90"
                  }`}
                >
                  {/* Title with dynamic alignment */}
                  <h4
                    className={`text-lg md:text-xl uppercase transition-all duration-300 w-full
                      ${
                        isActive
                          ? "text-center opacity-100 text-xl md:text-2xl lg:text-[32px]"
                          : isPrev
                          ? "text-left opacity-40"
                          : "text-right opacity-40"
                      }`}
                  >
                    {item.title}
                  </h4>

                  <p
                    className={`transition-opacity duration-300 w-full text-center text-sm md:text-base
                    ${isActive ? "opacity-100 " : "opacity-0"}`}
                  >
                    {item.description}
                  </p>

                  <div
                    className={`mx-auto w-full md:w-[400px] lg:w-[500px] aspect-square rounded-lg border flex flex-col 
                    bg-gradient-to-r from-[#202020] via-[#3b3a3a] to-[#050505] p-2 md:p-4 border-white 
                    overflow-hidden transition-all duration-300 
                    ${isActive ? "opacity-100" : "opacity-40"}`}
                  >
                    <div className="flex">
                      <div className="flex flex-col gap-2 md:gap-3 flex-grow">
                        <h3
                          className={`text-white text-lg md:text-xl lg:text-2xl
                            ${
                              isActive
                                ? "text-center"
                                : isPrev
                                ? "text-left"
                                : "text-right"
                            }`}
                        >
                          {item.card.title}
                        </h3>
                        <div
                          className={`border border-white 
                            ${
                              isActive
                                ? "w-1/2 mx-auto"
                                : isPrev
                                ? "w-full ml-0"
                                : "w-full mr-0"
                            }`}
                        ></div>
                      </div>
                      <img
                        src={item.card.icon}
                        alt={item.title}
                        className="w-6 md:w-8 lg:w-10"
                      />
                    </div>
                    <div className="flex-grow flex items-center px-1 md:px-2">
                      <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-8 justify-center">
                        {item.card.content.map((c) => (
                          <div
                            className="flex flex-col gap-2 md:gap-3 justify-center items-center"
                            key={c.id}
                          >
                            <img
                              src={c.icon}
                              alt={c.title}
                              className="w-8 md:w-10 lg:w-14 aspect-square"
                            />
                            <span className="text-center text-xs md:text-sm lg:text-base">
                              {c.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel3D;
