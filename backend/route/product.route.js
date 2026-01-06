import express from "express";

import { createProduct, deleteProduct, getProducts, updateProduct , helloWorld } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/create", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router.get("/hello", helloWorld);


export default router;