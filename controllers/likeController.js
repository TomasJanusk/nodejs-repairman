const Repairman = require("../models/repairman");
const User = require("../models/user");

exports.getAllLikes = async (req, res) => {
  const repairman = await Repairman.findById(req.params.id).populate("likes");
  res.status(200).json(repairman.likes);
};

exports.likeRepairman = async (req, res) => {
  const repairman = await Repairman.findById(req.params.id);
  if (!repairman.likes.includes(req.user.userId)) {
    repairman.likes.push(req.user.userId);
    await repairman.save();
  }
  res.status(200).json(repairman.likes);
};

exports.unlikeRepairman = async (req, res) => {
  const repairman = await Repairman.findById(req.params.id);
  repairman.likes = repairman.likes.filter(
    (id) => id.toString() !== req.user.userId
  );
  await repairman.save();
  res.status(200).json(repairman.likes);
};
