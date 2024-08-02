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