import Product from "../models/product.model.ts";

let products: Array<Product> = [
  {
    id: 1,
    name: "mac book pro",
    price: 90000,
    stock: 0,
  },
  {
    id: 2,
    name: "iPhone XR",
    price: 45000,
    stock: 10,
  },
];

const getAllProducts = (): Array<Product> => products;

const getProductById = (id: string): Product | undefined => {
  const product: Product | undefined = products.find((product) =>
    product.id?.toString() === id
  );

  return product;
};

export default {
  getAllProducts,
  getProductById,
};
