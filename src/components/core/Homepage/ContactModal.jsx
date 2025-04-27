import React, { useState, useRef, useEffect } from "react";
import modalBg from "../../../assets/modalbg/contactdesktopmodal.svg";
import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { useForm } from "react-hook-form";
import countrycode from "../../../data/countrycode.json";
import { offeringSlider } from "../../../data/OfferingSlider";
import { sendMessage } from "../../../services/operations/contactUsAPI";
import { PiWarningCircleFill } from "react-icons/pi";

const services = offeringSlider.map((offering) => offering.title);

const ContactModal = ({ setContactModal, initialSelectedService }) => {
  const [loading, setLoading] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [selectedServices, setSelectedServices] = useState(
    initialSelectedService ? [initialSelectedService] : []
  );
  const [selectedCountry, setSelectedCountry] = useState({
    code: "+91",
    country: "India",
  });

  const dropdownRef = useRef(null);
  const servicesDropdownRef = useRef(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowCountryDropdown(false);
      }
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target)
      ) {
        setShowServicesDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function to get country code (for flag display)
  const getCountryCode = (countryName) => {
    const countryMap = {
      India: "in",
      "United States": "us",
      "United Kingdom": "gb",
      Canada: "ca",
      Australia: "au",
    };

    // Extract first two letters or use mapping
    if (countryMap[countryName]) {
      return countryMap[countryName];
    }

    // Default to first two letters lowercase
    return countryName.substring(0, 2).toLowerCase();
  };
  const onSubmit = async (data) => {
    setLoading(true);
    await sendMessage(
      data.name,
      data.email,
      data.phone_no,
      selectedCountry.code,
      selectedServices,
      data.message,
      data.promotion
    );
    setContactModal(false);
    setLoading(false);
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        name: "",
        email: "",
        phone_no: "",
        country_code: "",
        service: [],
        message: "",
        promotion: false,
      });
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <div className="fixed inset-0 bg-white/10 flex items-center justify-center backdrop-blur-sm z-[1000] overflow-y-auto w-screen h-screen py-4 sm:py-6 md:py-8 lg:py-10 px-4">
      <div className="rounded-2xl overflow-hidden w-full max-w-5xl my-auto flex flex-col md:flex-row">
        {/* left side of form - regular display on md+ screens */}
        <div className="bg-gradient-hero p-4 w-full md:w-[45%] hidden md:block">
          <div className="text-white p-3 md:p-5 flex flex-col gap-3">
            <h2 className="text-2xl md:text-[32px] font-bold">
              Send us a brief
            </h2>
            <p className="text-lg md:text-2xl font-medium">
              Our team will get in touch with you within 10 Minutes!
            </p>
          </div>
          <img src={modalBg} alt="svg" className="w-full" />
        </div>

        {/* mobile version of left side - only visible on small screens */}
        <div className="bg-gradient-hero w-full md:hidden min-h-[150px] relative">
          {/* Solid background layer */}
          <div className="absolute inset-0 bg-gradient-hero"></div>

          {/* Background image on top of solid color */}
          <div
            className="absolute inset-0 bg-center bg-cover bg-no-repeat bg-contain mix-blend-soft-light"
            style={{
              backgroundImage: `url(${modalBg})`,
            }}
          ></div>

          {/* Content */}
          <div className="text-white p-4 flex flex-col gap-2 relative z-10">
            <h2 className="text-2xl font-bold">Send us a brief</h2>
            <p className="text-sm font-medium">
              Our team will get in touch with you within 10 Minutes!
            </p>
          </div>
        </div>

        <div className="bg-white w-full md:w-[55%] py-6 md:py-10 px-5 md:px-8 relative">
          {/* cross button */}
          <button
            disabled={loading}
            onClick={() => (loading ? false : setContactModal(false))}
            className="hover:bg-darkBlue rounded-full p-1 transition-all duration-200 absolute right-1 top-1"
          >
            <RxCross2 className="text-black hover:text-white transition-all duration-200 text-2xl" />
          </button>

          {/* form-right side */}
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* name input */}
            <input
              type="text"
              className="text-base md:text-lg border border-borderGrey p-3 rounded-lg w-full outline-none focus:border-dullGrey transition-all duration-150"
              placeholder="Name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="-mt-1 text-sm text-white bg-rose-700 py-1 px-3 rounded-2xl w-fit flex items-center gap-[2px]">
                <PiWarningCircleFill className="text-base" /> Name is required
              </span>
            )}
            {/* country code dropdown */}
            <div className="flex">
              <div className="relative w-fit" ref={dropdownRef}>
                <div
                  className="flex items-center gap-2 border border-borderGrey rounded-l-lg p-3 cursor-pointer h-full"
                  onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                >
                  <img
                    src={`https://flagcdn.com/20x15/${getCountryCode(
                      selectedCountry.country
                    )}.png`}
                    alt={selectedCountry.country}
                    className="h-4 w-5 object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                  <IoIosArrowDown
                    className={`text-gray-900 font-bold text-sm transition-transform duration-300 ${
                      showCountryDropdown ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {showCountryDropdown && (
                  <div className="absolute top-full left-0 mt-1 w-64 max-h-60 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    {countrycode.map((country, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 p-2 transition-all duration-150 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setSelectedCountry(country);
                          setShowCountryDropdown(false);
                        }}
                      >
                        <img
                          src={`https://flagcdn.com/20x15/${getCountryCode(
                            country.country
                          )}.png`}
                          alt={country.country}
                          className="h-4 w-5 object-cover"
                          onError={(e) => {
                            e.target.style.display = "none";
                          }}
                        />
                        <span>{country.code}</span>
                        <span className="text-sm text-gray-600 truncate">
                          {country.country}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <input
                type="tel"
                className="w-[80%] flex-grow text-base md:text-lg p-3 border border-borderGrey rounded-r-lg focus:outline-none"
                placeholder="Mobile Number"
                {...register("phone_no", {
                  required: "Mobile Number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Please enter a valid 10-digit phone number",
                  },
                })}
              />
            </div>
            {errors.phone_no && (
              <span className="-mt-1 text-sm text-white bg-rose-700 py-1 px-3 rounded-2xl w-fit flex items-center gap-[2px]">
                <PiWarningCircleFill className="text-base" />{" "}
                {errors.phone_no.message}
              </span>
            )}

            {/* email input */}
            <input
              type="email"
              className="text-base md:text-lg border border-borderGrey p-3 rounded-lg w-full outline-none focus:border-dullGrey transition-all duration-150"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="-mt-1 text-sm text-white bg-rose-700 py-1 px-3 rounded-2xl w-fit flex items-center gap-[2px]">
                <PiWarningCircleFill className="text-base" /> Email is required
              </span>
            )}

            <div className="relative" ref={servicesDropdownRef}>
              <div
                className="text-base md:text-lg border border-borderGrey p-3 rounded-lg w-full cursor-pointer bg-white flex justify-between items-center"
                onClick={() => setShowServicesDropdown(!showServicesDropdown)}
              >
                <span className="text-gray-400">
                  {selectedServices.length > 0
                    ? `${selectedServices.length} service${
                        selectedServices.length > 1 ? "s" : ""
                      } selected`
                    : "Select Services"}
                </span>
                <IoIosArrowDown
                  className={`text-gray-900 font-bold text-xl transition-transform duration-300 ${
                    showServicesDropdown ? "rotate-180" : ""
                  }`}
                />
              </div>

              {showServicesDropdown && (
                <div className="absolute top-full left-0 mt-1 w-full bg-white border border-borderGrey rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className={`p-3 hover:bg-gray-50 cursor-pointer flex items-center justify-between`}
                      onClick={() => {
                        if (selectedServices.includes(service)) {
                          setSelectedServices((prev) =>
                            prev.filter((s) => s !== service)
                          );
                        } else {
                          setSelectedServices((prev) => [...prev, service]);
                        }
                      }}
                    >
                      <span className="text-gray-700">{service}</span>
                      <FaCheck
                        className={`text-lg ${
                          selectedServices.includes(service)
                            ? "text-gray-900"
                            : "text-gray-300"
                        }`}
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Chips display below dropdown */}
              {selectedServices.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedServices.map((service, index) => (
                    <div
                      key={index}
                      className="text-base md:text-lg text-darkBlue border border-darkBlue px-2 py-[3px] rounded-3xl flex items-center gap-1"
                    >
                      {service}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedServices((prev) =>
                            prev.filter((s) => s !== service)
                          );
                        }}
                        className=""
                      >
                        <RxCross2 />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* message textarea */}
            <textarea
              rows={3}
              className="text-base md:text-lg border border-borderGrey p-3 rounded-lg w-full outline-none focus:border-dullGrey transition-all duration-150"
              placeholder="Message"
              {...register("message")}
            />

            <div className="flex items-center gap-2 mb-4">
              <input
                type="checkbox"
                id="promotion"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                {...register("promotion")}
              />
              <label
                htmlFor="promotion"
                className="text-gray-700 text-sm md:text-base"
              >
                I would like to receive promotional emails
              </label>
            </div>

            <button
              type="submit"
              className="text-white px-4 py-3 md:px-6 md:py-4 rounded-md bg-orange text-sm md:text-base"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
