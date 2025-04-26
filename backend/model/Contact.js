const { Schema, model } = require("mongoose");

const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  phone_no: {
    type: String,
    required: true,
    trim: true,
  },
  country_code: {
    type: String,
    required: true,
    trim: true,
    default: "+91",
  },
  message: {
    type: String,
    trim: true,
  },
  service: {
    type: [String],
    required: true,
    trim: true,
  },
  promotion: {
    type: Boolean,
    default: false,
  },
});

const Contact = model("Contact", contactSchema);
module.exports = Contact;
