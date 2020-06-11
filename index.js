const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


const authRoute = require('./routes/autherization')
const mainPageRoute = require('./routes/mainpage')
const postsRoute = require('./routes/posts')
const profileRoute = require('./routes/profile')
const newsRoute = require('./routes/news')

const server = express()
const http = require('http').createServer(server)
// const io = require('socket.io')(http);


server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())

mongoose.connect(config.get('MONGO_URL'), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
    .then(() => console.log('MongoDB started'))
    .catch(err => console.log(`Mongoose ${err}`))

http.listen(config.get('PORT'), () => {
    console.log(`server start on ${config.get('PORT')}`)
})

// io.on('connection', (socket) => {
//     console.log('a user connected');
//   });


server.use('/auth', authRoute)
server.use('/', mainPageRoute)
server.use('/', postsRoute)
server.use('/profile', profileRoute)
server.use('/news', newsRoute )
server.use('/uploads', express.static('uploads'))