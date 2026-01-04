// import prisma supaya bisa query database
import { prisma } from "../lib/prisma.js";

// GET /product
export const getAllProducts = async (req, res) => {
  // ambil semua product
  const products = await prisma.product.findMany();

  // kirim ke client
  res.json(products);
};

// GET /product/:id
export const getProductById = async (req, res) => {
  // ambil id dari URL  
  const id = Number(req.params.id);

  // cari product berdasarkan id
  const product = await prisma.product.findUnique({
    where: { id },
  });

  // kalau tidak ketemu
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
};

// POST /product
export const createProduct = async (req, res) => {
  // ambil data dari body
  const { name, description, price, image } = req.body;

  // simpan ke database
  const product = await prisma.product.create({
    data: { name, description, price, image },
  });

  res.status(201).json({
    message: "Produk berhasil ditambahkan",
    data: product,
  });
};

// DELETE /product/:id
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

// PUT /product/:id (update SEMUA field)
export const updateProduct = async (req, res) => {
  const id = Number(req.params.id);
  const { name, description, price, image } = req.body;

  // validasi manual
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

// PATCH /product/:id (update sebagian)
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
