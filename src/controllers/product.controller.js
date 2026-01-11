import { prisma } from "../lib/prisma.js";

export const getAllProducts = async (req, res) => {
  const products = await prisma.product.findMany();
  res.json(products);
};

export const getProductById = async (req, res) => {
  const id = Number(req.params.id);

  const product = await prisma.product.findUnique({
    where: { id },
  });

  if (!product) {
    return res.status(404).send("Product not found");
  }

  res.json(product);
};

export const createProduct = async (req, res) => {
  const { name, description, price, image } = req.body;

  const product = await prisma.product.create({
    data: { name, description, price, image },
  });

  res.status(201).json({
    message: "Produk berhasil ditambahkan",
    data: product,
  });
};

export const deleteProduct = async (req, res) => {
  const id = Number(req.params.id);

  if (!id) {
    return res.status(400).json({ message: "ID tidak valid" });
  }

  await prisma.product.delete({
    where: { id },
  });

  res.json({ message: "Produk berhasil dihapus" });
};

export const updateProduct = async (req, res) => {
  const id = Number(req.params.id);
  const { name, description, price, image } = req.body;

  if (!name || !description || !price || !image) {
    return res.status(400).json({ message: "Field tidak lengkap" });
  }

  const product = await prisma.product.update({
    where: { id },
    data: { name, description, price, image },
  });

  res.json({
    message: "Produk berhasil diupdate",
    data: product,
  });
};

export const patchProduct = async (req, res) => {
  const id = Number(req.params.id);

  const product = await prisma.product.update({
    where: { id },
    data: req.body,
  });

  res.json({
    message: "Produk berhasil diupdate",
    data: product,
  });
};
