const express = require('express')
const bodyParser = require('body-parser')
const colors = require('colors')
const dotenv = require('dotenv').config()

const app = express()
app.use(bodyParser.json())
let users = [
    {
        id: 1,
        username: 'rafig',
    },

    {
        id: 4,
        username: 'rafig',
    },
   
   
]
app.get('/',(req,res) => {
    res.json(users)
}
)

app.delete('/:id' , (req,res) =>{
    const { id } = req.params
    users = users.filter((item) => item.id != id)
    res.json('User Deleted')
})
app.post('/' , (req,res) =>{
    const userbody = req.body
    users.push(userbody)
    res.send('User added successfully')
})




const PORT = process.env.PORT
app.listen(PORT,() => console.log(`Server is running: http://localhost:${PORT}`))
