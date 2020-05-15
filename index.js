const server = require('./server.js');

const PORT = process.env.PORT || 5000;

server.listen(PORT, ()=>{
    console.log(`THE SERVER IS COMING FORM INSIDE THE LOCALHOST ${PORT}`)
   
})