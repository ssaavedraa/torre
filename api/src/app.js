const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const path = require('path')

const routes = require('./routes/routes')

const server = express()

server.name = 'API'

server.use(morgan('dev'))

server.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "https://torre-theta.vercel.app/user/vilmacorrea/");
	res.setHeader("Access-Control-Allow-Credentials", "true");
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept, Authorization"
	);
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
	next();
});
server.use(cors());
server.use(express.urlencoded({extended: true}))
server.use(express.json())

server.use('/', routes)

server.use((err, req, res, next) => {
    const status = err.status || 500
    const message = err.message || err
    console.log(err)
    res.status(status).send(message)
})

module.exports = server