const express = require('express');
const router = express.Router();
const repairmanController = require('../controllers/repairmanController');
const auth = require('../middleware/auth'); 

router.route('/api/repairman')
  .get(repairmanController.getAllRepairmen)
  .post(auth, repairmanController.createRepairman); 

router.route('/api/repairman/:id')
  .get(repairmanController.getRepairmanById)
  .patch(auth, repairmanController.updateRepairman) 
  .delete(auth, repairmanController.deleteRepairman); 

module.exports = router;
