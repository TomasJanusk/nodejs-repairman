const Service = require("../models/service");

exports.getAllServices = async (req, res) => {
  const services = await Service.find(req.query).sort(req.query.sort);
  res.status(200).json(services);
};

exports.getServiceById = async (req, res) => {
  const service = await Service.findById(req.params.id);
  res.status(200).json(service);
};

exports.createService = async (req, res) => {
  const newService = new Service(req.body);
  await newService.save();
  res.status(201).json(newService);
};

exports.updateService = async (req, res) => {
  const service = await Service.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(service);
};

exports.deleteService = async (req, res) => {
  await Service.findByIdAndDelete(req.params.id);
  res.status(204).json({ message: "Service deleted" });
};
