const express = require("express");
const { SendNotification, SendNotificationToDevice } = require("../controllers/pushnotification");
const router = express.Router()

router.get("/SendNotification",SendNotification)
router.post("/SendNotificationToDevice",SendNotificationToDevice)

module.exports = router;