const express = require("express");
const router = express.Router();

const {imageUpload, videoUpload, imageReducerUpload, localFileUpload } = require("../controllers/fileUpload")

// api routes
router.post("/imageUpload", imageUpload);
router.post("/videoUpload", videoUpload);
router.post("/imageReducerUpload", imageReducerUpload);
router.post("/localFileUpload", localFileUpload);

// exporting the router
module.exports = router;