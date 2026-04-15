import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a product name'],
    trim: true
  },
  image: {
    type: String,
    required: [true, 'Please add an image URL']
  },
  colors: {
    type: [String],
    required: true
  },
  size: {
    type: [String],
    required: true
  },
  price: {
    type: Number,
    required: [true, 'Please add a price']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Product = mongoose.model('Product', ProductSchema);

export default Product