const app = require('express')()
const mainRouter = require('./routes/main')

app.use(mainRouter)

app.listen(3000, console.log('server listenning at port 3000'))

