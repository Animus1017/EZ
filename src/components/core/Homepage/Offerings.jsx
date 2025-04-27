import React, { useState } from "react";
import Carousel3D from "./Carousel3D";
import ContactModal from "./ContactModal";
import { offeringSlider } from "../../../data/OfferingSlider";

const Offerings = () => {
  const [contactModal, setContactModal] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(1);

  const handleActiveSlideChange = (slideIndex) => {
    setActiveSlideIndex(slideIndex);
  };

  const handleGetInTouch = () => {
    setContactModal(true);
  };

  return (
    <div className="bg-gradient-hero">
      <div className="max-w-maxContent w-11/12 mx-auto p-4 md:p-6 lg:p-10 flex flex-col gap-4">
        <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
          <h2 className="font-medium text-2xl md:text-[28px] lg:text-[32px] text-white text-center">
            70+ Offerings that allow you to Focus on your core tasks
          </h2>
          <Carousel3D onActiveSlideChange={handleActiveSlideChange} />
        </div>
        <div className="flex flex-col gap-3 md:gap-4 w-full md:w-2/3 lg:w-1/3 text-white mx-auto">
          <h5 className="text-xl md:text-2xl text-center">
            Send us your requirements, and get a response within 10 minutes
          </h5>
          <p className="text-white text-center text-sm md:text-base">
            That's how we keep ourselves Faster than the Fastest
          </p>
          <button
            className="text-white px-4 py-3 md:px-6 md:py-4 rounded-md w-fit mx-auto bg-orange text-sm md:text-base"
            onClick={handleGetInTouch}
          >
            GET IN TOUCH
          </button>
        </div>
      </div>
      {contactModal && (
        <ContactModal
          setContactModal={setContactModal}
          initialSelectedService={offeringSlider[activeSlideIndex]?.title}
        />
      )}
    </div>
  );
};

export default Offerings;
