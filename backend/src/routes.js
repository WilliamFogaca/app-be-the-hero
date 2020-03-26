const express = require('express');
const routes = express.Router();

/* Controllers */
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');

/* ONGs Routes */
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

/* Incidents Routes */
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;