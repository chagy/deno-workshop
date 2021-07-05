import { Router } from "../../deps.ts";
import productController from "../controllers/product.controller.ts";

const router = new Router({
  prefix: "/product",
});

router.get("/", productController.getProducts);
router.get("/:id", productController.getProduct);

export default router;
