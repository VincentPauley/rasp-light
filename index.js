const express = require('express'),
      app = express()

app.use(express.static('dist'))

app.get('/toggle-light', (req, res) => {

    console.log('I am here')
    res.send('Signal Received!')
})

app.listen(3000, () => {
    console.log('baseball')
})