const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');
const auth = require('../middleware/auth'); 

router.route('/api/service')
  .get(serviceController.getAllServices)
  .post(auth, serviceController.createService); 

router.route('/api/service/:id')
  .get(serviceController.getServiceById)
  .patch(auth, serviceController.updateService) 
  .delete(auth, serviceController.deleteService);

module.exports = router;
