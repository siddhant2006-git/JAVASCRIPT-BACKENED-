import mongoose, { trusted } from "mongoose"

const hospitalSchema = new mongoose.Schema({
  name: {
    type: String,
    required:true,
  },
  address1: {
    type:String,
    required:true ,
  },
  address2 : {
    type:String,
    required:true
  },
  specialisedIn:{
    type:String,
    required:true
  }

})

export const hospital = mongoose.model("hospital", hospitalSchemaSchema)
