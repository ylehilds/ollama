// IMPORT OUR DEPENDENCIES
import fastify from 'fastify';
import path from 'node:path';
import AutoLoad from '@fastify/autoload';
import { fileURLToPath } from 'node:url'; // Import to replicate __dirname behavior

// CREATE OUR SERVER OBJECT
const server = fastify({ logger: true });

// Replicate __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Auto-load routes using the correct path in ESM
server.register(AutoLoad, {
  dir: path.join(__dirname, 'routes'),
  options: {}
});

// GET THE SERVER LISTENING ON PORT 3000
server.listen({port: 3000}, (error, address) => {
  console.log(error ? error : `listening on ${address}`);
});
