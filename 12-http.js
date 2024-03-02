const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('welcome to our home page')
    }else if(req.url === '/about'){
        res.end('here is about')
    }else{
    res.end(`
    <h1>OOpss!!</h1>
    <p> we cant find your page</p>\
    <a href = "/">back home</a>`
    
    )}

})

server.listen(3001)