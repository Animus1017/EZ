import { contactusEndpoint } from "../apis";
import { apiConnector } from "../apiConnector";
import toast from "react-hot-toast";

const { CONTACT_US_API } = contactusEndpoint;

export const sendMessage = async (
  name,
  email,
  phone_no,
  country_code,
  service,
  message,
  promotion
) => {
  const toastId = toast.loading("Loading...");
  console.log(service, name, email, phone_no, country_code, message, promotion);

  try {
    const response = await apiConnector("POST", CONTACT_US_API, {
      name,
      email,
      phone_no,
      country_code,
      service,
      message,
      promotion,
    });

    console.log("CONTACTUS RESPONSE............", response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    toast.success("Message Sent");
  } catch (error) {
    console.log("CONTACTUS ERROR............", error);
    toast.error("Failed To Send Message");
  }
  toast.dismiss(toastId);
};
