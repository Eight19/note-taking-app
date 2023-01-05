const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

app.get("/", (rec,res) => {
    res.send("HelloClass");
});


app.listen(PORT)