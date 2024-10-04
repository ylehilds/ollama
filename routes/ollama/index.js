'use strict';

import ollama from 'ollama';

export default async function (fastify, opts) {
  fastify.post('/', async function (request, reply) {
    const question = request.body

    const response = await ollama.chat({
      model: 'llama3.1',
      messages: [{ role: 'user', content: question }],
    });
    console.log(response.message.content);
    return response.message.content;
  });
}
