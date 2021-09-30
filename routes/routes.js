const { Router } = require('express');
const Controller = require('../controllers/controller');
const router = Router();

router.get('/', Controller.renderMain);
router.get('/create', Controller.renderCreate);
router.post('/create', Controller.createTask);
router.post('/complete', Controller.findTask);

module.exports = router;
