const Repairman = require("../models/repairman");

exports.getAllRepairmen = async (req, res) => {
  const repairmen = await Repairman.find(req.query)
    .sort(req.query.sort)
    .populate("service");
  res.status(200).json(repairmen);
};

exports.getRepairmanById = async (req, res) => {
  const repairman = await Repairman.findById(req.params.id).populate("service");
  res.status(200).json(repairman);
};

exports.createRepairman = async (req, res) => {
  const newRepairman = new Repairman(req.body);
  await newRepairman.save();
  res.status(201).json(newRepairman);
};

exports.updateRepairman = async (req, res) => {
  const repairman = await Repairman.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(repairman);
};

exports.deleteRepairman = async (req, res) => {
  await Repairman.findByIdAndDelete(req.params.id);
  res.status(204).json({ message: "Repairman deleted" });
};
