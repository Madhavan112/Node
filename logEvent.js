const {v4 : uuid}= require("uuid");
const {format} = require("date-fns");
const fs = require("fs")
const fsPromise = require("fs").promises;
const path = require("path");

const logEvent = async (msg)=>{
    const dateTime = format(new Date(),"yyyy-MM-dd \t HH:mm:ss");
    const id =uuid();
    const info = `${id}\t ${dateTime}\t ${msg}\n`;
    try{
        if (!fs.existsSync(path.join(__dirname,"log")))
        await fsPromise.mkdir(path.join(__dirname,"log"))
        await fsPromise.appendFile(path.join(__dirname,"log","main.txt"),info);

    }
    catch(err){
        console.error(err);
    }
}
module.exports =  logEvent;