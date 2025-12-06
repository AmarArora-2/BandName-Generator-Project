import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import {fileURLToPath} from "url";
import morgan from "morgan";

const __dirNAme = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.sendFile(__dirNAme + "/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send(`<h1>Your Band Name is:</h1><h2>${req.body.street + req.body.pet}😜</h2>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});