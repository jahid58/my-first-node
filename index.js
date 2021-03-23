const express = require('express')

const app = express()


app.get('/',(req,res)=>res.send('thank you very much'))

app.listen(3000,()=>console.log('fuck me if You can'))