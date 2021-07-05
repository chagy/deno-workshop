import { Application, bgRgb24, bold, green, Router } from "./deps.ts";
import router from "./src/routers/routers.ts";
import config from "./src/config/config.ts";
import middleware from "./src/middlewares/middleware.ts";

const app = new Application();
app.use(middleware.error);

router.init(app);

app.addEventListener("listen", ({ secure, hostname, port }) => {
  const protocol = secure ? "https://" : "http:";
  const url = `${protocol}${hostname}:${port}`;
  console.log(bold("Listening on: ") + green(url));
  console.log(bold("Env on: ") + bgRgb24(config.env, 0x8EFFAD));
});

await app.listen(`${config.host}:${config.port}`);
