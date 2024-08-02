// Importa a função fastify do módulo 'fastify'
import { fastify } from 'fastify';
import {DatabaseMemory} from './database-memory.js'
import { title } from 'process';

// Cria uma instância do servidor Fastify
const server = fastify();

const database = new DatabaseMemory()

// Define uma rota POST para '/videos' que simula a criação de um novo vídeo
server.post('/videos', (request, reply) => {
    const{ title, description, duration} = request.body


    database.create({
		title,
		description,
		duration,
	})

	return reply.status(201).send()

    /* Quando eu chamar o http://localhost:3333/videos com o método POST,
       eu vou estar criando um novo vídeo */
});

// Define uma rota GET para '/videos' que simula a obtenção de uma lista de vídeos
server.get('/videos', (request) => {
    const search = request.query.search

    console.log(search)

    const videos = database.list(search)

    console.log(videos)

    return videos


    /* Quando eu chamar o http://localhost:3333/videos com o método GET,
       eu vou estar obtendo a lista de vídeos */
});

// Define uma rota PUT para '/videos/:id' que simula a atualização de um vídeo específico

server.put('/videos/:id', (request, reply) => {
    
    const videId = request.params.id
    const{ title, description, duration} = request.body

     database.update(videId, {
        title,
		description,
		duration,
    })


    /* Quando eu chamar o http://localhost:3333/videos/:id com o método PUT,
       eu vou estar atualizando um vídeo específico, identificado pelo :id */

    return reply.status(204).send()

});

// Define uma rota DELETE para '/videos' que simula a exclusão de um vídeo
server.delete('/videos', (request, reply) => {
    const videoId = request.params.id

    database.delete(videoId)

return reply.status(204).send()



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