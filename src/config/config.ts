const env = Deno.env.toObject();
const PORT = env.PORT || "7000";
const HOST = env.HOST || "127.0.0.1";
const ENV = env.ENV || "develop";

const config: ({
  port: string;
  host: string;
  env: string;
}) = {
  port: PORT,
  host: HOST,
  env: ENV,
};

export default config;
