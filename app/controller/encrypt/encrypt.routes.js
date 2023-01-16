const { Router } = require("express");
const router = Router();
const controller = require("./encrypt.controller");

router.post("/scb", async (req, res) => {
  try {
    const result = await controller.encryptPublicKey(req);
    console.log(`[RES] Encrypt Controller EncryptPublicKey Success`);
    res.json({
      resultCode: "20000",
      resultDescription: "Success",
      resultData: result,
    });
  } catch (error) {
    console.log(`[RES] Encrypt Controller EncryptPublicKey Failed`);
    res.status(500).json({
      resultCode: "50000",
      resultDescription: "System Error",
      resultData: error,
    });
  }
});

module.exports = router;
