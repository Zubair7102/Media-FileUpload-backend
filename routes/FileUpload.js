const express = require("express");
const router = express.Router();

const {imageUpload, videoUpload, imageReducerUpload, localFileUpload } = require("../controllers/fileUpload")

// api routes
router.post("/localFileUpload", localFileUpload);

// exporting the router
module.exports = router;