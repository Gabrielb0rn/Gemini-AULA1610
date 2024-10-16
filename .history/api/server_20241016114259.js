import fastify from "fastify";
    
const server = fastify();

server.get('/', () => {
    return  'neymar neymar' ;

});

server.listen({
    port: 3000
})

