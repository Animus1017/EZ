import React, { useState, useRef, useEffect } from "react";
import modalBg from "../../../assets/modalbg/contactdesktopmodal.svg";
import { RxCross2 } from "react-icons/rx";
import { HiCheck } from "react-icons/hi";
import { useForm } from "react-hook-form";
import countrycode from "../../../data/countrycode.json";
import { offeringSlider } from "../../../data/OfferingSlider";
import { sendMessage } from "../../../services/operations/contactUsAPI";

const services = offeringSlider.map((offering) => offering.title);

const ContactModal = ({ setContactModal }) => {
  const [loading, setLoading] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
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
    // Simple mapping for common countries
    const countryMap = {
      India: "in",
      "United States": "us",
      "United Kingdom": "gb",
      Canada: "ca",
      Australia: "au",
      // Simplified for brevity - in production, you'd need a complete mapping
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
    try {
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
    } catch (error) {
      console.log("Error in contact form:", error);
    }
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
    <div className="fixed inset-0 bg-white/10 flex items-center justify-center backdrop-blur-sm z-[1000] overflow-y-auto w-screen h-screen py-4 sm:py-6 md:py-8 lg:py-10">
      <div className="rounded-2xl overflow-hidden w-3/5 my-auto flex">
        <div className="bg-gradient-hero p-4 w-[45%]">
          <div className="text-white p-5 flex flex-col gap-3">
            <h2 className="text-[32px] font-bold">Send us a brief</h2>
            <p className="text-2xl font-medium">
              Our team will get in touch with you within 10 Minutes!
            </p>
          </div>
          <img src={modalBg} alt="svg" />
        </div>
        <div className="bg-white w-[55%] py-10 px-8 relative">
          <button
            disabled={loading}
            onClick={() => (loading ? false : setContactModal(false))}
            className="hover:bg-darkBlue rounded-full p-1 transition-all duration-200 absolute right-1 top-1"
          >
            <RxCross2 className="text-black hover:text-white transition-all duration-200 text-2xl" />
          </button>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="text"
              className="text-lg border border-borderGrey p-3 rounded-lg w-full"
              placeholder="Name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="-mt-1 text-xs text-pink-200 block mb-2">
                Name is required**
              </span>
            )}

            <div className="flex">
              <div className="relative w-[30%] sm:w-[20%]" ref={dropdownRef}>
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
                </div>

                {showCountryDropdown && (
                  <div className="absolute top-full left-0 mt-1 w-64 max-h-60 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    {countrycode.map((country, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
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
                className="w-[80%] flex-grow text-lg p-3 border border-borderGrey rounded-r-lg focus:outline-none"
                placeholder="Mobile Number"
                {...register("phone_no", {
                  required: "Mobile Number is required**",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Please enter a valid 10-digit phone number",
                  },
                })}
              />
            </div>
            {errors.phone_no && (
              <span className="-mt-1 text-xs text-pink-200 block mb-2">
                {errors.phone_no.message}
              </span>
            )}

            <input
              type="email"
              className="text-lg border border-borderGrey p-3 rounded-lg w-full"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="-mt-1 text-xs text-pink-200 block mb-2">
                Email is required**
              </span>
            )}

            <div className="relative" ref={servicesDropdownRef}>
              <div
                className="text-lg border border-borderGrey p-3 rounded-lg w-full cursor-pointer bg-white"
                onClick={() => setShowServicesDropdown(!showServicesDropdown)}
              >
                <span className="text-gray-400">
                  {selectedServices.length > 0
                    ? `${selectedServices.length} service${
                        selectedServices.length > 1 ? "s" : ""
                      } selected`
                    : "Select Services"}
                </span>
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
                      <div className="flex items-center gap-2">
                        <HiCheck
                          className={`text-lg ${
                            selectedServices.includes(service)
                              ? "text-blue-500"
                              : "text-gray-300"
                          }`}
                        />
                        <span className="text-gray-700">{service}</span>
                      </div>
                      <HiCheck
                        className={`text-lg ${
                          selectedServices.includes(service)
                            ? "text-blue-500"
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
                      className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm flex items-center gap-2"
                    >
                      {service}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedServices((prev) =>
                            prev.filter((s) => s !== service)
                          );
                        }}
                        className="text-blue-400 hover:text-blue-600 transition-colors"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {errors.service && (
              <span className="-mt-1 text-xs text-pink-200 block mb-2">
                Please select at least one service**
              </span>
            )}

            <textarea
              rows={3}
              className="text-lg border border-borderGrey p-3 rounded-lg w-full"
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
              <label htmlFor="promotion" className="text-gray-700">
                I would like to receive promotional emails
              </label>
            </div>

            <button
              type="submit"
              className="text-white px-6 py-4 rounded-md bg-orange"
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
