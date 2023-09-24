const { addCategory, getMainCatList, getSubCategoryList, getCategoryList } = require("../controllers/category");

const router = require("express").Router()

router.post("/create", addCategory);

//get main category has no parent
router.get("/mainCategory", getMainCatList);

//get all category has 
router.get("/getCategory", getCategoryList);

//get sub category 
router.get("/subCategory/:id", getSubCategoryList);

module.exports = router;