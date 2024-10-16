import fastify from "fastify";
    
const server = fastify();

server.get('/');

server.listen({
    port: 3000
})

