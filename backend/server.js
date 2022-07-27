const express = require('express');

const server = express();
const port = 6000;
server.use(
    express.urlencoded({
        extended: true,
    })
);

const users = { '0': { user: 'admin', pass: 'admin', access: "admin" }, '1': { user: 'dlmuller', pass: 'daan2589', access: "moderator" } }
let userAccess
let currentUser
let currentUserKEY
let currentUserAccess

server.use(express.json());



server.put('/user/:key', (request, response) => {
    const { key } = request.params
    const UserChange = (request.body)
    users[key] = UserChange
    response.statusCode = 200;
    response.json('Upgrade Successfull');
    console.log(request.params)
})
server.delete('/user/:key', (request, response) => {
    const { key } = request.params
    delete users[key]
    response.statusCode = 200;
    response.json('Delete Successfull');

})


server.get('/', (request, response) => {
    // console.log({...request});

    response.statusCode = 200;
    response.send("Basic CRUD aplication");
});

server.get('/useraccess', (request, response) => {


    response.statusCode = 200;
    console.log(currentUserAccess)
    response.send(currentUserAccess);
});

server.post('/register', (request, response) => {
    const newUser = request.body

    let fil = Object.values(users).filter(user => user.user == newUser.user)

    if
        (fil.length == 0) {
        users[parseInt(Object.keys(users).slice(-1)) + 1] = { user: newUser.user, pass: newUser.password, access: newUser.access }

        response.statusCode = 200;
        response.send(JSON.stringify(newUser))
    }
    else if
        (fil.length > 0) {
        console.log('user already registered')
        response.statusCode = 400;
        response.json(JSON.stringify("USER ALREADY REGISTERED"))

    }
    console.log({ user: newUser.user, pass: newUser.password, access: newUser.access })
})

server.post('/login', (request, response) => {

    const logUser = (request.body)
    let list = Object.entries(users)
    let filter = list.filter(user => user[1].user == logUser.user && user[1].pass == logUser.password)
    if (filter.length <= 0) {
        response.statusCode = 400;
        response.json("Wrong combination of username/password")
    } else if (filter.length >= 0) {
        currentUser = filter[0][1]
        currentUserAccess = filter[0][1].access
        currentUserKEY = filter[0][0]
        response.statusCode = 200;
        response.json(currentUserAccess)
    }
})



server.get('/users', (request, response) => {
    // console.log({...request});

    response.statusCode = 200;
    response.json(users);
});
server.listen(3001, () => {
    console.log(" Server Is Listening that Mingala Is Noob");

})


// const express = require('express')