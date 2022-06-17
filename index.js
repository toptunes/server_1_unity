const WebSocket = require('ws')
const wss = new WebSocket.Server({port:8080},()=>{
    console.log('server started')
})

wss.on('connection',(ws)=>{
    ws.on('message',(data)=>{
        console.log('data received %o',data.toString())

        ws.send(data)
        ws.send("aleyke salam")
    })

})

wss.on('listening',()=>{
    console.log('server is listening on port 8080')
})