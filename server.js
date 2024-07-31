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
import {DatabaseMemory} from './database-memory.js'
import { title } from 'process';

// Cria uma instância do servidor Fastify
const server = fastify();

const database = new DatabaseMemory()

// Define uma rota POST para '/videos' que simula a criação de um novo vídeo
server.post('/videos', (request, reply) => {
    database.create({
		title: 'Video 01',
		description: 'Esse é o video 01',
		duration: 180
	})

	

	return reply.status(201).send()

    /* Quando eu chamar o http://localhost:3333/videos com o método POST,
       eu vou estar criando um novo vídeo */
});

// Define uma rota GET para '/videos' que simula a obtenção de uma lista de vídeos
server.get('/videos', () => {
    return 'Hello Pablão';
    /* Quando eu chamar o http://localhost:3333/videos com o método GET,
       eu vou estar obtendo a lista de vídeos */
});

// Define uma rota PUT para '/videos/:id' que simula a atualização de um vídeo específico

server.put('/videos/:id', () => {
    return 'Hello Node';

    /* Quando eu chamar o http://localhost:3333/videos/:id com o método PUT,
       eu vou estar atualizando um vídeo específico, identificado pelo :id */
});

// Define uma rota DELETE para '/videos' que simula a exclusão de um vídeo
server.delete('/videos', () => {
    return 'Hello Pablão';
    /* Quando eu chamar o http://localhost:3333/videos com o método DELETE,
       eu vou estar deletando um vídeo */
});

// Inicia o servidor e faz com que ele escute na porta 3333
server.listen({
    port: 3333,
});

/* Tipos de métodos HTTP:
   - GET: Recupera dados do servidor.
   - POST: Envia dados ao servidor para criar um novo recurso.
   - PUT: Atualiza um recurso existente no servidor.
   - DELETE: Remove um recurso do servidor.
   - PATCH: Aplica modificações parciais a um recurso no servidor. */
