const router = require('express').Router();
const userController = require('../controllers/user.controller');

router.post('/registration',userController.register);

module.exports = router;