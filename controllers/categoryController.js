const { PrismaClient } = require('../generated/prisma');

const prisma = new PrismaClient();

exports.createCategory = async (req, res) => {
  try {
    if (!req.body.name) {
      return res.status(422).json({ error: 'Category name is required' });
    }
    const category = await prisma.category.create({
      data: {
        name: req.body.name,
      },
    });

    if (category) {
      return res
        .status(201)
        .json({ message: 'Category created successfully', category });
    } else {
      return res.status(400).json({ message: 'Category not created' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
