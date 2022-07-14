const express = require('express');

const server = express();
const port = 6000;

let counter = 0;
server.use(
    express.urlencoded({
      extended: true,
    })
  );
  
  server.use(express.json());

server.get('/', (request, response) => {
    // console.log({...request});

    response.statusCode = 200;
    response.send("Mingala é noubi");
});

server.get('/count', (x, response) => {
    count++;

    response.statusCode = 200;
    response.send("Our current counting is: " + count);
});

server.get('/mingawa', (x, response) => {
    counter++;

    const answer = { pokemon: { name: "mingawa", weight: 304, height: 144, total: counter}};
    response.statusCode = 200;
    response.setHeader('content-type', 'application/json');
    
    response.json(answer);
});

server.post('/register', (request, response) => {

    const newUser = request.body

    /// Check user name and password below in the server console
    console.log({ user: newUser.user, pass: newUser.password })

    /// Register into a database, or in the local memory 

    response.send(JSON.stringify(newUser))
})

server.listen(3001, () => {
    console.log(" Server Is Listening that Mingala Is Noob");
})


// const express = require('express')