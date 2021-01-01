const express = require('express')
const app = express()
const port = '5000'

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://ghoonpark:ghoonpark@cluster0.q8qdu.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send("Hello World!"))

app.listen(port, () => console.log(`listening on port ${port}`))