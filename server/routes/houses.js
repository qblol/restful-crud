const express = require('express');
const router = express.Router();

const controllers = require('../controllers/houses');

router.get('/', controllers.getHouses);
router.get('/:id', controllers.getHouse);
router.post('/', controllers.createHouse);
router.put('/:id', controllers.editHouse);
router.delete('/:id', controllers.deleteHouse);

module.exports = router;
