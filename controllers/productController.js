const { Product } = require('../models');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve products' });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve product' });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { name, description, package, totalInPackage, image, size, harga, isReadyStock } = req.body;
    const product = await Product.create({
      name,
      description,
      package,
      totalInPackage,
      image,
      size,
      harga,
      isReadyStock
    });
    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create product' });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { name, description, package, totalInPackage, image, size, harga, isReadyStock } = req.body;
    const product = await Product.findByPk(req.params.id);

    if (product) {
      product.name = name || product.name;
      product.description = description || product.description;
      product.package = package || product.package;
      product.totalInPackage = totalInPackage || product.totalInPackage;
      product.image = image || product.image;
      product.size = size || product.size;
      product.harga = harga || product.harga;
      product.isReadyStock = isReadyStock !== undefined ? isReadyStock : product.isReadyStock;

      await product.save();
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update product' });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      await product.destroy();
      res.status(204).json({ message: 'Product deleted successfully' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete product' });
  }
};
