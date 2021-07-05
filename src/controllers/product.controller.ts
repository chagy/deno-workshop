import productService from "../services/product.service.ts";
import { Status } from "../../deps.ts";

const getProducts = ({ response }: { response: any }) => {
  response.body = productService.getAllProducts();
};

const getProduct = (
  { response, params }: { response: any; params: { id: string } },
) => {
  if (params && params.id) {
    const product = productService.getProductById(params.id);
    if (product) {
      response.body = product;
      return;
    }
  }
  throw ({
    status: Status.NotFound,
    message: `product id: ${params.id} not found`,
  });
};

export default {
  getProducts,
  getProduct,
};
