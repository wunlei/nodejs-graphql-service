import "dotenv/config";
import { server } from "./server/server";

server.listen({ port: process.env.PORT }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
