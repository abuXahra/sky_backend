const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.post("/", userController.createUser);
router.get("/", userController.getUser);
router.get("/:id", userController.getSingleUser);
router.delete("/:id", userController.deleteUser);
router.put("/:id", userController.updateUser);

module.exports = router;
