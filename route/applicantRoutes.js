const express = require("express");
const router = express.Router();
const {
  createApplication,
  getAllApplication,
} = require("../controller/applicantController");

router.post("/new", createApplication);
router.get("/", getAllApplication);

module.exports = router;
