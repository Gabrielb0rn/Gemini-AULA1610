import fastify from "fastify";
    
const server = fastify();

server.get('/', () => {
    return  'neymar neymar' ;

});

server.get('/flamengo', () => {
    return  'gabriel gabriel' ;

});

server.listen({
    port: 3000
})

