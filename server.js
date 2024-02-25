const fsPromise = require("fs").promises;
const path = require("path");
const fileOp = async ()=>{
  try{
  const data = await fsPromise.readFile(path.join(__dirname,"data","ipl.txt"),"utf-8");
  await fsPromise.writeFile(path.join(__dirname,"data","match.txt"),"First  match of ipl is csk vs rcb");
  await fsPromise.appendFile(path.join(__dirname,"data","match.txt"),"\n Expecting Daryl Mithchell to perform top charts");
  await fsPromise.rename(path.join(__dirname,"data","match.txt"),path.join(__dirname,"data","cskvsrcb.txt"))
  await fsPromise.unlink(path.join(__dirname,"data","cskvsrcb.txt"))
  console.log(data);
  }
  catch(err){
    console.error(err);
  }
}
fileOp();

process.on('uncaughtExpection',err=>{
  console.error(`There is an error .Please check it out my mate ${err}`);
  process.exit(1);
});
