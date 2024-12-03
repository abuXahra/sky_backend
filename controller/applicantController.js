const Applicant = require("../model/Applicant");

exports.createApplication = async (req, res) => {
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

    const newApplicant = new Applicant({
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

exports.getAllApplication = async (req, res) => {
  try {
    const applicants = await Applicant.find();
    res.status(200).json(applicants);
  } catch (err) {
    console.log(err);
  }
};
