import fastify from "fastify";
    
const server = fastify();

server.get('/', () => {
    return  'Hello World' ;

});

server.get('/gemini', () => {
    run() ;

});

server.get('/flamengo', () => {
    return  'Flamengo Flamengo Flamengo Flamengo' ;

});


server.listen({
    port: 3000
})

