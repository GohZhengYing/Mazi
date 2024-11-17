require('dotenv').config()
const express = require('express')
const connectDB = require('./src/database/connect')
const APIStack = require('./src/API/APIStack')
const userRouter = require('./src/API/routes/user')
const contactsRouter = require('./src/API/routes/contacts')
const authRouter = require('./src/API/routes/auth')
const messagesRouter = require('./src/API/routes/messages')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const xss =  require('xss-clean')
const rateLimiter = require('express-rate-limit');
const app = express()
const port = 4000

app.set('trust proxy',1);
app.use(helmet())
app.use(xss())
app.use(cors())
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 100,
  })
);
app.use(bodyParser.json({
    limit: '50mb'
  }));
  
  app.use(bodyParser.urlencoded({
    limit: '50mb',
    parameterLimit: 100000,
    extended: true 
  }));

//routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/user',userRouter)
app.use('/contacts',contactsRouter)
app.use('/auth',authRouter)
app.use('/messages',messagesRouter)

async function start (){
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port,console.log(`Server is listening on port ${port}`))
} catch (error) {
    console.log(error)
}
}

start()