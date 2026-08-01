import mongoose from "mongoose";

const orderitemSchema = new mongoose.Schema({
  productId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",

  },
  queueMicrotasktype:Number,
  required:true
})

const product_model = new mongoose.Schema({
  orderPrice: {
    type: Number,
    required: true,
    
  },
  customer: {
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  orderItems: {
    type:[orderitemSchema],
  },
  address: {
    type: String,
    required:true,

  },
  status: {
    type: String,
    enum: ['pending', 'shipped', 'delivered'],
    default: "pending"
  }



})

export const Order = mongoose.model('Order', product_model);  
