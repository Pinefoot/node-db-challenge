const express = require('express');

const projects-router = require('./projects/projects-router');

const server = express();

server.use(express.json());
server.use('/api/recipes', recipesRouter);

module.exports = server;