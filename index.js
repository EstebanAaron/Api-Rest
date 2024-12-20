const express = require('express');
const app = express();
const PORT = 3000;
const CLIENTS = require('./data/clients.json');
let idMax = Math.max(...CLIENTS.map(c => c.id));

app.use(express.json());