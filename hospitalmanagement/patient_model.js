
import mongoose from "mongoose"

const patientSchema = new mongoose.Schema({
  name: {
    type:String,
    required: true,
    
  },
  diagonsedWith:{
    type: String,
    required: true,
    

  },
  address: {
    type:String,
    required=true
  },
  age: {
    type:Number,
    required:true
  },
  bloodGroup: {
    type:String,
    enum:["M","N","O"],
    required:true,
  },
  admin: {
    type:mongoose.Schema.Types.ObjectId,
    ref:"hospital"
    
  }

})

export  const patient =mongoose.model("patient",patientSchema)