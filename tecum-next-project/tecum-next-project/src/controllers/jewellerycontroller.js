const Jewellery = require('../models/jewellery');

exports.getJewellery = async (req, res) => {
  try {
    const jewelleryItems = await Jewellery.findAll();
    res.json(jewelleryItems);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.addJewellery = async (req, res) => {
  try {
    const { name, description, price, stock, category, image_url } = req.body;
    const jewellery = await Jewellery.create({
      name,
      description,
      price,
      stock,
      category,
      image_url
    });

    res.status(201).json(jewellery);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
