import mongoose from "mongoose";

const doctor_Schema = new mongoose.Schema({
  name:{
    type :String,
    required:true,
  },
  salary:{
    type:Number,
    required:true,
  },  
  qualification:{
    type:String,
    required:true 

  },
  experienceInYear:{
    type:Number,
    deafault:0
  },
  worksInHospitals: [
    {
      type:mongoose.Schema.Types.ObjectTd,
      ref:"hospital",
    }
  ]


})

export const doctor = mongoose.model('doctor', doctor_Schema)
