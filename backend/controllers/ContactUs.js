const mailSender = require("../utils/mailSender");
const { contactUsConfirmation } = require("../mailTemplates/contactTemplate");
const Contact = require("../model/Contact");
require("dotenv").config();

exports.contactUs = async (req, res) => {
  const { name, email, phone_no, country_code, message, service, promotion } =
    req.body;
  console.log(req.body);

  if (!name || !email || !phone_no || !service || !country_code)
    return res
      .status(400)
      .json({ success: false, message: "Please fill all required fields" });

  try {
    const existingContact = await Contact.findOne({ email });
    if (existingContact) {
      existingContact.name = name;
      existingContact.phone_no = phone_no;
      existingContact.service = service;
      if (message) existingContact.message = message;
      if (country_code) existingContact.country_code = country_code;
      if (promotion !== undefined) existingContact.promotion = promotion;
      await existingContact.save();
    } else {
      const contactMessage = {
        name,
        email,
        country_code,
        phone_no,
        message,
        service,
        promotion: promotion || false,
      };
      const newContact = new Contact(contactMessage);
      await newContact.save();
    }

    const userMailResponse = await mailSender(
      email,
      "We've Received Your Message!",
      contactUsConfirmation(name)
    );

    if (!userMailResponse) {
      return res
        .status(500)
        .json({ success: false, message: "Failed to send email" });
    }

    return res.status(200).json({ success: true, message: "Message sent" });
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to process your request",
      error: error.message,
    });
  }
};
