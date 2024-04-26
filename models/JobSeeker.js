const mongoose = require("mongoose")

const jobseekerschema = new mongoose.Schema({
    fullname: {
      type: String,
      required: true
    },
    gender: {
      type: String,
      required:true,
      enum: ['male', 'female', 'others']    // enumaration : if the value is out of the given value throws the error
    },
    dateofbirth: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    contact: {
        type: String,
        required: true,
        unique:true
      },
  });

const jobseeker = mongoose.model('jobseeker', jobseekerschema);     // model contains 2 arguments (collection name, schema)

module.exports = jobseeker;