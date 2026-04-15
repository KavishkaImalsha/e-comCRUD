import express from 'express'
import { createProduct, getProduct, getProducts } from '../controllers/ProductController.js'

const productRouter = express.Router()

productRouter.post('/', createProduct)
productRouter.get('/', getProducts)
productRouter.get('/:id', getProduct)

export default productRouter