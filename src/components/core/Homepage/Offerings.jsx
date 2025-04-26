import React, { useState } from "react";
import Carousel3D from "./Carousel3D";
import ContactModal from "./ContactModal";

const Offerings = () => {
  const [contactModal, setContactModal] = useState(false);
  return (
    <div className=" bg-gradient-hero">
      <div className="max-w-maxContent mx-auto p-10 flex flex-col gap-4">
        <div className="flex flex-col gap-8">
          <h2 className="font-medium text-[32px] text-white text-center">
            70+ Offerings that allow you to Focus on your core tasks
          </h2>
          <Carousel3D />
        </div>
        <div className="flex flex-col gap-4 w-1/3 text-white mx-auto">
          <h5 className="text-2xl text-center">
            Send us your requirements, and get a response within 10 minutes
          </h5>
          <p className="text-white text-center">
            That's how we keep ourselves Faster than the Fastest
          </p>
          <button
            className="text-white px-6 py-4 rounded-md w-fit mx-auto bg-orange"
            onClick={() => setContactModal(true)}
          >
            GET IN TOUCH
          </button>
        </div>
      </div>
      {contactModal && <ContactModal setContactModal={setContactModal} />}
    </div>
  );
};

export default Offerings;
