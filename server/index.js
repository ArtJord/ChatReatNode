const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server, {cors: {origin: 'http://localhost:5173'}})

const PORT = 3001

io.on('connection', socket =>{
    console.log('Usuario conectado', socket.id);

    socket.on('disconnect', reason => {
        console.log('Usuario desconectado', socket.id)
    })

    socket.on('set_username', username => {
        socket.data.username = username
        
    })

    socket.on('message', text => {
        io.emit('Mensagem recebida', {
            text,
            authorId: socket.id,
            author: socket.data.username
        } )
    })
})

server.listen(PORT, () => console.log('server rodando...'))