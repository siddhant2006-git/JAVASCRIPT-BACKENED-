import mongoose from "mongoose";

const categries_model = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    
  }

})


export const Categrie = mongoose.model('Categrie', categries_model);


  