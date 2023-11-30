import mongoose from "mongoose";
const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    seller: { type: mongoose.Schema.Types.ObjectID, ref: "User" },
    stockType: { type: Array, required: true },
    stocksInvolved: { type: Array, required: true },
    primaryTags: { type: Array, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    calculatedProfit: { type: String, required: true },
    deliveryMethod: { type: String, required: true },
    pdfUpload: { type: String, required: false },
    streamingDate: { type: String, required: false },
    streamingTime: { type: String, required: false },
    streamingLink: { type: String, required: false },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
    thumbnail: { type: String, required: true },
    reviews: [reviewSchema],
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model("Product", productSchema);

export default Product;
