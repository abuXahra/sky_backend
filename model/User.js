const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
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

  nameOfSchoolG: { type: String },
  yearOfGraduateG: { type: String },
  courseOfStudyG: { type: String },

  selectedSupportType: { type: String },

  nameOfSchoolS: { type: String },
  courseOfStudyS: { type: String },
  levelS: { type: String },
});

module.exports = mongoose.model("User", UserSchema);
