import express from 'express'
import { createProduct } from '../controllers/ProductController.js'

const productRouter = express.Router()

productRouter.post('/', createProduct)

export default productRouter