const express = require('express');
const routes = express.Router();

/* Controllers */
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

/* Session Routes */
routes.post('/sessions', SessionController.create);

/* ONGs Routes */
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

/* Incidents Routes */
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

/* Profile Routes */
routes.get('/profile', ProfileController.index);

module.exports = routes;