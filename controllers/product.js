const Product = require("../models/product")

exports.addProduct = async (req, res) => {
    try {
      const { name, categoryId } = req.body;
  
      const product = new Product({ name, category: categoryId });
  
      
      const savedProduct = await product.save();
  
      res.status(201).json(savedProduct);
    } catch (error) {
      console.error('Error adding product:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  exports.getAllProducts = async (req, res) => {
    try {
      const product = await Product.find();
  
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  exports.getCategoryProducts = async (req, res) => {
    try {
      const categoryId = req.params.id;
  
      const products = await Product.find({ category: categoryId });

      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  exports.ProductCount = async (req, res) => {
    try {
      const count = await Product.aggregate([
        {
          $group: {
            _id: '$category',
            count: { $sum: 1 },
          },
        },
      ]);
  
      const CategoryCount = {};
      count.forEach((entry) => {
        CategoryCount[entry._id.toString()] = entry.count;
      });
  
      res.status(200).json(CategoryCount);
    } catch (error) {
     
      res.status(500).json({ error: 'Internal server error' });
    }
  };