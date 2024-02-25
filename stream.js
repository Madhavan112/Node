const fs = require("fs");
const path = require("path")
const rs= fs.createReadStream(path.join(__dirname,"data","iplWhole.txt"),{encoding :'utf-8' })
const ws= fs.createWriteStream(path.join(__dirname,"data","newiplWhole.txt"))
rs.on('data',(datachunk)=>{
  ws.write(datachunk);
})