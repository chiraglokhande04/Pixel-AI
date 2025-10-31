const Service = require("../models/serviceModel");

// 1. Add a new service
exports.addService = async (req, res) => {
  try {
    const { serviceName, features, projects } = req.body;
    const newService = await Service.create({ serviceName, features, projects });
    res.status(201).json({ message: "Service created successfully", service: newService });
  } catch (error) {
    res.status(500).json({ message: "Error creating service", error });
  }
};

// 2. Update an existing service
exports.updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedService = await Service.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedService) return res.status(404).json({ message: "Service not found" });
    res.json({ message: "Service updated", service: updatedService });
  } catch (error) {
    res.status(500).json({ message: "Error updating service", error });
  }
};

// 3. Delete a service
exports.deleteService = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedService = await Service.findByIdAndDelete(id);
    if (!deletedService) return res.status(404).json({ message: "Service not found" });
    res.json({ message: "Service deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting service", error });
  }
};

// 4. Get all services
exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: "Error fetching services", error });
  }
};

// 5. Add a project to a service
exports.addProject = async (req, res) => {
  try {
    const { serviceId } = req.params;
    const project = req.body;

    const service = await Service.findById(serviceId);
    if (!service) return res.status(404).json({ message: "Service not found" });

    service.projects.push(project);
    await service.save();

    res.json({ message: "Project added", service });
  } catch (error) {
    res.status(500).json({ message: "Error adding project", error });
  }
};

// 6. Edit a project of a service
exports.editProject = async (req, res) => {
  try {
    const { serviceId, projectId } = req.params;
    const updatedProject = req.body;

    const service = await Service.findById(serviceId);
    if (!service) return res.status(404).json({ message: "Service not found" });

    const project = service.projects.id(projectId);
    if (!project) return res.status(404).json({ message: "Project not found" });

    project.set(updatedProject);
    await service.save();

    res.json({ message: "Project updated", service });
  } catch (error) {
    res.status(500).json({ message: "Error updating project", error });
  }
};

// 7. Delete a project from a service

exports.deleteProject = async (req, res) => {
  try {
    const { serviceId, projectId } = req.params;

    const service = await Service.findById(serviceId);
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }

    const originalLength = service.projects.length;

    service.projects = service.projects.filter(
      (project) => project._id.toString() !== projectId
    );

    // If no project was removed
    if (service.projects.length === originalLength) {
      return res.status(404).json({ message: 'Project not found in this service' });
    }

    await service.save();

    return res.status(200).json({ message: 'Project deleted successfully' });

  } catch (error) {
    console.error('Error deleting project:', error);

    // Ensure only ONE response is sent
    if (!res.headersSent) {
      return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  }
};

// 8. Get all projects of a service
exports.getAllProjects = async (req, res) => {
  try {
    const { serviceId } = req.params;
    const service = await Service.findById(serviceId);
    if (!service) return res.status(404).json({ message: "Service not found" });

    res.json(service.projects);
  } catch (error) {
    res.status(500).json({ message: "Error fetching projects", error });
  }
};
