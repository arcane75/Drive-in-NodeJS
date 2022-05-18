const express = require('express')
const morgan = require('morgan')
const contactRoutes = require('./contactRoutes')

const app = express()
app.use(morgan('dev'))
app.use(express.urlencoded({extended: true})) //any data type support
app.use(express.json())

app.use('/contacts', contactRoutes)

const port = process.env.PORT || 5000



app.get('*', (req, res) => {
    res.send('You are in wrong route')
})
app.listen(port, () => {
    console.log('listening on port', port);
})