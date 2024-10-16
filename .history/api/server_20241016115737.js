import fastify from "fastify";
    
const server = fastify();

import GoogleGenerativeAI from "@google/generative-ai";

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI('AIzaSyDF4wniO0NW8hqopT_IL3hnhcZ0osphKIo');

async function run() {
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

  const prompt = "Conte uma piada, SEM TOMATES!"

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);

  return text;
}

server.get('/', () => {
    return  'Hello World' ;

});

server.get('/flamengo', () => {
    return  'flamengo flamengo' ;

});


server.listen({
    port: 3000
})

