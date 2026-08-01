import mongoose from "mongoose";

const product_model = new mongoose.Schema({
  description: {
    required: true,
    type: String,
    
  },
  
  name: {
    required: true,
    type: String,
  },

  productImage: {
    type:[jpg,png,]
  },
  price: {
    type: Number,
    default:0
  },
  stock: {
    default:0,
    type: Number
    
    
  },
  category: {
    type:mongoose.Schema.type.ObjectId,
    ref: "Categrie",
    required:true
  },

  owner: {
    
    type: mongoose.Schema.type.ObjectId,
    ref:"User"

  }

}),

export const Product = mongoose.model('Product', product_model);
