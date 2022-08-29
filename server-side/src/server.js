const express = require("express");
const routes = require("./routes")
const db = require("./database")
const cors = require("cors");

const app = express();
db.connect("mongodb://localhost:27017/to-do-react");

app.use(cors({origin: "http://127.0.0.1:5500"}));
//Run fetch with front end localhost on port 5500
app.use(express.json());
app.use("/api", routes);

const port = process.env.PORT || 8024;
app.listen(port, console.log(`The Server is running on port ${port}`))
