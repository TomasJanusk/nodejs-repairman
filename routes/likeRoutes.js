const express = require('express');
const router = express.Router();
const likeController = require('../controllers/likeController');
const auth = require('../middleware/auth'); 

router.route('/api/repairman/:id/likes')
  .get(likeController.getAllLikes)
  .post(auth, likeController.likeRepairman) 
  .delete(auth, likeController.unlikeRepairman); 

module.exports = router;
