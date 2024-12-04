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

exports.getSingleUser = async (req, res) => {
  try {
    const users = await User.findById(req.params.id);
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (user) {
      res.json({ message: "User deleted successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Error deleting User", error: err });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};
