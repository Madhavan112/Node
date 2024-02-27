const  fs = require("fs");
const path = require("path");
const http = require("http");
const PORT = 30;

const server = http.createServer((req,res)=>{
    fs.readFile(path.join(__dirname,'index.html'),'utf-8',(err,data)=>{
        if(err) res.end("Error")
        res.write(data);
        res.end();
    })
    res.end();
   
})
server.listen(PORT,(err)=>{
    if(err) console.error(err);
    else console.log(`Server Started at the port ${PORT}`);
});