const jobseekercontroller = require("./controllers/jobseekercontroller")
const admincontroller = require("./controllers/admincontroller")

const express = require("express")
const router = express.Router()

// job seeker routes
router.post("/insertjobseeker",jobseekercontroller.insertjobseeker)
router.post("/checkjobseekerlogin",jobseekercontroller.checkjobseekerlogin)

// admin routes
router.get("/viewjobseekers",admincontroller.viewjobseekers)
router.post("/checkadminlogin",admincontroller.checkadminlogin)
router.delete("/deletejobseeker/:email",admincontroller.deletejobseeker)


module.exports= router


