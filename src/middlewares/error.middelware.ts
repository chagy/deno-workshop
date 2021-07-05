import {
  bgRed,
  Context,
  isHttpError,
  printf,
  rgb24,
  sprintf,
  Status,
} from "../../deps.ts";
import config from "../config/config.ts";

const error = async (context: Context, next: () => Promise<unknown>) => {
  try {
    await next();
  } catch (error) {
    let message = error.message;
    const status = error.status || error.statusCode ||
      Status.InternalServerError;
    const isEnvDelelop = config.env === "dev" || config.env === "develop" ||
      config.env === "development";

    if (!isHttpError(error)) {
      message = isEnvDelelop ? message : "Internal Server Error";
    }

    if (isEnvDelelop) {
      console.log(bgRed(rgb24(sprintf("%j", error), 0xffffff)));
    }

    context.response.status = status;
    context.response.body = { status, message };
  }
};

export default error;
