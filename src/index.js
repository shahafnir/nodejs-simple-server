const path = require('path')
const express = require('express')
const cors = require('cors')

const port = process.env.PORT || 3500

const app = express()

app.use(express.json())
app.use(cors())

const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))

app.get('/', (req, res) => {
    res.sendFile('index')
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
