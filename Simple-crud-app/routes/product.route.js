import express from "express";
import Product from "../models/product.model.js";
import { getProducts, getProduct, updateProduct, createProduct, deleteProduct } from '../controllers/product.controller.js'
const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProduct);  

router.post('/', createProduct);
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)


// module.exports = router;
export default router;