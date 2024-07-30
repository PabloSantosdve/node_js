/*
// Importa a função createServer do módulo 'http' do Node.js
import { createServer } from 'node:http'

// Cria um servidor HTTP
const server = createServer((request, response) => {
    // Escreve "Hello World" na resposta
    response.write('Hello World')

    // Finaliza a resposta, informando que todos os dados foram enviados
    return response.end()
})

// Faz o servidor escutar conexões na porta 3333
server.listen(3333)
*/


// Importa a função fastify do módulo 'fastify'
import { fastify } from 'fastify';

// Cria uma instância do servidor Fastify
const server = fastify();

// Define uma rota GET para a raiz ('/') que retorna 'Hello World'
server.post('/videos', () => {
    return 'Hello World';

/*Quando eu chamar o http://localhost:3333/videos eu vou estar criando um novo video*/

});

// Define uma rota GET para '/hello' que retorna 'Hello Pablão'
server.get('/videos', () => {
    return 'Hello Pablão';

/*Quando eu chamar o http://localhost:3333/videos eu vou estar criando um novo video*/
});

// Define uma rota GET para '/node' que retorna 'Hello Node'
server.put('/videos', () => {
    return 'Hello Node';

/*Quando eu chamar o http://localhost:3333/videos eu vou estar atualizando um video*/
});

// Inicia o servidor e faz com que ele escute na porta 3333
server.listen({
    port: 3333,
});


/* Tipos de metodos: GET, POST, PUT, DELETE, PATCH,*/