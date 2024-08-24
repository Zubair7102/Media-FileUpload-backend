const express = require("express");
const router = express.Router();

const {imageUpload, localFileUpload, videoUpload, imageSizeReducer} = require("../controllers/fileUpload")

// api routes
router.post("/localFileUpload", localFileUpload);
router.post("/imageUpload", imageUpload);
router.post("/videoUpload", videoUpload);
router.post("/imageSizeReducer", imageSizeReducer);

// exporting the router
module.exports = router;