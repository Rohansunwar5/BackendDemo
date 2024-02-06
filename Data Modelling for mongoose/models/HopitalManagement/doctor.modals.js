import mongoose from "mongoose";

const HourseWorkedIn = new mongoose.Schema({
  hours: {
    type: Number,
    required: true,
  },
  inHospitals: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hospital"
  } 
})

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required : true, 
  },
  salary: {
    type: String, 
    required: true,

  }, 
  qualification: {
    type: String,
    required: true ,
  },
  experienceInYears: {
    type: Number, 
    default : 0,
  },
  worksInHospitals: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
    } 
  ],
  hoursWorked: {
    type: [HourseWorkedIn]
  }

} ,{timestamps: true})

export const Doctor = mongoose.model("Doctor", doctorSchema)