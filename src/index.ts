import "dotenv/config";
import { server } from "./server/server";
import { DEFAULT_PORT } from "./server/server.constants";

server.listen({ port: process.env.PORT || DEFAULT_PORT }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
