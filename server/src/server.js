const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.status(200).send("api is working fine");
})

app.listen(3010, () => {
    console.log("Server is running successful")
});