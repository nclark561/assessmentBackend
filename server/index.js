const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, faveColor, postStr, deleteStr } = require('./controller')

app.get("/api/compliment", getCompliment);

app.get('/api/fortune', getFortune);

app.put('/api/color', faveColor);

app.post('/api', postStr);

app.delete('/api', deleteStr)

app.listen(4000, () => console.log("Server running on 4000"));
