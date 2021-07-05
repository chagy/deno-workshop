import productRouter from "./product.router.ts";

const init = (app: any) => {
  app.use(productRouter.routes());
};

export default {
  init,
};
