import Product from "../models/Product.js";

export const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({
      success: true
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};