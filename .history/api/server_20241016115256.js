import fastify from "fastify";
    
const server = fastify();

server.get('/', () => {
    return  'neymar neymar' ;

});

server.get('/flamengo', () => {
    return  'flamengo flamengo' ;

});

server.get('/flamengo', () => {
    return  'flamengo flamengo' ;

});

server.listen({
    port: 3000
})

