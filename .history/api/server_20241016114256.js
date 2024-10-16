import fastify from "fastify";
    
const server = fastify();

server.get('/', () => {
    return  'n' ;

});

server.listen({
    port: 3000
})

