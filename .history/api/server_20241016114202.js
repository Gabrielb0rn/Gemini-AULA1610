import fastify from "fastify";
    
const server = fastify();

server.get('/', () => {
    return 'world' ;
});

server.listen({
    port: 3000
})

