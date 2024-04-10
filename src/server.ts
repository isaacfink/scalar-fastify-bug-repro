import Fastify from "fastify";
import { initServer } from "@ts-rest/fastify";
import { c } from "./c";
import { authContract } from "./modules/auth/contract";
import { generateOpenApi } from "@ts-rest/open-api";
import fastifySwagger from "@fastify/swagger";
import ScalarUi from '@scalar/fastify-api-reference'
import SwaggerUi from '@fastify/swagger-ui'
import { clientsContract } from "./modules/clients/contract";

export const contract = c.router({
    auth: authContract,
    clients:clientsContract
});

const openApiDocument = generateOpenApi(contract, {
  info: {
    title: "Posts API",
    version: "1.0.0",
  },
});

const app = Fastify()
  .register(fastifySwagger, {
    transformObject: () => openApiDocument,
  })
  .register(ScalarUi, {
    prefix: '/docs'
  })
  .register(SwaggerUi, {
    prefix: '/swagger'
  });

const s = initServer();

function main() {
  app.listen({ port: 3000, host:'127.0.0.1' }, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
  });
}

main();
