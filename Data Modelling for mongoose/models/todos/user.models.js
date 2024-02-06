import mongoose from "mongoose"
// mongoose helps in creating schema
// Schema is a fun which takes obj
const userSchema = new mongoose.Schema(
  {
    username : {
      type: String,
      required: true, // this means the field cannot be empty
      unique: true , // makes sure that the username throughout  the app remains unique
      lowercase: true,
    },
    email : {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    }
  }, {timestamps : true}
)
// model takes two parameter, what model and in which basis

export const User = mongoose.model("User", userSchema)
// model name = "User"
// based on userSchema 

// model name becomes plural in database (mongodb), its a standarised  way to represent it in mongodb, "Todo" -> todos