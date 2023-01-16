const { Router } = require("express");
const router = Router();
// const commonController = require("./controller/common/common.controller");

console.log("Loading server api routes");

// ENCRYPT
router.use("/encrypt", require("./controller/encrypt/encrypt.routes"));

// COMMON-DATA
// router.get("/Common/Common1", commonController.common1);

console.log("Server api routes loaded");

module.exports = router;
