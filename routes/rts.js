const express = require('express');
const { createNote, readNote, deleteNote, updateNote } = require('../controllers/notecontrols');
const { registerUser, userlogin } = require('../controllers/usercontrols');

const routeManager = express.Router();

routeManager.post('/', registerUser);
routeManager.post('/login', userlogin);
routeManager.post('/note', createNote)
routeManager.get('/note/:id', readNote)
routeManager.delete('/note/:id', deleteNote)
routeManager.patch('/note/:id', updateNote)
module.exports = { routeManager };
