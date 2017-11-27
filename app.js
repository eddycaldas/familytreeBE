const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
const routes = {
  parents: require("./routes/parents"),
  kids: require("./routes/kids"),
}

app.use(express.static('public'))
app.use("/parents", routes.parents)
app.use("/kids", routes.kids)

app.listen(PORT, () =>
console.log(`listeninig on ${PORT}`));
