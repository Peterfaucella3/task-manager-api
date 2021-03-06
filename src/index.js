const express = require('../node_modules/express')
require('./db/mongoose')

// Load in routers
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Serving up on port ' + port)
})