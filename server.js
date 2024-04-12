// this is the main file for the web server.
// a web server creates web pages in response to a request from a browser,
// the browser can display that page to the user.

const express = require('express')  // imports express library
const path = require ('path')  // imports path library
const bodyParser = require('body-parser')  // imports body-parser library

// routing is figuring out what page the user wants
// typically based on the URL (browser address bar)
//
const indexRouter = require('./routes/index.js')  // imports index.js as indexRouter

const app = express()  // creates the web app server

// enable parsing of POST request
app.use(bodyParser.urlencoded({ extended: false }))

const staticFileLocation = path.join(__dirname, 'public')
app.use(express.static(staticFileLocation))

// configure app to use the Handlbars template engine and work with template files in the views directory

app.set('views', path.join(__dirname, 'views'))  // express will find views on dirname path
// "views" are web pages, hbs is handlebars
app.set('view engine', 'hbs')

app.use('/', indexRouter)  // all requests to the app will be passed to the indexRouter (receive, request, and generate response)

let server = app.listen(3000) // starts server on port 3000


