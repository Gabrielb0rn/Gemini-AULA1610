import fastify from "fastify";
    
const server = fastify();

server.get('/', () => {
    return 
});

server.listen({
    port: 3000
})

