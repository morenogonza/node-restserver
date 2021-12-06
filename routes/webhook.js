const { Router } = require("express");
const { getDataWebhook } = require("../controllers/webhook");

const router = Router();

router.post("/", getDataWebhook);

module.exports = router;
