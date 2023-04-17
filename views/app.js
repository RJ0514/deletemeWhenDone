// Imports
const express = require(`express`);
const app = express();
const path = require(`path`);
const router = express.Router();
//const fs = require('fs');

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + `../index.html`))
});

const port = 8080;
app.use(express.json());

//Parser for requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/convert", (req, res) => {
  const { binary } = req.body;
  const hexNum = binary_to_hex(binary);
  const binNum = binary;

  res.json({ hexNum, binNum });
});

app.use(express.static(__dirname + `/public`));
app.use('/', router)
