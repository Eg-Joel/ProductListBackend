const Category = require("../models/category")

exports.addCategory = async (req, res) => {
try {
  const { name, parentId } = req.body;

  let category;
  if (parentId) {
    category = new Category({
      name,
      parentId,
    });
  } else {
    category = new Category({
      name,
    });
  }
  
    
   
    const savedCategory = await category.save();
    
  
    res.status(201).json(savedCategory);
} catch (error) {
    if (error.code === 11000 && error.keyPattern.name) {
        res.status(400).json({ error: 'Category name must be unique' });
      } else {
        res.status(500).json({ error: 'Internal server error' });
      }
}
}

exports.getMainCatList = async (req, res) => {
    try {
      
      const categories = await Category.find({ parentId: { $exists: false } });
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json(error);
    }
  };
  
  exports.getCategoryList = async (req, res) => {
    try {
      
      const categories = await Category.find();
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json(error);
    }
  };

  exports.getSubCategoryList = async (req, res) => {
    try {
      
     const parentId = req.params.id
  
      const subcategories = await Category.find({ parentId: parentId });

      res.status(200).json(subcategories);
    } catch (error) {
      res.status(500).json(error);
    }
  };