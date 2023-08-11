const express = require("express");
const morgan = require('morgan')
const app = express();


app.use(morgan("dev"))


app.get("/", (req, res) => {
    res.status(200).send("api is working fine");
})

app.listen(3010, () => {
    console.log("Server is running working")
});