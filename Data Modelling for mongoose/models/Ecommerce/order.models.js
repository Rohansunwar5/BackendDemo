import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product"
  },
  quantity: {
    type: Number,
    required: true,
  }
})

const orderSchema = new mongoose.Schema({
  orderPrice: {
    type: Number,
    required: true,
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  orderItems: {
    type:[orderItemSchema] // Taking it from the mini  Schema 

  },
  address: {
    type: String,
    required: true,

  },
  status: {
    type: String,
    enum: ["Pending", "Cancelled", "Delivered"],// in this field we can only choose from these values 
    default: "Peding",
  }
} , { timestamps: true})

export const Order = mongoose.model("Order", orderSchema)