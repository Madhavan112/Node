const Event = require('events');
const logEvent =require('./logEvent')
const eventEmitter = new Event();
eventEmitter.on('log',logEvent)
eventEmitter.emit('log',"Ipl is Started");
