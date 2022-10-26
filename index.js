const express = require("express")
const app = express()

const stuff = [
    {id: 1, name: "écouteur"},
    {id: 2, name: "chaussettes"},
    {id: 3, name: "train"},
    {id: 4, name: "rouge à lèvres"},
    {id: 5, name: "biberon"},
    {id: 6, name: "chocolatine"},
    {id: 7, name: "tasse"},
    {id: 8, name: "tabouret"},
    {id: 9, name: "chaise"},
    {id: 10, name: "table"},
]

app.get("/things", (req, res) => {
    console.log(req.query);
    const limit = []
    for (let i = 0; i < req.query.limit; i++) {
        limit.push(stuff[i])
    }
    res.send(limit)
})

app.get("/things/:bureau", (req, res) => {
    const parsedBureau = parseInt(req.params.bureau)
    const stuffItem = stuff.find((elem) => elem.id === parsedBureau)
    if (stuffItem) {
        res.send(stuffItem)
    } else {
        res.status(404).json("Oopsie... Seems like there is no response for your request")
    }
})

app.get("/", (req, res) => {
    res.send("Coucou petit utilisateur, tu es très beau et tu sens bon")
})

app.listen(9567, () => console.log("coucou"))