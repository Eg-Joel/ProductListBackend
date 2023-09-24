const { addProduct, ProductCount, getAllProducts, getCategoryProducts } = require("../controllers/product");

const router = require("express").Router()

router.post("/addProduct", addProduct);

router.get("/getProducts", getAllProducts);

router.get("/getCategoryProducts/:id", getCategoryProducts);

router.get("/categoryCount", ProductCount);

module.exports = router;