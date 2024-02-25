const fs = require("fs")
if (fs.existsSync("./new")){
fs.rmdir('./new',(err)=>{
    if(err) console.error(err);
})
 }