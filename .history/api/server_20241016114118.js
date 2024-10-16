import fastify from "fastify";
    
const server = fastify();

server.get('/', () => {
    return { hello: 'world' };
});

server.listen({
    port: 3000
})

