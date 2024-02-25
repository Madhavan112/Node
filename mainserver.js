const http =require("http")
const fs = require('fs');
// const { resolveSoa } = require("dns");
const PORT =3000;
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type': 'text/html'})
    fs.readFile('index.html',(err,data)=>{
        if(err){
            res.writeHead("404");
            res.write("Page Not Found");
        }
        else
        res.write(data);
        res.end();
    })

})
server.listen(PORT,(err)=>{
    if(err) console.error(err);
    else console.log("Server is started at the  "+PORT);
})