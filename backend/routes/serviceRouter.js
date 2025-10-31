const express = require('express');
const serviceRouter = express.Router();
const serviceController = require('../controllers/serviceController');

serviceRouter.post('/add', serviceController.addService);
serviceRouter.put('/:id', serviceController.updateService);
serviceRouter.delete('/:id', serviceController.deleteService);
serviceRouter.get('', serviceController.getAllServices);

serviceRouter.post('/:serviceId/projects/add', serviceController.addProject);
serviceRouter.put('/:serviceId/projects/:projectId', serviceController.editProject);
serviceRouter.delete('/:serviceId/projects/:projectId', serviceController.deleteProject);
serviceRouter.get('/:serviceId/projects', serviceController.getAllProjects);

module.exports = serviceRouter;
