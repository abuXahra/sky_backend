const User = require("../model/User");

exports.createUser = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      shopAddress,
      selectedCategory,
      nameOfSchoolG,
      yearOfGraduateG,
      courseOfStudyG,
      selectedSupportType,
      nameOfSchoolS,
      courseOfStudyS,
      levelS,
    } = req.body;
    const newApplicant = new User({
      firstName,
      lastName,
      email,
      phoneNumber,
      shopAddress,
      selectedCategory,
      nameOfSchoolG,
      yearOfGraduateG,
      courseOfStudyG,
      selectedSupportType,
      nameOfSchoolS,
      courseOfStudyS,
      levelS,
    });
    const savedApplicant = await newApplicant.save();
    res.status(200).json(savedApplicant);
  } catch (err) {
    console.log(err);
  }
};

exports.getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
};
