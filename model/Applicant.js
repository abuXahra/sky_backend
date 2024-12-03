const mongoose = require("mongoose");

const ApplicantSchema = mongoose.Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  shopAddress: { type: String, required: true },
  selectedCategory: { type: String, required: true },
  // Graduate fields
  nameOfSchoolG: { type: String },
  yearOfGraduateG: { type: String },
  courseOfStudyG: { type: String },
  // Entrepreneur fields
  selectedSupportType: { type: String },
  // Student fields
  nameOfSchoolS: { type: String },
  courseOfStudyS: { type: String },
  levelS: { type: String },
});

module.exports = mongoose.model("Applicant", ApplicantSchema);
