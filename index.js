const express = require("express");
const cors = require("cors")
const app = express();
const port = 5000;


app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.send("hello this is my second node that i explore node mon change wow right")
})

const users = [
    { id: 0, name: "tva", email: "ema@gmail.com", phone: "012458555254" },
    { id: 1, name: "eva", email: "ema@gmail.com", phone: "012458555254" },
    { id: 2, name: "mon", email: "mon@gmail.com", phone: "012458555254" },
    { id: 3, name: "fata", email: "fata@gmail.com", phone: "012458555254" },
    { id: 4, name: "kabol", email: "kabou@gmail.com", phone: "012458555254" },
    { id: 5, name: "lota", email: "lota@gmail.com", phone: "012458555254" },
    { id: 6, name: "aslam", email: "maon@gmail.com", phone: "012458555254" },

]

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const result = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(result)
    } else {
        res.send(users)
    }
})


app.post("/users", (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    newUser.phone = "012315579964"
    users.push(newUser)
    res.json(newUser)

})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user)
})

const fruits = [
    "manog", "banana", "orange", "apple", "goyaba"
]

app.get("/fruits/mango/fazli", (req, res) => {
    res.send(fruits)
})

app.listen(port, () => {
    console.log("listen", port);
})