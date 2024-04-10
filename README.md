## Scalar fastify bug repro

Steps to reproduce

1. Install dependencies with bun `bun install`
2. Run with `bun ./src/server`

There are two routes `/swagger` and `/docs` swagger works as expected but docs doesn't, in the browser it opens a blank white page and an error in the console

All the code for this is in `/src/server.ts`
