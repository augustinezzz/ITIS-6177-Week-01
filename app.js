// setting up the express requirement 
const express = require('express')
const app = express()
const {exec}  = require('child_process');
// Creating the route to run the command on terminal
app.get('/', (req,res) => {
   
  exec('open .', err =>{
      if (err){
        console.log(err);
      }
          
      res.send('Opening the File Explorer');
      console.log('Opening the File Explorer')
      
  })
   

})
// initiating port 3000
app.listen( 3000, () => {
    console.log ('Listening to port 3000')

})