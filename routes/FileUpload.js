const express = require("express");
const router = express.Router();

const {imageUpload, localFileUpload } = require("../controllers/fileUpload")

// api routes
router.post("/localFileUpload", localFileUpload);
router.post("/imageUpload", imageUpload);

// exporting the router
module.exports = router;