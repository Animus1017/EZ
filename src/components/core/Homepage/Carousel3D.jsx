import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Carousel3D.css";
import { offeringSlider } from "../../../data/OfferingSlider";

const Carousel3D = () => {
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
          slidesPerView={3}
          spaceBetween={-50}
          coverflowEffect={{
            rotate: 0,
            stretch: 50,
            depth: 250,
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
        >
          {offeringSlider.map((item, index) => (
            <SwiperSlide key={item.id} className="transition-all duration-300">
              {({ isActive, isPrev, isNext }) => (
                <div
                  className={`flex flex-col gap-5 text-white items-center w-[500px] transition-all duration-500 ${
                    isActive
                      ? "opacity-100 scale-100"
                      : isPrev || isNext
                      ? "opacity-40 scale-95"
                      : "opacity-0 scale-90"
                  }`}
                >
                  {/* Title with dynamic alignment */}
                  <h4
                    className={`text-xl uppercase transition-all duration-300 w-full
                      ${
                        isActive
                          ? "text-center opacity-100 text-[32px]"
                          : isPrev
                          ? "text-left opacity-40"
                          : "text-right opacity-40"
                      }`}
                  >
                    {item.title}
                  </h4>

                  <p
                    className={`transition-opacity duration-300 w-full text-center
                    ${isActive ? "opacity-100 " : "opacity-0"}`}
                  >
                    {item.description}
                  </p>

                  <div
                    className={`mx-auto w-[500px] aspect-square rounded-lg border flex flex-col 
                    bg-gradient-to-r from-[#202020] via-[#3b3a3a] to-[#050505] p-4 border-white 
                    overflow-hidden transition-all duration-300 
                    ${isActive ? "opacity-100" : "opacity-40"}`}
                  >
                    <div className="flex">
                      <div className="flex flex-col gap-3 flex-grow">
                        <h3
                          className={`text-white text-2xl
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
                        className="w-10"
                      />
                    </div>
                    <div className="flex-grow flex items-center px-2">
                      <div className="flex flex-wrap gap-8 justify-center">
                        {item.card.content.map((c) => (
                          <div
                            className="flex flex-col gap-3 justify-center items-center"
                            key={c.id}
                          >
                            <img
                              src={c.icon}
                              alt={c.title}
                              className="w-14 aspect-square"
                            />
                            <span className="text-center">{c.title}</span>
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
