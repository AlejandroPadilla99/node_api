const express  = require('express');
const morgan = require('morgan')

//local files
const router = require('./router')

const app = express()

/*
* Middleware
*/
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use((req, res, next) =>{
		req.some = 'doggy'
		next()
});

app.get('/', (req, res) => {
		console.log('hello from express')
		res.status(200)
		res.json({message: 'hello'})
});

app.use('/api', router)

module.exports = app
