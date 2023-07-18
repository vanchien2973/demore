const http = require ('http')
const fs = require('fs') //fs: file system
const host = 'localhost'
const port =  process.env.PORT || 3001
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/html")
    switch (req.url) {
        case "/":
            fs.readFile("index.html", (err, data) => {
                if(err){
                    console.err(err)
                } else {
                    res.writeHead(200)
                    res.write(data)
                    res.end()
                }
            })
            break
        case "/hanoi":
            fs.readFile("hanoi.html", (err, data) => {
                if(err){
                    console.err(err)
                } else {
                    res.writeHead(200)
                    res.write(data)
                    res.end()
                }
            })
            break
        case "/danang":
            fs.readFile("danang.html", (err, data) => {
                if(err){
                    console.err(err)
                } else {
                    res.writeHead(200)
                    res.write(data)
                    res.end()
                }
            })
            break
        case "/hcm":
            fs.readFile("hcm.html", (err, data) => {
                if(err){
                    console.err(err)
                } else {
                    res.writeHead(200)
                    res.write(data)
                    res.end()
                }
            })
            break
        case "/cantho":
            fs.readFile("cantho.html", (err, data) => {
                if(err){
                    console.err(err)
                } else {
                    res.writeHead(200)
                    res.write(data)
                    res.end()
                }
            })
            break
        default:
            res.write("<h1>484 - Not found</h1>")
            res.end()
            break
    }
})
server.listen(port, () => {
    console.log("Server running at http://" + host + ":" + port)
})