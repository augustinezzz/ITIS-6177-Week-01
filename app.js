// setting up the express requirement 
const express = require('express')
const app = express()
// sending Hello World response
app.get('/', (req,res) => {
    res.send('Hello World!')

})
// initiating port 3000
app.listen( 3000, () => {
    console.log ('Listening to port 3000')
    // Loggin Hello World
    console.log (' Hello World')
})