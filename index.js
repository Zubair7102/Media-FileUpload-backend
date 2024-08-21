// app create
const express = require('express');
const app = express();

// PORT finding 
require("dotenv").config();
const PORT = process.env.PORT || 3000;


// add middleware
app.use(express.json());
const fileUpload = require("express-fileupload");
app.use(fileupload());

// connect with Db


// connect with cloud


// api route mounting


// activate server