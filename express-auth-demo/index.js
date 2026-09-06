"use strict";
const  express  =  require('express');
const cors = require('cors')
const  sqlite3  =  require('sqlite3').verbose();
const  jwt  =  require('jsonwebtoken');
const  bcrypt  =  require('bcryptjs');

const SECRET_KEY = process.env.JWT_SECRET;
if (!SECRET_KEY) {
    throw new Error('JWT_SECRET must be set before starting the authentication server.');
}

const  app  =  express();
const  router  =  express.Router();
app.use(cors());
app.use(express.json());
const database = new sqlite3.Database("./my.db");

const  createUsersTable  = () => {
    const  sqlQuery  =  `
        CREATE TABLE IF NOT EXISTS users (
        id integer PRIMARY KEY,
        name text,
        email text UNIQUE,
        password text)`;

    return  database.run(sqlQuery);
}

const  findUserByEmail  = (email, cb) => {
    return  database.get(`SELECT * FROM users WHERE email = ?`,[email], (err, row) => {
            cb(err, row)
    });
}

const  createUser  = (user, cb) => {
    return  database.run('INSERT INTO users (name, email, password) VALUES (?,?,?)',user, (err) => {
        cb(err)
    });
}

createUsersTable();

router.get('/', (req, res) => {
    res.status(200).send('This is an authentication server');
});

router.post('/register', (req, res) => {

    const  name  =  req.body.name;
    const  email  =  req.body.email;
    if (!name || !email || !req.body.password) {
        return res.status(400).send('Name, email and password are required.');
    }
    const  password  =  bcrypt.hashSync(req.body.password, 12);

    createUser([name, email, password], (err)=>{
        if(err) return  res.status(500).send("Server error!");
        findUserByEmail(email, (err, user)=>{
            if (err) return  res.status(500).send('Server error!');  
            const  expiresIn  =  24  *  60  *  60;
            const  accessToken  =  jwt.sign({ id:  user.id }, SECRET_KEY, {
                expiresIn:  expiresIn
            });
            res.status(200).send({ "user":  publicUser(user), "access_token":  accessToken, "expires_in":  expiresIn
            });
        });
    });
});


router.post('/login', (req, res) => {
    const  email  =  req.body.email;
    const  password  =  req.body.password;
    findUserByEmail(email, (err, user)=>{
        if (err) return  res.status(500).send('Server error!');
        if (!user) return  res.status(404).send('User not found!');
        const  result  =  bcrypt.compareSync(password, user.password);
        if(!result) return  res.status(401).send('Password not valid!');

        const  expiresIn  =  24  *  60  *  60;
        const  accessToken  =  jwt.sign({ id:  user.id }, SECRET_KEY, {
            expiresIn:  expiresIn
        });
        res.status(200).send({ "user":  publicUser(user), "access_token":  accessToken, "expires_in":  expiresIn});
    });
});

function publicUser(user) {
    return { id: user.id, name: user.name, email: user.email };
}

app.use(router);
const  port  =  process.env.PORT  ||  3000;
const  server  =  app.listen(port, () => {
    console.log('Server listening at http://localhost:'  +  port);
});